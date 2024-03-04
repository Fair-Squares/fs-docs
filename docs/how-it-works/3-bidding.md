# Bidding phase - 3

The bidding phase is dealt with by the runtime an executor of the logic that is in place. The bidding algorithm waits strictly for the status of an asset to be **onboarded**. This status change allows the bidding algorithm the chance to prepare a bid. The second check is to see if the housing fund has enough capital to bid for the asset. Below we will explain how making a bid takes place. 


## Characteristics of the bidding pallet

The bidding pallet is designed to bring out a bid, but it doesn't just do that blindly.B efore it does it runs through a rule-book that we as the Fair Squares community prioritize. 

1. The status of an asset need to be onboarded, other no bid is being prepared.
2. The housing fund needs enough capital to make a bid other wise no bid is being prepared.
3. When it creates a bid it needs to have a distributed set of owners lets say a minimum of 15 accounts. These can be users or organisations. 

The reason it's designed this way if to ensure safety and we want a distributed ownership model. We don't want Fair Squares just to be owned by a handful of wealthy, we are looking for a  We have rules in place that the bidding algorithm needs to adhere to.

- Minimum of €1000 and a maximum of €50000
- Minimum 20 users and maximum of 50 users.

The above are example parameters, there will be initial parameters that will need to be set, these will be set after pilots are done. Furthermore it's is a configurable constant.


## Purpose of the bidding pallet

**Investor List Creation:** The investors list function is responsible for creating a list of potential investors for specific asset. This process only starts when there is an asset and its price is known. It filters investors based on their contributions and other criteria, such as the minimum contribution percentage and investment history.

**Contribution Assessment:** This step involves evaluating each potential investor's contribution to determine their eligibility and the amount they can invest, taking into account the maximum and minimum contribution limits.

**Investor Selection:** Based on the contribution assessment, a final list of investors is compiled. This list is generated with consideration to fair and equitable distribution among potential investors, potentially using a first-in-first-served approach to prioritize earlier contributions.

**Bidding Process:** Once the investor list is finalized, a bid is made for the asset on behalf of these investors. This involves the collective pool of funds from the selected investors being used to make an offer to the seller.

**Event Triggering:** Throughout this process, various events are triggered to notify the system and stakeholders about the progress, such as the creation of the investor list, the success or failure of the bid, and any issues encountered during the bidding process.

### Flow for the bidding algorithm

```mermaid
flowchart LR
    A[Start: Asset Identified] --> B[Investor List Creation]
    B --> C[Contribution Assessment]
    C --> D[Investor Selection]
    D --> E[Bidding Process]
    E --> F[Event Triggering]
    F --> G[End: Bid Outcome]

    style A fill:#f9d342,stroke:#333,stroke-width:2px
    style G fill:#34f9a4,stroke:#333,stroke-width:2px
```

