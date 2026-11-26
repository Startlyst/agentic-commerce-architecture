# Startlyst — Zero-Touch Operating Model & Customer AI Customization Blueprint

> **Purpose**: Public pre-purchase architecture reference explaining how Startlyst operates with **zero human support overhead** and how **your own AI coding agent**, **internal LLM**, or **MCP-compatible coding assistant** launches, fully redesigns the storefront UI at `$0` extra license cost, and self-repairs issues locally using root `AI_AGENT_HANDOFF.md` inside every licensed ZIP (`162–181` files).

---

## 1. Three-Pillar Operating Model

1. **Zero-Touch Self-Service Operating Model**: Startlyst is a pure automated deterministic software compiler shipping a verified Sovereign BYOC Core. No human support desk, individual consulting calls, account managers, or manual ticket queues are provided. As-Is B2B commercial licensing (`UCC § 2-316`), offline-verifiable **Web Crypto Ed25519** security patches, non-destructive `--upgrade-from-zip` upgrades, and self-diagnostic CLI tools (`npm run startlyst:doctor -- --json` & `node verify-installation.mjs`) eliminate manual support cost structurally.
2. **AI-Native Ownership & Zero-Cost UI Freedom (`$0` Extra License Fee)**: Once extracted, all setup, regional cloud adaptation, from-scratch visual redesign, custom component additions, and environment troubleshooting execute inside your own repository under your own AI coding agent or engineering team.
3. **Automated Tax & Legal Boundary Clarity**: Stripe Hosted Checkout + Stripe Tax (`txcd_10103001`, `tax_behavior: exclusive`, mandatory `tax_id_collection: enabled`) calculates local B2B taxes (US Sales Tax, EU VAT Reverse Charge, UK VAT, CH VAT, Australian GST/ABN) automatically without cardholder data touching Startlyst servers. Under our BYOC shared-responsibility model, final statutory tax filings and cloud infrastructure operations strictly belong to the buyer and payment processor.

---

## 2. Concrete 3-Step Pre-Purchase AI Launch & Redesign Flow

| Step | Action | Outcome |
| :--- | :--- | :--- |
| **Step 1** | Unzip the verified archive (`162–181` files) and point **your own AI coding agent**, **internal LLM**, or **MCP-compatible coding assistant** to root `AI_AGENT_HANDOFF.md`. | Root `.aiignore` / `.agentignore` / `.llmignore` shield `core-engine/**` while opening `user-workspace/**`, `src/components/**`, and `sdk-bridge/startlyst.d.ts`. |
| **Step 2** | Run the verified Day-1 6-step launch sequence (`verify-installation.mjs` -> `npm install` -> `npm run setup` -> `startlyst:doctor` -> `npm run build` -> `verify-installation.mjs`). | Compiles in **`1.89s`** (`112 kB` First Load JS, `EXIT=0`) and deploys into your own regional cloud (US Virginia, EU Frankfurt, UK London, CH Zurich, or AU Sydney) with `0` default third-party outbound fetches. |
| **Step 3** | Instruct your own AI coding agent to redesign 100% of `user-workspace/ui/Storefront.tsx`, `user-workspace/brand.config.ts`, `user-workspace/custom-styles.css`, `src/components/**`, and `src/app/globals.css`. | **`$0` additional license fee**, **`0%` GMV commission**, and **`0` protected bytes mutated** whenever future Ed25519 patches or `--upgrade-from-zip` upgrades execute. |

---

## 3. Two-Layer Ownership Boundary

- **Writable Buyer-Owned Layer (`0` Bytes Mutated on Core Upgrades)**: `user-workspace/**`, `user-workspace/extensions/**` (7 typed business-logic hooks in `user-workspace/extensions/index.ts`), `src/components/**` (including `AddressAutocomplete.tsx`), open auditable `src/lib/security-utils.ts`, `src/app/globals.css`, `.env*`, `data/**`, `*.db` / `*.sqlite`, `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.mjs`, and custom buyer API routes.
- **Protected Upgradable Kernel Layer (Managed via Ed25519 / `--upgrade-from-zip`)**: `core-engine/**`, `.startlyst/core-manifest.json`, managed security routes (`/api/checkout`, `/api/agent-checkout`, `/api/mcp`, `/api/webhooks/recovery`, `/api/healthz`, `/api/readyz`, `/api/admin/*`), and additive-only SQL migrations (`migrations/upgrade-additive-sqlite.sql`, `migrations/upgrade-additive-postgres.sql`).
- **Open Typed Bridge & Self-Repair**: [`sdk-types/startlyst.d.ts`](./sdk-types/startlyst.d.ts), [`ai-custom-adapter.schema.json`](./ai-custom-adapter.schema.json), Doctor v2 (`npm run doctor -- --json`, `--fix`, `--restore-core`), and 9 UI-independent contract tests (`npm run verify:all`).

---

## 4. Autonomous Evaluation via Read-Only MCP (`https://startlyst.com/api/mcp`)

Procurement and research AI agents can evaluate regional fit (US, EU, UK, CH, AU, GLOBAL), customization rules, verified benchmarks, and exact Stripe USD pricing directly via JSON-RPC 2.0 `tools/call`:
- `evaluate_architecture_fit`
- `get_ai_customization_blueprint`
- `get_verified_benchmarks`
- `get_procurement_checkout_path`
