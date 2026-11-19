# Security Policy & Responsible Disclosure

Startlyst Global Sovereign Operations (`https://startlyst.com`) treats platform security, cryptographic integrity, and customer storefront safety as primary engineering invariants. We welcome coordinated, good-faith vulnerability reports from security researchers, enterprise security teams, and licensees.

---

## 1. Reporting a Vulnerability

Please report suspected security vulnerabilities privately via email rather than opening a public GitHub issue:

- **Primary Security & Compliance Desk**: `compliance@startlyst.com`
- **Operations & Incident Coordination**: `ops@startlyst.com`

To help us triage and remediate rapidly, please include:
1. Affected target (endpoint URL, manifest path, or exported storefront package file path / SHA-256).
2. Clear reproduction steps or a minimal proof-of-concept that does not impact live customer data or trigger live payment charges/refunds.
3. Observed impact, HTTP status/headers, and suggested remediation (if any).

---

## 2. Initial Response & Remediation SLA (UTC)

| Milestone | Target SLA |
| :--- | :--- |
| Initial Acknowledgment of Report | Within **24 hours (UTC)** |
| Technical Triage & Severity Classification | Within **72 hours (UTC)** |
| Critical Vulnerability Mitigation / Patch Release | Target within **72 hours** of confirmation |
| High Vulnerability Mitigation / Patch Release | Target within **7 business days** of confirmation |
| Medium / Low Vulnerability Remediation | Scheduled into the next hardened release cycle |

---

## 3. Covered Scope

- **Startlyst Production Host & Edge APIs**: `https://startlyst.com` static web surfaces, security headers (HSTS/CSP), and Cloudflare Edge API routes (`/api/*`, `/.well-known/*`).
- **Public Specifications & SDK Contracts**: JSON schemas, MCP/ACP/UCP manifests, and `sdk-types/startlyst.d.ts` in this repository.
- **Commercial Exported BYOC Storefront Packages**: Generated Next.js storefront codebases, `/api/checkout`, `/api/mcp`, `/api/geo/ping`, `/api/startlyst-engine/*`, static HTML / JSON-LD serialization, and `core-engine/**` integrity verification logic.

### Out-of-Scope & Safe Harbor Rules
- Do **not** attempt unauthorized live payment charges, fraudulent refunds, credential brute-forcing, denial-of-service / volumetric stress testing against production infrastructure, or access to third-party customer deployments without explicit written authorization from that merchant.
- Researchers acting in good faith within this policy who promptly disclose findings privately and avoid data exfiltration or service disruption are protected under our coordinated disclosure safe harbor.

---

## 4. Security Architecture, Dependency Patching & Verification

- **Fail-Closed Payment, Refund & Webhook Controls**: Checkout artifact delivery, 72-hour automated refunds (requiring verified Stripe Checkout Session IDs and server-side metadata validation), dispute webhooks (300-second replay window + constant-time HMAC-SHA256), and `/api/compiler/sync-core` operate strictly fail-closed.
- **Zero-Vulnerability Production Dependencies**: Both the Startlyst host platform and exported customer Next.js storefront packages track patched security releases (e.g., Next.js `15.5.29+` and PostCSS `8.5.33+`) audited against `npm audit`.
- **Cryptographic Provenance & Non-Destructive Upgrades**: Every exported archive carries `X-Startlyst-Delivered-Zip-Sha256` and `X-Startlyst-Package-Merkle-Root`, verifiable locally via `npm run verify:install`. Core updates target `/core-engine/**` exclusively while preserving `/user-workspace/**` with 0 bytes mutated.
