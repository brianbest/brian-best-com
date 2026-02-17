import { neon } from "@neondatabase/serverless"

type InteractionEndpoint = "chat" | "job_fit"
type InteractionStatus = "success" | "error"

interface PersistInteractionParams {
  endpoint: InteractionEndpoint
  status: InteractionStatus
  clientId: string
  model: string
  requestText?: string
  responseText?: string
  requestPayload?: unknown
  responsePayload?: unknown
  injectionDetected?: boolean
  errorMessage?: string
}

const databaseUrl =
  process.env.DATABASE_URL ??
  process.env.DASHBOARD_DATABASE_URL ??
  process.env.POSTGRES_URL ??
  process.env.POSTGRES_URL_NON_POOLING ??
  process.env.POSTGRES_PRISMA_URL

const sql = databaseUrl ? neon(databaseUrl) : null
let schemaReadyPromise: Promise<void> | null = null
let hasLoggedMissingDbUrl = false

function obfuscateDatabaseUrl(url: string | undefined): string {
  if (!url) return "not configured"
  try {
    const parsed = new URL(url)
    const ssl = parsed.searchParams.get("sslmode")
      ? `sslmode=${parsed.searchParams.get("sslmode")}`
      : "sslmode=unset"
    return `${parsed.protocol}//${parsed.hostname}${parsed.pathname} (${ssl})`
  } catch {
    return "invalid url format"
  }
}

function dbSourceSummary() {
  return {
    databaseUrl: obfuscateDatabaseUrl(databaseUrl),
    envCandidates: {
      DATABASE_URL: Boolean(process.env.DATABASE_URL),
      DASHBOARD_DATABASE_URL: Boolean(process.env.DASHBOARD_DATABASE_URL),
      POSTGRES_URL: Boolean(process.env.POSTGRES_URL),
      POSTGRES_URL_NON_POOLING: Boolean(process.env.POSTGRES_URL_NON_POOLING),
      POSTGRES_PRISMA_URL: Boolean(process.env.POSTGRES_PRISMA_URL),
    },
  }
}

function logPersistenceIssue(params: {
  event: "skip_no_database" | "schema_failed" | "insert_failed"
  endpoint: InteractionEndpoint
  status: InteractionStatus
  clientId: string
  model: string
  detail?: string
}) {
  console.error(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      type: "ai_interaction_persistence",
      ...params,
      database: dbSourceSummary(),
    })
  )
}

function toText(value: unknown): string | null {
  if (value == null) return null
  if (typeof value === "string") return value

  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}

async function ensureSchema(): Promise<void> {
  if (!sql) return
  if (schemaReadyPromise) return schemaReadyPromise

  schemaReadyPromise = (async () => {
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS ai_interactions (
          id BIGSERIAL PRIMARY KEY,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          endpoint TEXT NOT NULL,
          status TEXT NOT NULL,
          client_id TEXT NOT NULL,
          model TEXT NOT NULL,
          request_text TEXT,
          response_text TEXT,
          request_payload TEXT,
          response_payload TEXT,
          injection_detected BOOLEAN NOT NULL DEFAULT FALSE,
          error_message TEXT
        )
      `

      await sql`
        CREATE INDEX IF NOT EXISTS ai_interactions_created_at_idx
        ON ai_interactions (created_at DESC)
      `

      await sql`
        CREATE INDEX IF NOT EXISTS ai_interactions_endpoint_idx
        ON ai_interactions (endpoint)
      `
    } catch (error) {
      logPersistenceIssue({
        event: "schema_failed",
        endpoint: "chat",
        status: "error",
        clientId: "system",
        model: "schema",
        detail: error instanceof Error ? error.message : String(error),
      })
      throw error
    }
  })()

  return schemaReadyPromise
}

export function isInteractionStoreEnabled(): boolean {
  return Boolean(sql)
}

export async function persistInteraction(params: PersistInteractionParams): Promise<void> {
  if (!sql) {
    if (!hasLoggedMissingDbUrl) {
      logPersistenceIssue({
        event: "skip_no_database",
        endpoint: params.endpoint,
        status: params.status,
        clientId: params.clientId,
        model: params.model,
        detail: "No resolved database URL found for interaction persistence.",
      })
      hasLoggedMissingDbUrl = true
    }
    return
  }
  hasLoggedMissingDbUrl = false

  try {
    await ensureSchema()

    await sql`
      INSERT INTO ai_interactions (
        endpoint,
        status,
        client_id,
        model,
        request_text,
        response_text,
        request_payload,
        response_payload,
        injection_detected,
        error_message
      ) VALUES (
        ${params.endpoint},
        ${params.status},
        ${params.clientId},
        ${params.model},
        ${params.requestText ?? null},
        ${params.responseText ?? null},
        ${toText(params.requestPayload)},
        ${toText(params.responsePayload)},
        ${params.injectionDetected ?? false},
        ${params.errorMessage ?? null}
      )
    `
  } catch (error) {
    logPersistenceIssue({
      event: "insert_failed",
      endpoint: params.endpoint,
      status: params.status,
      clientId: params.clientId,
      model: params.model,
      detail: error instanceof Error ? error.message : String(error),
    })
    console.error("Failed to persist AI interaction:", error)
  }
}
