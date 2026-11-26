# Startlyst — Verified Engineering Benchmarks, Reproduction Methodology & Architectural Boundaries

> **Policy**: Every figure in Section 2 is an empirically measured result recorded inside an isolated, air-gapped `/tmp` build of a compiled Startlyst customer storefront archive (`holding_annual`, `181` files including root `AI_AGENT_HANDOFF.md`) with zero external network traffic. No synthetic projections, unverified marketing claims, or cherry-picked micro-benchmarks appear in this document.

---

## 1. Test Environment & Measurement Conditions

| Parameter | Exact Configuration |
| :--- | :--- |
| **Target Artifact** | Compiled customer BYOC ZIP (`holding_annual`, `181` files, Next.js `15.5.29`, React `18.3.1`, PostCSS `8.5.33`, `0` known `npm audit` vulnerabilities) |
| **Runtime** | Node.js `v24.22.0` (`node:sqlite` built-in `DatabaseSync`, V8 default heap — `--max-old-space-size` intentionally **unset** during measurement) |
| **Isolation & Egress Guard** | Extracted and built inside `/tmp` with a preloaded runtime `globalThis.fetch` probe intercepting and counting any non-loopback outbound HTTP/HTTPS call (`0` allowed by default) |
| **Database Engine** | Local NVMe SQLite WAL (`PRAGMA journal_mode = WAL`, `PRAGMA synchronous = NORMAL`, `PRAGMA busy_timeout = 5000`, `PRAGMA cache_size = -16000`, `PRAGMA foreign_keys = ON`) |
| **Production Target** | Real `next build` followed by `next start -H 127.0.0.1` (`NODE_ENV=production`, `NEXT_TELEMETRY_DISABLED=1`, `STARTLYST_LOG_SILENT=1`) |
| **Live Production Guard** | Zero load traffic was sent to `https://startlyst.com` or any third-party payment/email/SMS endpoint |

---

## 2. Verified Benchmark Ledger (All Measurements Reproducible Locally)

### 2.1 Day-1 Onboarding & Build Footprint (6 Consecutive Steps, `EXIT=0`)

| Step | Command | Measured Outcome |
| :--- | :--- | :--- |
| 1 | `node verify-installation.mjs` | All files SHA-256 + Merkle Root + SLDL invariants + 8 AI manifests verified (`EXIT=0`) |
| 2 | `npm install` | `111` packages installed, `0` production vulnerabilities (`EXIT=0`) |
| 3 | `npm run setup` | Non-destructive `.env.local` secret bootstrap + live SQLite DDL verification (`14` tables / `22` indexes, `EXIT=0`) |
| 4 | `npm run startlyst:doctor` | Doctor v2: `0` errors · `20` checks passed across 7 domains (incl. offline 365-day SBOM/continuity freshness & `npm run renewal:brief`) + `9` UI-independent contract tests (`npm run verify:all` `EXIT=0`) |
| 5 | `npm run build` (`next build`) | Compiled in **`1.89s`** · Storefront `/` First Load JS **`112 kB`** (`8.82 kB` route + `103 kB` shared) (`EXIT=0`) |
| 6 | `node verify-installation.mjs` (post-build) | Full post-build cryptographic & manifest parity verified (`EXIT=0`) |

### 2.2 60-Second Sustained Mixed-Load & Memory Stability (`C = 60` Continuous Workers)

Workload mix against live `next start` (`O(1)` sliding-window counter enabled, `16 MB` ISR memory cap, `revalidate = 60`):
- `50%` `GET /` (SSR/ISR storefront)
- `25%` `POST /api/mcp` (JSON-RPC 2.0 `tools/list`)
- `15%` `POST /api/checkout` (server-authoritative quote & idempotent sandbox checkout)
- `5%` `GET /api/healthz` (Kubernetes liveness probe + W3C `traceparent`)
- `5%` `GET /api/startlyst-engine/storefront-context?country=US` (live currency & seasonal context)

