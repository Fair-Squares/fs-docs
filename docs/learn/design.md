---
sidebar_position: 2
date: 2022-12-26T18:00
---

# Fair Squares Design & Architecture
This section explains the mechanics of each Fair Squares pallets and runtime. A scenario derived from the testing guide is used to make the explanations more digestible.
** The descriptions given reflect the current stage of development, and will be subject to changes in the future.** 
The focus will be on user experience and future investors, for this reason, some technical aspects might be ignored.


import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## 1) Characters
The roles are distributed as follows: 1 Servicer, 1 Seller, 1 Notary, 1 Representative applicant, 2 dummy Representatives (set by default), 2 Tenants applicants, and 8 Investors. For more details on each character, see _Table 1_ below.


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
| Geraldo | Investor| $8,000,000 |
| Obito | Investor| $5,000,000 |
| Hans | Investor| $7,000,000 |
| Alice//stash | Investor| $3,000,000 |
| Bob//stash | Investor| $2,000,000 |
_Table 1: Description of the different characters._

## 2) Roles Pallet
The first step in the workflow is to set roles using the roles pallet. Users apply to the role they would like to receive using the `set_role` function: 
- Investors and Tenants, receive the role right away.
- For Sellers/Notary/Servicer/Representative, they need to go through an approval that varies with the requested role. Their request is therefore sent to a waiting list first.
- Administrator & Councilmember are attributed by default and are not completely managed by the Role pallet: we will refer to them as special roles, and other roles will be referred to as standard roles. In a live environment these will be appointed with governance.  Each user can only have one standard role.
- The maximum number of roles that can be attributed is presently fixed at 200.
Alice, as the platform administrator, possesses the Servicer role by default. As a servicer, her role is to examine/approve/reject. Seller, Servicer, and Notary role requests by using the `account_approval` and/or `account_rejection` functions. She also can transfer her Administrator role to someone else (She will then lose it) by using the `set_manager` function.

In _Table 2_, we give an overview of the information & actions linked to each role. The Available actions section of this table will be updated for each pallet:


<table>
  <tr>
   <td>
   </td>
   <td>Servicer</td>
   <td>Seller</td>
   <td>Notary</td>
   <td>Representative</td>
   <td>Investor</td>
   <td>Tenant</td>
  </tr>
  <tr>
   <td colspan="7" >Available Fields/Information</td>
  </tr>
  <tr>
   <td>account_id</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
  </tr>
  <tr>
   <td>age</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
  </tr>
  <tr>
   <td>activated</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>✖</td>
   <td>✖</td>
  </tr>
  <tr>
   <td>verifier</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>✖</td>
   <td>✖</td>
   <td>✖</td>
  </tr>
  <tr>
   <td>assets_accounts</td>
   <td>✖</td>
   <td>✖</td>
   <td>✖</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
  </tr>
  <tr>
   <td>rent</td>
   <td>✖</td>
   <td>✖</td>
   <td>✖</td>
   <td>✖</td>
   <td>✖</td>
   <td>◎</td>
  </tr>
  <tr>
   <td colspan="7" >Available Actions</td>
  </tr>
  <tr>
   <td>Approve/Reject  a role request</td>
   <td>◎</td>
   <td>✖</td>
   <td>✖</td>
   <td>✖</td>
   <td>✖</td>
   <td>✖</td>
  </tr>
  <tr>
   <td>Set a role</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
  </tr>
  <tr>
   <td>Waiting List</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>◎</td>
   <td>✖</td>
   <td>✖</td>
  </tr>
</table>

_Table 2: Available Information and actions for each role in the Roles pallet._

Finally, according to the rules described so far, users request and receive their roles, in order to reach the distribution shown in Table 1. Time to move to the next pallet: Housing Fund.

## 3) Housing Fund Pallet
In the second step, investors contribute to the Housing Fund. This operation is managed by the pallet described in this section: the Pallet Housing Fund.

<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Servicer</td>
<td>Seller</td>
<td>Notary</td>
<td>Representative</td>
<td>Investor</td>
<td>Tenant</td>
</tr>
<tr>
<td colspan="7">Available Fields/Information</td>
</tr>
<tr>
<td>account_id</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
</tr>
<tr>
<td>age</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
</tr>
<tr>
<td>activated</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>verifier</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>assets_accounts</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
</tr>
<tr>
<td>rent</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>◎</td>
</tr>
<tr>
<td colspan="7">Available Actions</td>
</tr>
<tr>
<td>Contribute to the fund</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>◎</td>
<td>✖</td>
</tr>
<tr>
<td>Withdraw from the fund</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>◎</td>
<td>✖</td>
</tr>
</tbody>
</table>

