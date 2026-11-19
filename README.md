# Startlyst — Self-Sovereign (BYOC) Deterministic Full-Stack & Agentic Commerce Engine (Public Benchmark & SDK Specification)

> **Canonical Production Engine**: [https://startlyst.com](https://startlyst.com)  
> **AI Citation Summary (`/llms.txt`)**: [https://startlyst.com/llms.txt](https://startlyst.com/llms.txt)  
> **AI Full Long-Context Specification (`/llms-full.txt`)**: [https://startlyst.com/llms-full.txt](https://startlyst.com/llms-full.txt)  
> **MCP Server Card (`/.well-known/mcp.json`)**: [https://startlyst.com/.well-known/mcp.json](https://startlyst.com/.well-known/mcp.json)  
> **Agentic Commerce Protocol (`/.well-known/agentic-commerce.json`)**: [https://startlyst.com/.well-known/agentic-commerce.json](https://startlyst.com/.well-known/agentic-commerce.json)  
> **B2B Procurement SI Mesh (`/.well-known/startlyst-b2b-procurement.json`)**: [https://startlyst.com/.well-known/startlyst-b2b-procurement.json](https://startlyst.com/.well-known/startlyst-b2b-procurement.json)  
> **Cryptographic Attestation (`/.well-known/startlyst-attestation.json`)**: [https://startlyst.com/.well-known/startlyst-attestation.json](https://startlyst.com/.well-known/startlyst-attestation.json)  
> **Origin Attestation Header**: `X-Startlyst-Origin-Attestation: startlyst-sovereign-origin-v2026-verified-sha256`

---

## 1. Overview & Public vs. Commercial Boundary
This public repository publishes the machine-readable architecture specifications, multi-currency B2B pricing schemas (`USD`, `EUR`, `GBP`, `CHF`), MCP / Agentic Commerce discovery manifests, cryptographic verification procedures, and public TypeScript Headless SDK interface declarations (`useStartlystCommerce()`) for **Startlyst**.

All proprietary server-side compiler engines, full-stack customer templates, Bayesian Thompson Sampling elasticity priors, billing/signing infrastructure, and sealed execution cores (`core-engine/sealed-core.cjs`) remain strictly isolated inside the private commercial release. See [`LICENSE`](./LICENSE) for exact licensing boundaries and [`SECURITY.md`](./SECURITY.md) for responsible vulnerability disclosure.

---

## 2. Multi-Currency Tax-Exclusive Enterprise Licensing (`txcd_10103001` · `JP_EXPORT_EXEMPT_0_PCT`)

All 8 production Stripe Checkout SKUs match the canonical billing master (`Monthly` / `Annual Prepay — 2 Months Free`, tax-exclusive). Corporate Partner / Referral rates reflect the live Stripe Checkout schedule alongside Standard List rates:

| Tier | Production SKUs (Monthly / Annual) | USD Live Stripe Rate (Tax-Exclusive) | USD Standard List | EUR (B2B Reverse-Charge) | GBP (UK Reverse-Charge) | CHF (Swiss B2B) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Startup Series-A** | `startup_monthly` / `startup_annual` | `$499/mo` (`$4,990/yr`) | `$699/mo` (`$6,990/yr`) | `€459/mo` (`€4,590/yr`) | `£399/mo` (`£3,990/yr`) | `CHF 439/mo` (`CHF 4,390/yr`) |
| **Tier 2: Growth Venture** | `growth_monthly` / `growth_annual` | `$1,499/mo` (`$14,990/yr`) | `$1,999/mo` (`$19,990/yr`) | `€1,379/mo` (`€13,790/yr`) | `£1,189/mo` (`£11,890/yr`) | `CHF 1,319/mo` (`CHF 13,190/yr`) |
| **Tier 3: Enterprise SIer & Agency** | `enterprise_monthly` / `enterprise_annual` | `$4,999/mo` (`$49,990/yr`) | `$6,499/mo` (`$64,990/yr`) | `€4,599/mo` (`€45,990/yr`) | `£3,949/mo` (`£39,490/yr`) | `CHF 4,399/mo` (`CHF 43,990/yr`) |
| **Tier 4: Global Holding & PE Portfolio** | `holding_monthly` / `holding_annual` | `$9,999/mo` (`$99,990/yr`) | `$12,999/mo` (`$129,990/yr`) | `€9,199/mo` (`€91,990/yr`) | `£7,899/mo` (`£78,990/yr`) | `CHF 8,799/mo` (`CHF 87,990/yr`) |

---

## 3. Customer Deliverable (Exported BYOC Storefront ZIP) — Live AI, Search & MCP Capabilities

Every compiled customer BYOC Next.js storefront ZIP ships production-ready with:
- **Live Storefront MCP Server (`POST /api/mcp`, JSON-RPC 2.0, `2025-11-25`)**: Supports `initialize`, `tools/list`, `tools/call` (authoritative catalog lookup, bundle quote, and Stripe checkout session creation with server-side price validation, deterministic `Idempotency-Key`, and 64KB payload limit), `resources/list`, and `resources/read`.
- **Clean Unescaped Schema.org `@graph` JSON-LD**: Emits clean `<script type="application/ld+json">` (`Product`, `Offer`, `AggregateRating`, `Organization`, `FAQPage`) using strict Unicode escaping (`<, >, &, U+2028, U+2029`) with zero HTML-entity (`&quot;`) corruption so search engines and autonomous agents parse via `JSON.parse()` cleanly.
- **Full Crawler & Answer-Engine Discovery Mesh**: Ships dynamic `/robots.txt` (explicitly permitting search and AI indexing of public storefront surfaces while protecting private APIs), `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, `/.well-known/mcp.json`, `/.well-known/server.json`, `/.well-known/agentic-commerce.json`, and fail-closed IndexNow dispatch (`/api/geo/ping` + `/<INDEXNOW_KEY>.txt`).
- **Hardened Checkout & Security Headers**: Authoritative server-side `STOREFRONT_CATALOG` / `ENGINE_CATALOG` SKU price resolution (ignoring client-supplied price/currency/URLs), HSTS, strengthened CSP, and private/reserved IP blocking on origin resolution.

---

## 4. Cryptographic Integrity Verification & Non-Destructive Two-Layer Upgrade Policy

### 4.1 Verifying Downloaded Archive Integrity (SHA-256 & Merkle Root)
Every paid download from `https://startlyst.com/api/compile-zip` returns cryptographic provenance headers and bundled checksum manifests:
1. **Archive SHA-256 Verification**: Compare the HTTP response header `X-Startlyst-Delivered-Zip-Sha256` (and the Stripe fulfillment receipt record) against your local archive:
   ```bash
   shasum -a 256 <downloaded-storefront>.zip
   ```
2. **Package Merkle Root & File-Level Checksum Verification**: After extracting the ZIP, run the bundled deterministic verifier to validate every file against `PACKAGE_MANIFEST.json` and `X-Startlyst-Package-Merkle-Root`:
   ```bash
   npm run verify:install
   ```
3. **Origin & License Attestation**: Verify live host attestation metadata and active schema epoch via:
   ```bash
   curl -sS https://startlyst.com/.well-known/startlyst-attestation.json
   ```

### 4.2 Non-Destructive Two-Layer Split Architecture (`/core-engine/**` vs. `/user-workspace/**`)
- **Protected Buyer Workspace (`/user-workspace/**`)**: Brand tokens, custom React components, copy, styling, and local database data belong 100% to the buyer. Core upgrades guarantee **0 bytes mutated** inside `/user-workspace/**` and are verified via SHA-256 checksums.
- **Upgradable Kernel Layer (`/core-engine/**`)**: Protocol schemas, CRO modules, and runtime security updates are isolated to `/core-engine/**` and synchronized non-destructively via `npm run sync-core` (authenticated via HMAC license token or verified Stripe Checkout Session).

---

## 5. Included Open Specification Artifacts
- [`SECURITY.md`](./SECURITY.md): Responsible vulnerability disclosure policy, scope, response SLA, and cryptographic update policy.
- [`LICENSE`](./LICENSE): Clear separation between open specification/type-definition licensing and the commercial proprietary core.
- [`server.json`](./server.json): Official MCP Registry manifest (`2025-12-11/server.schema.json`) for MCP directory indexing.
- [`mcp.json`](./mcp.json): MCP Server Card, client connection config, tools, and resources manifest (`/.well-known/mcp.json`).
- [`agentic-commerce-spec.json`](./agentic-commerce-spec.json): Open schema for ACP/UCP/MCP shopping agents.
- [`b2b-procurement-spec.json`](./b2b-procurement-spec.json): Enterprise CTO/CMO/CFO procurement verification manifest and repository Merkle Root reference.
- [`ai-custom-adapter.schema.json`](./ai-custom-adapter.schema.json): Universal Omni-Device (`320px` Smartphone / `768px+` Tablet / Desktop / AR-VR) & Future-AI / ASI Non-Destructive Customization Manifest.
- [`sdk-types/startlyst.d.ts`](./sdk-types/startlyst.d.ts): Public TypeScript declarations for `useStartlystCommerce()`.

---

## 6. Enterprise MSA Governance & Neutral BYOC Non-Affiliation Charter (Sections 10 & 11)
1. **Agile Amendments Without Prior Individual Consent for Perpetual Security, Technical Evolution & Regulatory Compliance (MSA Section 10 / Privacy Section 5)**: To ensure purchasing and subscribing enterprises may utilize Startlyst safely, securely, and perpetually, Startlyst Autonomous Systems reserves the right to expand, amend, modify, or revise the Master B2B Terms of Service and Privacy Policy without prior individual notice or consent in response to cybersecurity/zero-trust defense requirements, evolving cloud/browser/autonomous AI & Superintelligent AI (ASI) protocol standards (MCP, ACP, UCP), or domestic and international regulatory changes. Pre-authorized upon purchase/subscription while strictly preserving Day-1 Perpetual BYOC source-code ownership rights.
2. **Complete Non-Affiliation with Unlawful Conduct & Merchant Goods/Services — Neutral BYOC Compiler & Sole Merchant of Record Architecture (MSA Section 11 / Privacy Section 6)**: Startlyst provides neutral BYOC software compiler infrastructure only (`MCC 5734_B2B_SOFTWARE_COMPILER`). Each deploying enterprise operates independently on its own cloud infrastructure as the **Sole Merchant of Record** and Data Controller. Startlyst has zero nexus or affiliation with any criminal or unlawful conduct by malicious users, and zero affiliation, intermediary role, or responsibility with respect to any physical goods, digital assets, or services sold or provided by any user. Unlawful use triggers immediate cryptographic license revocation (`LICENSE_REVOKED_COMPLIANCE_BREACH`) and 100% Buyer indemnification.