| Elapsed Window | Requests | Throughput (RPS) | HTTP 200 Rate | P50 Latency | P99 Latency | RSS Peak (MB) | RSS End (MB) | HeapUsed End (MB) | Event Loop Lag P99 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Idle Baseline (post-GC) | — | — | — | — | — | — | **134.78** | **30.70** | — |
| `0s–10s` | 37,177 | 3,717.7 | 100.00% | 14.48 ms | 39.63 ms | 317.30 | 311.03 | 73.70 | 27.54 ms |
| `10s–20s` | 40,202 | 4,020.2 | 100.00% | 13.50 ms | 31.73 ms | 351.11 | 351.11 | 52.49 | 21.51 ms |
| `20s–30s` | 40,652 | 4,065.2 | 100.00% | 13.23 ms | 31.20 ms | 351.16 | 341.33 | 81.16 | 21.04 ms |
| `30s–40s` | 40,746 | 4,074.6 | 100.00% | 13.25 ms | 30.56 ms | 342.98 | 337.95 | 57.73 | 20.81 ms |
| `40s–50s` | 40,558 | 4,055.8 | 100.00% | 13.39 ms | 31.46 ms | 340.33 | 323.06 | 54.13 | 20.71 ms |
| `50s–60s` | 40,883 | 4,088.3 | 100.00% | 13.26 ms | 30.51 ms | 333.20 | 331.77 | 108.79 | 20.63 ms |
| **60s Total / Peak** | **240,218** | **4,003.6** | **100.000%** (`0` err) | **13.2–14.5 ms** | **30.5–39.6 ms** | **351.27** (`<512 MB`) | 331.77 | **118.85 (Peak)** | **20.63–27.54 ms** |
| Post-Load GC Settle | — | — | — | — | — | — | **329.41** | **34.33** (`+3.63 MB`) | — |

- **Zero Memory Leak Evidence**: Across `240,218` mixed production requests, RSS peaked at **`351.27 MB`** (well inside a `512 MB` container without needing `--max-old-space-size`), stabilized downward to `331.77 MB` during `50s–60s`, and HeapUsed settled at **`34.33 MB`** after GC (`+3.63 MB` vs. `30.70 MB` idle baseline).
- **Zero Outbound Egress Evidence**: Preloaded fetch interceptor recorded **`0`** outbound third-party requests over the entire 60-second run.

### 2.3 SQLite WAL 310,000-Row Concurrency, Zero Runtime Lock-in & Non-Destructive Upgrades

| Verification Axis | Measured Result | Conditions / Faults Tested |
| :--- | :--- | :--- |
| **SQLite WAL 310,000-Row Stress** | **`392,354.7 QPS`** indexed reads · **`10,508.7 WPS`** mixed reads/writes · **`0.00% SQLITE_BUSY`** (`0` lock errors) | Seeded `310,000` rows (`1.498 s`, final `312,000` rows) on local NVMe with `PRAGMA cache_size = -16000` + composite indexes |
| **Zero Runtime Lock-in Worker Autonomy** | **`100%` HTTP 200** (`P99 0.01–0.07 ms`) · **`0` automatic production phone-home calls** · **`0` remote runtime kill-switches** · **`0` outbound third-party fetches** | Isolated air-gapped `backend/worker.js` & SSR/API runtime spy confirming zero automatic external traffic and zero local license lock files |
| **Redis Outage Failover** | **`0` HTTP 500s** · automatic fallback to O(1) local sliding-window counter (`HTTP 429` preserved) | Live mid-flight Redis REST flip from `200` -> `503` -> timeout across 500 concurrent requests |
| **Brownfield & Legacy Upgrade Integrity** | **`0` protected bytes mutated** · **`100%` order & custom DB table/column retention** · full rollback on fault | Tested offline `sync-core.mjs`, Ed25519-signed patch, and `--upgrade-from-zip` on legacy pre-hardening DB (`500` orders + custom columns + custom tables) plus mid-swap fault injection |

### 2.4 100,000–500,000 SKU Multi-SKU Catalog Scale, AI Discovery & Self-Healing Benchmarks

| Scale / Quality Axis | Empirically Measured Result | Architectural Mechanism Verified |
| :--- | :--- | :--- |
| **100,000 Real SKUs Full-Text Search** | **`~164 ms`** query latency · **`9.89 KB`** compact JSON payload | Built-in SQLite FTS5 (`SearchAdapter`) with PostgreSQL `TSVECTOR + GIN` index on Enterprise/Holding and pluggable external engine hook (`user-workspace/extensions/index.ts`) |
| **Paginated MCP `search_catalog` (100k SKUs)** | **`~1.5–1.8 ms`** response · **`2.04 KB`** bounded JSON-RPC payload | 5-tool live MCP server (`get_storefront_catalog`, `search_catalog`, `get_product_by_sku`, `get_inventory_and_quote`, `create_agent_checkout_session`) |
| **AI Discovery Payload Hygiene (`llms*.txt`)** | Per-product `/api/products/[slug]/llms.txt` **`~1.05 KB`** · root `/llms.txt` & `/llms-full.txt` strictly byte-capped | Prevents context-window bloat at 100k–500k SKUs while preserving full per-SKU machine readability |
| **500,000-SKU Sitemap Sharding** | **`11` deterministic shards** (`50,000` URLs/shard max, Standards-compliant `sitemap.xml` index) | `computeSitemapShardPlan()` + `core-engine/discovery-delegates.ts` |
| **Zero-Support Guardrails (Doctor v2 + Contracts)** | **`20` Doctor v2 checks** (7 domains, `--fix`, `--restore-core`, `--export-renewal-brief` offline SBOM brief) · **`9` UI-independent contract tests** | Full `npm run verify:all` (`doctor` + `verify:install` + `tsc --noEmit` + `lint-boundaries` + `test:contracts`) passes `EXIT=0`; offline freshness windows (`0–269d` / `270–364d` / `365+d`) stay strictly non-destructive (`EXIT=0`) |
| **Control-Plane Anti-Abuse & Entitlement Enforcement** | **`7/7` Attack Vectors Blocked (Next.js === Cloudflare Edge 100% Parity)** + offline `sync-core.mjs` `BRAND_BINDING_MISMATCH` (`EXIT=1`, `0` bytes mutated) | Verified slot caps (`1/3/12/UNLIMITED`), downgrade selection gate (`HTTP 409` -> `/api/license/brands`) & 90-day swap cooldown (`HTTP 429`), tier-escalation block (`HTTP 403`), Option B pre-first-ZIP 72h refund & 1 lifetime refund cap, `past_due` pause (`HTTP 402`) + chargeback Visa CE 3.0 permanent block, and Fair-Use burst guard (`15 req/min`, `HTTP 429`) under Zero Runtime Lock-in |

