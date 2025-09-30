---
sidebar_position: 2
date: 2025-09-29T12:00
title: Detailed Design (Pooled Asset Model)
description: Deep-dive into Fair Squares pallets, pooled NAV flow, governance tracks and off-chain operational integration.
---

import TOCInline from '@theme/TOCInline';

# Fair Squares Design & Architecture (Updated)

This document supersedes the earlier per‑asset (NFT + Share Distributor + Bidding + Tenancy) model. Assets now enter a pooled structure: investors hold fungible pool units; units are minted when new, validated assets are acquired and burned only on divestment or impairment. Governance migrated to Polkadot OpenGov tracks, and direct tenancy is outsourced to accredited housing corporations.

<TOCInline toc={toc} />

## 1. Role & Actor Overview

On‑chain roles: Servicer, Seller, Notary, Investor. (Representative is legacy, replaced operationally by accredited Housing Corporations.)

Hybrid / off‑chain: Valuation Providers, Housing Corporations, OpenGov Participants (voters / delegates).

## 2. Pallet / Module Set

| Domain | Component | Purpose | Outputs |
|--------|-----------|---------|---------|
| Access | Roles | Identity + role gating | RoleAccount |
| Capital | Housing Fund | Bonded capital accounting | FundContribution |
| Intake | Onboarding | Proposal registry + metadata hash | Proposal states |
| Valuation | Off-chain layer | Aggregated appraisals | Value band data |
| Legal | Finalizer | Title & compliance checks | InclusionApproval / Rejection |
| Pool | Asset Pool Engine | NAV + unit supply mgmt | PoolUnit, nav_per_unit |
| Governance | OpenGov Integration | Track mapping & gating | Referenda outcomes |
| Ops | Monitoring / Metrics | Occupancy & NOI ingestion | MetricReport events |

## 3. High-Level Lifecycle

The end-to-end flow below shows how an asset progresses from proposal intake to pooled NAV impact, and how external operational metrics feed back into valuation updates.

```mermaid
---
config:
  layout: elk
---
flowchart TD
   subgraph Intake
      P[Proposal Created]<-- Seller -->S(Seller Docs)
      VQ[Valuation Requests]
   end
   subgraph Validation
      VA[Appraisals Aggregated]
      LG[Legal Checks]
   end
   subgraph Gov[OpenGov]
      T1[Asset Admission Track]
   end
   subgraph Pool
      ACQ[Capital Allocation]
      MINT[Mint Units]
      NAV[NAV Update]
   end
   subgraph Ops[External Ops]
      HC[Housing Corp]
      MET[NOI Metrics]
   end
   P --> VQ --> VA --> LG --> T1 --> ACQ --> MINT --> NAV
   HC --> MET --> NAV
   Investor[(Investors)] --> ACQ
   Fund[(Housing Fund)] --> ACQ
```

## 4. Capital Allocation & Unit Mint (Diagram)

```mermaid
---
config:
   layout: elk
---
flowchart TD
   A[Validated Asset] --> B{Fund liquidity >= price?}
   B -->|No| Q[Queue]
   B -->|Yes| C[Allocate capital]
   C --> D[Compute issue]
   D --> E[Mint units]
   E --> F[Update NAV]
   F --> G[Recalc NAV per unit]
   G --> H[Emit inclusion events]
```

## 5. Finalization & Governance Confirmation

```mermaid
---
config:
   layout: elk
---
flowchart LR
   P[Proposal] --> V[Valuations Aggregated]
   V --> L[Legal Checks Pass]
   L --> R[OpenGov Referendum]
   R -->|Approve| A[Allocation Phase]
   R -->|Reject| X[Archive]
   A --> F[Final Settlement]
   F --> INC[Pool Inclusion]
   INC --> NAV[NAV + Units Update]
   style X fill:#faa,stroke:#c33
```



## 6. Investor Contribution Example (Normalized Names)

```mermaid
---
config:
   layout: elk
---
flowchart LR
   subgraph FundContrib[Housing Fund Contributions]
   Alice[Alice<br/>$6.0M]
   Bob[Bob<br/>$9.0M]
   Carol[Carol<br/>$3.5M]
   David[David<br/>$8.0M]
   Emma[Emma<br/>$5.0M]
   Frank[Frank<br/>$7.0M]
   Grace[Grace<br/>$3.0M]
   Henry[Henry<br/>$2.0M]
   end
   Asset[Target Asset<br/>Price $10M]
   FundContrib --> Asset
   Asset --> Dist{Pro-Rata Allocation<br/>& Cap Rules}
   Dist --> Mint[Pool Unit Mint]
   Mint --> NAV[NAV / Unit Update]
   classDef alloc fill:#cfe,stroke:#080
   class Mint,NAV alloc
```

## 7. Metrics & Safeguards Overview

```mermaid
---
config:
   layout: elk
---
flowchart TD
   A[Appraisal Providers] -->|Signed Values| B[Valuation Aggregator]
   B --> C[Legal Review]
   C --> D[OpenGov Referendum]
   D -->|Approve| E[Capital Allocation]
   D -->|Reject| R[Archive]
   E --> F[Unit Mint + NAV]
   F --> G[Monitoring]
   G -->|Anomaly| H[Emergency Track]
   H --> P[Pause / Parameter Update]
   P --> B
   style R fill:#fdd,stroke:#c33
   style H fill:#ffe9b3,stroke:#d68b00
```
