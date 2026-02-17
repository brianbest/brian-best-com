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

const databaseUrl = process.env.DATABASE_URL
const databaseUrl =
  process.env.DATABASE_URL ??
  process.env.DASHBOARD_DATABASE_URL ??
  process.env.POSTGRES_URL ??
  process.env.POSTGRES_URL_NON_POOLING ??
  process.env.POSTGRES_PRISMA_URL

const sql = databaseUrl ? neon(databaseUrl) : null

let schemaReadyPromise: Promise<void> | null = null

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
  })()

  return schemaReadyPromise
}

export function isInteractionStoreEnabled(): boolean {
  return Boolean(sql)
}

export async function persistInteraction(params: PersistInteractionParams): Promise<void> {
  if (!sql) return

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
    console.error("Failed to persist AI interaction:", error)
  }
}
