---
sidebar_position: 2
date: 2022-12-26T18:00
---

# Fair Squares Design & Architecture
This section explains the mechanics of each Fair Squares pallets and runtime. A scenario derived from the testing guide is used to make the explanations more digestible.
** The descriptions given reflect the current stage of development, and will be subject to changes in the future.** 
The focus will be on user experience and future investors, for this reason, some technical aspects might be ignored.

## Characters
The roles are distributed as follows: 1 Servicer, 1 Seller, 1 Notary, 1 Representative applicant, 2 dummy Representatives (set by default), 2 Tenants applicants, and 8 Investors. For more details on each character, see Table 1 below.


| Name   | Role | Contribution to the Fair Squares Fund  |
| --------------------------------- | --------------------------------- |--------------------------------- | 
| Alice | Servicer/Council_member/Administrator | None |
| Bob | Seller/Council_member | None |
| Charlie | Notary/Council_member | None |
| Dave | Representative (Applicant)| None |
| Henry | Representative (No Asset)| None |
| Gabriel | Representative (No Asset)| None |
| Eve | Tenant (Applicant)| None |
| Ferdie | Tenant (Applicant)| None |
| KillMonger | Investor| $6,000,000 |
| Aluman | Investor| $9,000,000 |
| Shikamaru | Investor| $3,500,000 |
| Geraldo | Investor| $6,000,000 |
| Obito | Investor| $6,000,000 |
| Hans | Investor| $6,000,000 |
| Alice//stash | Investor| $6,000,000 |
| Bob//stash | Investor| $6,000,000 |
_Table 1: Description of the different characters._

## 1) Roles Pallet