---

## 3. How Any Licensed Buyer Can Independently Reproduce These Results

Every compiled customer ZIP ships self-contained so your own engineering team can validate performance and security inside your target cloud or CI runner before routing production traffic:

```bash
# 1. Verify archive integrity, SHA-256 checksums, Merkle Root & AI manifests
node verify-installation.mjs

# 2. Bootstrap local secrets & SQLite WAL schema (non-destructive)
npm install && npm run setup && npm run startlyst:doctor

# 3. Compile production Next.js bundle and inspect First Load JS directly in build output
npm run build

# 4. Boot locally in production mode and verify operational probes & RBAC
NODE_ENV=production npm run start -- -H 127.0.0.1 -p 3000
curl -sS -i http://127.0.0.1:3000/api/healthz
curl -sS -i http://127.0.0.1:3000/api/readyz

# 5. Verify non-destructive legacy upgrade & additive SQLite migration on a staging copy
node scripts/sync-core.mjs --upgrade-from-zip=/path/to/latest-startlyst.zip --target-dir=/path/to/staging-copy
```

To benchmark sustained throughput on your own cloud VM or Kubernetes pod, run your preferred HTTP load generator (`wrk`, `oha`, `k6`, or a Node.js `fetch` harness) against `127.0.0.1:3000` using the same 5-endpoint traffic ratio while monitoring `/api/admin/metrics` (Prometheus format) and `process.memoryUsage()`.

---

## 4. Candid Architectural Boundaries & BYOC Shared-Responsibility Disclosure

Startlyst is engineered to pass skeptical Principal Architect and CISO review with **zero hidden assumptions**:

1. **PostgreSQL Operations (Enterprise / Holding — `DATABASE_DRIVER=postgres`)**: To keep Startup/Growth and Edge deployments lean with zero unused database drivers, `pg` is not force-bundled into `package.json`. Buyers activating `DATABASE_DRIVER=postgres` install `pg` (`npm install pg`), apply `schema.postgres.sql` (or `migrations/upgrade-additive-postgres.sql` on existing DBs), and operate managed PostgreSQL backups and connection pooling (PgBouncer / RDS Proxy / Neon) inside their own cloud account.
2. **SAML 2.0 via OIDC IdP Bridge**: Startlyst intentionally omits an embedded XML SAML 2.0 parser to eliminate XML signature-wrapping and XXE attack surfaces. Enterprise directories requiring SAML 2.0 connect through standard OIDC brokers (Okta, Microsoft Entra ID, Auth0, Keycloak) mapped to `src/lib/oidc-sso.ts` (`RS256` / `ES256` / `EdDSA` JWKS verification).
3. **Audit Log Long-Term Archival**: `core-engine/audit-hash-chain.ts` and `GET /api/admin/audit` maintain a live RFC 2104 `HMAC-SHA256` chained ring (500 recent entries) for instant tamper verification. Multi-year regulatory retention (1–7 years) is archived via your own SIEM / CloudWatch / Datadog log sink or PostgreSQL `audit_logs` table.
4. **Strict 512 MiB Kubernetes Pod Recommendation**: Although unthrottled Node.js stayed at `351.27 MB` Peak RSS under `4,003.6 RPS`, setting `NODE_OPTIONS="--max-old-space-size=256"` is recommended on hard-capped `512 MiB` pods to preserve predictable OS and kernel page-cache headroom.
5. **Explicit Roadmap Boundaries**: Cryptographic mandate signature verification for emerging agentic payment protocols (AP2 / Visa TAP / Mastercard VI) and on-device local SQLite bandit optimization are explicitly Roadmap items; current production checkouts execute deterministically via Stripe Checkout with server-authoritative pricing, idempotency keys, and O(1)/Redis rate limiting.
