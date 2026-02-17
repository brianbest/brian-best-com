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
);

CREATE INDEX IF NOT EXISTS ai_interactions_created_at_idx
  ON ai_interactions (created_at DESC);

CREATE INDEX IF NOT EXISTS ai_interactions_endpoint_idx
  ON ai_interactions (endpoint);
