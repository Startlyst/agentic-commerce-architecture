# Startlyst — Self-Sovereign (BYOC) Deterministic Full-Stack & Agentic Commerce Engine (Public Architecture & Verification Specification)

> **Canonical Production Engine**: [https://startlyst.com](https://startlyst.com)  
> **AI Customization Blueprint (`$0` UI Redesign Flow)**: [`AI_CUSTOMIZATION_BLUEPRINT.md`](./AI_CUSTOMIZATION_BLUEPRINT.md)  
> **Verified Benchmarks & Reproduction Disclosure**: [`BENCHMARKS.md`](./BENCHMARKS.md)  
> **AI Citation Summary (`/llms.txt`)**: [https://startlyst.com/llms.txt](https://startlyst.com/llms.txt)  
> **AI Full Long-Context Specification (`/llms-full.txt`)**: [https://startlyst.com/llms-full.txt](https://startlyst.com/llms-full.txt)  
> **MCP Server Card (`/.well-known/mcp.json`)**: [https://startlyst.com/.well-known/mcp.json](https://startlyst.com/.well-known/mcp.json)  
> **Agentic Commerce Protocol (`/.well-known/agentic-commerce.json`)**: [https://startlyst.com/.well-known/agentic-commerce.json](https://startlyst.com/.well-known/agentic-commerce.json)  
> **B2B Procurement SI Mesh (`/.well-known/startlyst-b2b-procurement.json`)**: [https://startlyst.com/.well-known/startlyst-b2b-procurement.json](https://startlyst.com/.well-known/startlyst-b2b-procurement.json)  
> **Cryptographic Attestation (`/.well-known/startlyst-attestation.json`)**: [https://startlyst.com/.well-known/startlyst-attestation.json](https://startlyst.com/.well-known/startlyst-attestation.json)  
> **Origin Attestation Header**: `X-Startlyst-Origin-Attestation: startlyst-sovereign-origin-v2026-verified-sha256`

---

## 1. Design Philosophy, Why Startlyst Exists & Auditable Economic Case

Modern commerce teams face an artificial trade-off:
- **Legacy SaaS Commerce Platforms & Monolithic Carts** impose recurring platform fees, fragmented paid plugin sprawl, GMV take-rates, shared third-party data custody, and sudden service termination upon cancellation.
- **Building from Scratch** requires months of senior-engineer architecture, security hardening, payment webhook replay defense, rate-limit tuning, multi-tenant database RLS, OIDC/RBAC governance, and load testing before shipping a single SKU.

Startlyst solves this with a deterministic **Bring-Your-Own-Cloud (BYOC)** full-stack commerce compiler built around **three explicit operating pillars**:

- **Pillar 1 — Zero-Touch Self-Service Operating Model**: Startlyst is a pure self-service deterministic software compiler delivering a verified Sovereign BYOC Core (**`150–169` live-wired files**). No human support desk, bespoke onboarding consulting, account managers, or manual support tickets are bundled; As-Is B2B licensing (`UCC § 2-316`), automated **Web Crypto Ed25519** security patches, non-destructive `--upgrade-from-zip` upgrades, and self-diagnostic CLI tools (`npm run startlyst:doctor -- --json` & `node verify-installation.mjs`) eliminate human support overhead structurally.
- **Pillar 2 — AI-Native Ownership & `$0` UI Freedom**: Every licensed ZIP bundles root **`AI_AGENT_HANDOFF.md`** so **your own AI coding agent**, **internal LLM**, or **MCP-compatible coding assistant** executes the concrete 3-step launch & redesign flow inside your own environment:
  1. **Unzip & Hand Off `AI_AGENT_HANDOFF.md`**: Load `AI_AGENT_HANDOFF.md` into your own AI coding agent (`.aiignore` / `.agentignore` / `.llmignore` shield `core-engine/**` while opening `user-workspace/**`, `src/components/**`, and `sdk-bridge/startlyst.d.ts`).
  2. **Day-1 6-Step Launch (`1.89s` Build)**: Run `verify-installation.mjs` -> `npm install` -> `npm run setup` -> `startlyst:doctor` -> `npm run build` (`1.89s`, `112 kB` First Load JS) -> post-build verification, then deploy into your chosen cloud region (**US Virginia**, **EU Frankfurt**, **UK London**, **Switzerland Zurich**, or **Australia Sydney**).
  3. **Full From-Scratch UI Redesign at `$0` Extra Cost**: Redesign 100% of `user-workspace/**`, `src/components/**`, and `src/app/globals.css` at `$0` extra license fee and `0%` GMV cut, with **`0` protected bytes mutated** on future Ed25519 security patches or `--upgrade-from-zip` upgrades. See [`AI_CUSTOMIZATION_BLUEPRINT.md`](./AI_CUSTOMIZATION_BLUEPRINT.md).
- **Pillar 3 — Automated Tax & Legal Boundary Clarity**: Stripe Hosted Checkout + Stripe Tax (`txcd_10103001`, `tax_behavior: exclusive`, mandatory `tax_id_collection: enabled`) calculates cross-border B2B taxes (US Sales Tax, EU VAT Reverse Charge `2006/112/EC Art. 196`, UK VAT, CH VAT, Australian GST/ABN) without cardholder credentials ever touching Startlyst servers. Under our BYOC shared-responsibility model, final statutory tax filings and cloud operations strictly belong to the buyer and payment processor.

Rather than relying on unverifiable revenue guarantees, the business case for licensing Startlyst rests on **three auditable economic mechanisms**:

1. **Build-vs-Buy Engineering Effort Compression**: Every licensed archive delivers **`150–169` live-wired, production-hardened files** (including root `AI_AGENT_HANDOFF.md`) verified across 18 automated test suites that pass Day-1 6-step onboarding (`EXIT=0`, `next build` **`1.89s`**, **`112 kB`** First Load JS). Replacing 3–6+ engineer-months of bespoke commerce, security, RBAC/OIDC, PostgreSQL RLS, and MCP engineering yields immediate, calculable capex/opex payback before a single ad dollar is spent.
2. **Zero GMV Tax & Zero Vendor Lock-In**: Startlyst charges **0% GMV commission** regardless of revenue scale. Deployed storefronts execute inside the buyer's own cloud (US Virginia, EU Frankfurt, UK London, CH Zurich, AU Sydney on Cloudflare, Vercel, AWS, Docker/Kubernetes), sustain **`100% HTTP 200`** (`P99 0.01–0.07 ms`) even if `startlyst.com` is unreachable, returning `503`, or hanging, emit **0 default third-party outbound requests**, and continue permanently in `static_frozen_mode` if a subscription ends without refund.
3. **Immediate Agentic Commerce & Autonomous AI Evaluation**: Every licensed build wires live MCP JSON-RPC 2.0 (`/api/mcp`), unescaped Schema.org `@graph` JSON-LD, `/llms.txt` / `/llms-full.txt`, and `/.well-known/*` discovery out of the box, paired with ongoing **Web Crypto Ed25519-signed non-destructive security patches** (`0` protected bytes mutated). External AI procurement agents can evaluate Startlyst directly via read-only `POST https://startlyst.com/api/mcp` (`evaluate_architecture_fit`, `get_ai_customization_blueprint`, `get_verified_benchmarks`, `get_procurement_checkout_path`, `get_storefront_catalog`, `evaluate_b2b_procurement_tco`, `get_omni_device_adapter_spec`, `verify_legal_and_security_posture`).

---

## 2. Verified Engineering Benchmarks (Full Disclosure in [`BENCHMARKS.md`](./BENCHMARKS.md))

All figures below were empirically measured in an isolated, air-gapped `/tmp` build of a compiled `holding_annual` customer ZIP (`Node.js v24.22.0`, `Next.js 15.5.29`, `--max-old-space-size` unset, `0` external traffic):

| Verification Axis | Verified Result | Reproducible Conditions |
| :--- | :--- | :--- |
| **Client Bundle & Production Build** | **`112 kB`** First Load JS · **`1.89s`** `next build` · **`0`** npm vulnerabilities | Day-1 6-step onboarding (`EXIT=0`) on extracted customer ZIP |
| **60s Sustained Mixed Load (`C=60`)** | **`240,218`** reqs · **`4,003.6 RPS`** · **`100.000%`** HTTP 200 (`0` err) · P50 `13.2–14.5 ms` · P99 `30.5–39.6 ms` | 50% `/`, 25% `/api/mcp`, 15% `/api/checkout`, 5% `/api/healthz`, 5% `/api/startlyst-engine/storefront-context` |
| **512 MB Container Memory Stability** | **Peak RSS `351.27 MB`** (`<512 MB` safe) · Peak Heap `118.85 MB` · Post-GC Heap **`34.33 MB`** (`+3.63 MB` vs idle) | O(1) sliding-window counter + bounded caches · Event Loop Lag P99 `20.63–27.54 ms` |
| **SQLite WAL 310,000-Row Stress** | **`392,354.7 QPS`** indexed reads · **`10,508.7 WPS`** mixed writes · **`0.00% SQLITE_BUSY`** (`0` errors) | Local NVMe `node:sqlite` WAL + `PRAGMA cache_size = -16000` + composite indexes |
| **Host-Cutout Autonomy & Zero Egress** | **`100%` HTTP 200** (`P99 0.01–0.07 ms`) under host outage · **`0` external fetches** by default | `backend/worker.js` fault injection (`ECONNREFUSED`/`503`/hang) + 5 bundled SVGs, Photon OFF, OTLP OFF |
| **Brownfield & Legacy Upgrade Safety** | **`0` protected bytes mutated** · **`100%` order & custom DB retention** · atomic rollback verified | Offline `sync-core.mjs`, Ed25519 patch, and `--upgrade-from-zip` with fault-injected rollback |

See [`BENCHMARKS.md`](./BENCHMARKS.md) for the complete 10-second interval telemetry table, reproduction commands, and **all 5 candid BYOC shared-responsibility boundaries** (managed PostgreSQL + `pg` driver setup, OIDC-to-SAML IdP bridge, SIEM audit archival, `512 MiB` Pod `NODE_OPTIONS` recommendation, and Roadmap protocol boundaries).

---

## 3. Public Contract vs. Licensed Production Runtime Matrix

This public repository discloses open specifications, pricing schemas, TypeScript SDK declarations, and verifiable benchmark evidence. **Zero proprietary compiler logic, secret keys, or private runtime implementations reside here.**

| Capability / Asset | Public Showcase Repo (Free to Audit) | Licensed Commercial BYOC ZIP (`150–169` Files) |
| :--- | :---: | :---: |
| **Multi-Currency B2B Pricing & Tax Specs (`USD`/`EUR`/`GBP`/`CHF` + US/EU/UK/CH/AU Coverage)** | Open JSON & Markdown | Canonical Stripe Checkout & fulfillment integration |
| **AI Handoff & Customization Blueprint (`AI_AGENT_HANDOFF.md`)** | Public preview ([`AI_CUSTOMIZATION_BLUEPRINT.md`](./AI_CUSTOMIZATION_BLUEPRINT.md)) | Tier-tailored root `AI_AGENT_HANDOFF.md` + `.aiignore` + `startlyst:doctor` |
| **MCP / ACP / UCP / B2B Procurement Schemas & `startlyst.d.ts`** | Open interface contracts | Live compiled `/api/mcp` JSON-RPC 2.0 server, `/api/checkout`, `/api/agent-checkout`, `/api/startlyst-engine/*` |
| **Benchmark Telemetry & Architectural Boundary Disclosure** | Complete [`BENCHMARKS.md`](./BENCHMARKS.md) | Reproducible locally via `npm run build`, `verify-installation.mjs`, `startlyst:doctor` |
| **O(1) Rate Limiter (`4,003.6 RPS` / `351.27 MB` RSS) & Hardened Checkout** | Not included | Full source code pre-wired across all 4 tiers |
| **Distributed Redis REST, 4-Role RBAC, PostgreSQL FORCE RLS, OIDC SSO** | Architecture spec only | Full tier-scoped live-wired runtime modules + idempotent additive SQL migrations |
| **Web Crypto Ed25519 Signed Security Patches & `--upgrade-from-zip`** | Verification protocol documented | Ongoing signed core patches + legacy non-destructive upgrade engine (`0` protected bytes mutated) |

---

## 4. Multi-Currency Tax-Exclusive Enterprise Licensing (`txcd_10103001` · Automated Cross-Border B2B Tax)

All 8 production Stripe Checkout SKUs match the canonical billing master (`Monthly` / `Annual Prepay — 2 Months Free`, tax-exclusive). Stripe Checkout settles in USD across **United States, European Union, United Kingdom, Switzerland, Australia / ANZ, and Global English-speaking B2B markets** with automatic Stripe Tax evaluation (`txcd_10103001`, `tax_behavior: exclusive`); EUR, GBP, and CHF figures represent indicative B2B equivalents:

| Tier | Production SKUs (Monthly / Annual) | USD Live Stripe Rate (Tax-Exclusive) | USD Standard List Reference | EUR (Indicative Ex-VAT) | GBP (Indicative Ex-VAT) | CHF (Indicative Ex-VAT) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Startup Series-A** | `startup_monthly` / `startup_annual` | `$499/mo` (`$4,990/yr`) · Save `$998`/yr | `$699/mo` (`$6,990/yr`) | `€459/mo` (`€4,590/yr`) | `£399/mo` (`£3,990/yr`) | `CHF 439/mo` (`CHF 4,390/yr`) |
| **Tier 2: Growth Venture** | `growth_monthly` / `growth_annual` | `$1,499/mo` (`$14,990/yr`) · Save `$2,998`/yr | `$1,999/mo` (`$19,990/yr`) | `€1,379/mo` (`€13,790/yr`) | `£1,189/mo` (`£11,890/yr`) | `CHF 1,319/mo` (`CHF 13,190/yr`) |
| **Tier 3: Enterprise SIer & Agency** | `enterprise_monthly` / `enterprise_annual` | `$4,999/mo` (`$49,990/yr`) · Save `$9,998`/yr | `$6,499/mo` (`$64,990/yr`) | `€4,599/mo` (`€45,990/yr`) | `£3,949/mo` (`£39,490/yr`) | `CHF 4,399/mo` (`CHF 43,990/yr`) |
| **Tier 4: Global Holding & PE Portfolio** | `holding_monthly` / `holding_annual` | `$9,999/mo` (`$99,990/yr`) · Save `$19,998`/yr | `$12,999/mo` (`$129,990/yr`) | `€9,199/mo` (`€91,990/yr`) | `£7,899/mo` (`£78,990/yr`) | `CHF 8,799/mo` (`CHF 87,990/yr`) |

### 4.1 Four-Tier Architecture & Deliverable Matrix (Zero Unwired Stubs)

| Tier | Shipped Files (Monthly / Annual) | Database, Migrations & Scaling Layer | Auth, RBAC & Tenant Isolation | Observability & Operational Probes |
| :--- | :---: | :--- | :--- | :--- |
| **Tier 1: Startup Series-A** | `150` / `157` | Root `AI_AGENT_HANDOFF.md`, SQLite WAL (`node:sqlite`) & Cloudflare D1 (`DATABASE_DRIVER=sqlite\|d1`), `migrations/upgrade-additive-sqlite.sql`, O(1) bounded sliding-window rate limiter | Fail-closed `ADMIN_LEDGER_TOKEN` constant-time auth + RFC 2104 `HMAC-SHA256` audit chain | PII-masked structured JSON logger, W3C `traceparent`, K8s `/api/healthz` & `/api/readyz`, Prometheus/JSON `/api/admin/metrics`, opt-in OTLP (OFF by default) |
| **Tier 2: Growth Venture** | `152` / `159` | All Startup + **Distributed Redis / Upstash REST** sliding-window rate limit & cache (`src/lib/distributed-store.ts`, auto O(1) memory fallback) | **4-Role RBAC** (`owner` / `admin` / `auditor` / `operator` in `src/lib/enterprise-rbac.ts`) + chained HMAC audit records | All Startup + RBAC decision & distributed rate-limit telemetry |
| **Tier 3: Enterprise SIer** | `160` / `167` | All Growth + **PostgreSQL Primary/Read-Replica Adapter** (`src/lib/postgres-adapter.ts`), `schema.postgres.sql` (`FORCE RLS`) & `migrations/upgrade-additive-postgres.sql` | **Web Crypto OIDC JWT/JWKS SSO** (`RS256` / `ES256` / `EdDSA`; SAML 2.0 via OIDC IdP bridge in `OIDC_SSO_SAML_BRIDGE_GUIDE.md`) + `src/lib/tenant-isolation.ts` | All Growth + RBAC-protected `GET /api/admin/audit` live hash-chain verification |
| **Tier 4: Global Holding** | `162` / `169` | All Enterprise + Unlimited multi-subsidiary deployments | All Enterprise + **Multi-Subsidiary Tenant Governance API** (`GET/POST /api/admin/tenants`) & `holding-portfolio-governance.json` | All Enterprise + cross-tenant boundary denial audit trail |

*(Annual Prepay on any tier adds `+7` Annual Vault artifacts including live-wired `seasonal-vault.ts`, cent-exact `currency-router.ts`, `recovery-bank-52w.json`, and `CERTIFICATE_OF_PERPETUAL_IP.md`. All tiers ship zero-third-party-egress by default: 5 local SVG assets, Photon OFF, OTLP OFF.)*

---

## 5. Zero-Breakage, Zero-Lock-In & Legacy Non-Destructive Upgrade Guarantee

### 5.1 Two-Layer Split & Brownfield Protection (`0` Protected Bytes Mutated)
- **Protected Buyer Layer**: `user-workspace/**`, `src/components/**` (including `AddressAutocomplete.tsx` and custom components), `src/app/globals.css`, `.env*`, `data/**`, `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.*`, and any buyer-authored custom API routes/libraries are SHA-256 snapshotted before every sync/patch/upgrade and guaranteed **0 bytes mutated**.
- **Upgradable Kernel Layer**: Managed security/protocol routes, `core-engine/**`, and `migrations/upgrade-additive-*.sql` are updated strictly within an explicit path allowlist verified via offline Web Crypto **Ed25519** signature + per-file SHA-256 + Merkle Root, staged and swapped atomically via `fs.renameSync()` with automatic full rollback on any health-gate failure.

### 5.2 Legacy Buyer Non-Destructive Upgrade & Additive DB Migrations
Existing buyers running earlier pre-hardening releases can upgrade without re-billing using their active license:
1. Download the latest hardened ZIP from `https://startlyst.com/api/compile-zip` with your active license token/session.
2. Execute the bundled atomic upgrader against your existing project directory:
   ```bash
   node <latest-zip>/scripts/sync-core.mjs --upgrade-from-zip=/path/to/latest-startlyst.zip --target-dir=/path/to/existing-project
   ```
3. The upgrader verifies `PACKAGE_CHECKSUMS.json` and the archive Merkle Root, backs up target files and the existing SQLite database into `.startlyst-sync-backup/<utc>/`, atomically updates managed security/core modules and `scripts/sync-core.mjs` itself, applies idempotent additive-only migrations (`migrations/upgrade-additive-sqlite.sql` / `migrations/upgrade-additive-postgres.sql` — strictly zero `DROP`, `TRUNCATE`, or `DELETE`) while preserving **100% of existing orders, custom tables, and custom columns**, and rolls back completely on any failure.

### 5.3 Verifying Downloaded Archive Integrity & Host Attestation
```bash
shasum -a 256 <downloaded-storefront>.zip        # Compare against X-Startlyst-Delivered-Zip-Sha256
npm run verify:install                           # Verify all file checksums & Merkle Root locally
curl -sS https://startlyst.com/.well-known/startlyst-attestation.json
```

---

## 6. Included Open Specification Artifacts
- [`AI_CUSTOMIZATION_BLUEPRINT.md`](./AI_CUSTOMIZATION_BLUEPRINT.md): Pre-purchase guide to the Zero-Touch Self-Service model, root `AI_AGENT_HANDOFF.md`, writable UI vs. protected core boundaries, and `$0` UI redesign workflow via your own AI coding agent.
- [`BENCHMARKS.md`](./BENCHMARKS.md): Complete verified performance benchmarks, 60s sustained telemetry, reproduction guide, and candid BYOC boundaries.
- [`SECURITY.md`](./SECURITY.md): Responsible vulnerability disclosure policy, response SLA, Ed25519 patch protocol, and security posture.
- [`LICENSE`](./LICENSE): Clear separation between open specification/type-definition licensing and the commercial proprietary core.
- [`server.json`](./server.json): Official MCP Registry manifest (`2025-12-11/server.schema.json`).
- [`mcp.json`](./mcp.json): MCP Server Card, client connection config, all 8 read-only evaluation tools, and resources manifest (`/.well-known/mcp.json`).
- [`agentic-commerce-spec.json`](./agentic-commerce-spec.json): Open schema for ACP/UCP/MCP shopping agents.
- [`b2b-procurement-spec.json`](./b2b-procurement-spec.json): Enterprise CTO/CMO/CFO procurement verification manifest and pricing reference.
- [`ai-custom-adapter.schema.json`](./ai-custom-adapter.schema.json): Universal Omni-Device & Non-Destructive Customization Manifest.
- [`sdk-types/startlyst.d.ts`](./sdk-types/startlyst.d.ts): Public TypeScript declarations for `useStartlystCommerce()`.

---

## 7. Enterprise MSA Governance & Neutral BYOC Non-Affiliation Charter (Sections 10 & 11)
1. **Agile Amendments Without Prior Individual Consent for Perpetual Security, Technical Evolution & Regulatory Compliance (MSA Section 10 / Privacy Section 5)**: To ensure purchasing and subscribing enterprises may utilize Startlyst safely, securely, and perpetually, Startlyst Autonomous Systems reserves the right to expand, amend, modify, or revise the Master B2B Terms of Service and Privacy Policy without prior individual notice or consent in response to cybersecurity/zero-trust defense requirements, evolving cloud/browser/autonomous AI & Superintelligent AI (ASI) protocol standards (MCP, ACP, UCP), or domestic and international regulatory changes. Pre-authorized upon purchase/subscription while strictly preserving Day-1 Perpetual BYOC source-code ownership rights.
2. **Complete Non-Affiliation with Unlawful Conduct & Merchant Goods/Services — Neutral BYOC Compiler & Sole Merchant of Record Architecture (MSA Section 11 / Privacy Section 6)**: Startlyst provides neutral BYOC software compiler infrastructure only (`MCC 5734_B2B_SOFTWARE_COMPILER`). Each deploying enterprise operates independently on its own cloud infrastructure as the **Sole Merchant of Record** and Data Controller. Startlyst has zero nexus or affiliation with any criminal or unlawful conduct by malicious users, and zero affiliation, intermediary role, or responsibility with respect to any physical goods, digital assets, or services sold or provided by any user. Unlawful use triggers immediate cryptographic license revocation (`LICENSE_REVOKED_COMPLIANCE_BREACH`) and 100% Buyer indemnification.