_Table 3: Available Information and actions for each role in the Housing Fund pallet._

The following conditions apply to fund contribution:
- Minimum contribution of $5000.
- Maximum Contribution of $20,000 (Not in use).
- Fund Threshold of $100,000 (Not in use).

All information relative to fund contributions are stored in the Housing Fund pallet, and are available for other pallets to use. For this reason, the Housing Fund pallet, as well as the Roles pallet will be mentioned in the explanation of several other pallets.

## 4) Onboarding Pallet & NFT pallet
Onboarding & NFT pallets are heavily connected pallets and it would have been very difficult to explain the content of one without the other. Now that we have money in the housing Fund, Bob the Seller will create a proposal using the Onboarding Pallet. This pallet is tightly connected to the NFT pallet, and allows Sellers to fulfill the following tasks:

#### _a) Create an asset sale proposal_
Here, through the use of the `create_and_submit_proposal` the Seller selects between different classes of assets (Houses, Apartment complex, Offices, etc...) provided by the NFT pallet, and defines the price, name, additional information describing the asset (metadata), before creating it. This NFT is then used to generate an asset sale proposal that will be transferred to the voting pallet if submitted by the Seller/NFT minter. Only Sellers have the Authority to create an asset. In the background, an NFT is minted at asset creation by the NFT pallet (in other words the seller has authority on minting a new NFT), using the information provided by the Seller. This NFT is also given an ID connected to its asset class. Submitting the asset or not after creation is among the choices offered to the seller, as a modifiable parameter.

#### _b) Modify Asset specifications before submission_
It is possible to create an asset, without immediately submitting it for a review by the House Council (See the Voting Pallet). In this case, the seller might want to modify the Asset’s metadata, or add it: the right to set/modify data is also defined in the NFT pallet and is provided to Sellers.

After creation, the asset can be submitted for review to a house council, before being transferred to Investors for a vote (Voting pallet). The Onboarding pallet also introduces the concept of an assets status (EDITING/REVIEWING/ONBOARDED/FINALIZING/FINALIZED/REJECTED), which describes the location of the asset in the Fair Squares workflow.

<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Servicer</td>
<td>Seller</td>
<td>Notary</td>
<td>Representative</td>
<td>Investor</td>
<td>Tenant</td>
</tr>
<tr>
<td colspan="7">Available Fields/Information</td>
</tr>
<tr>
<td>account_id</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
</tr>
<tr>
<td>age</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
</tr>
<tr>
<td>activated</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>verifier</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>assets_accounts</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
</tr>
<tr>
<td>rent</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>◎</td>
</tr>
<tr>
<td colspan="7">Available Actions</td>
</tr>
<tr>
<td>create_and_submit_proposal</td>
<td>✖</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>submit_awaiting</td>
<td>✖</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>reject_edit</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>reject_destroy</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>change_status</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
</tbody>
</table>

_Table 4: Available Information and actions for each role in the Onboarding pallet._

You can also see in Table 4 that the Onboarding pallet allows a servicer to reject an asset proposal for editing of destruction, depending on the case at hand. From the NFT pallet side, this means editing the NFT’s metadata, or burning the NFT. Some of the NFT pallet main functions are shown in Table 5.

Creation & submission of a proposal is not free of charge for the Seller: a proposal fee, which represents 10% of the asset price (Configurable), is reserved at creation of the proposal, and slashed if the proposal is destroyed. If rejected for editing, only 10% of the reserved fees are slashed, and if accepted, remaining reserved fees are returned.

<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Servicer</td>
<td>Seller</td>
<td>Notary</td>
<td>Representative</td>
<td>Investor</td>
<td>Tenant</td>
</tr>
<tr>
<td colspan="7">Available Fields/Information</td>
</tr>
<tr>
<td>account_id</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
</tr>
<tr>
<td>age</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
</tr>
<tr>
<td>activated</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>verifier</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>assets_accounts</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>◎</td>
<td>◎</td>
<td>◎</td>
</tr>
<tr>
<td>rent</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>◎</td>
</tr>
<tr>
<td colspan="7">Available Actions</td>
</tr>
<tr>
<td>create_collection</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>mint</td>
<td>✖</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>transfer*</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>burn</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
<tr>
<td>destroy_collection</td>
<td>◎</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
<td>✖</td>
</tr>
</tbody>
</table>

_Table 5: Available Information and actions for each role in the NFT pallet._

