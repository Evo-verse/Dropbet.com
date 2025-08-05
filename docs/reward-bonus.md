**3.4 Rewards & Bonus System**
The DropBet platform includes a multi-layered rewards structure composed of real-time rakeback, promocode-based bonuses, manually assigned VIP tiers, and a 100% deposit match bonus. These systems incentivize user retention, reward wagering activity, and drive engagement through both automated and manual rewards.

**3.4.1 Rakeback**
The rakeback system includes the following types:
– Instant Rakeback
– Daily Rakeback
– Weekly Rakeback
– Monthly Rakeback

**Logic:**
– Rakeback is calculated in real time as a percentage of the house edge from user wagers
– The exact percentage scales with the user's VIP level

**Claiming Logic:**
– There is no cooldown for instant rakeback
– Rakeback balances are updated continuously
– Users can manually claim available rakeback at any time from the **Rewards** section
– Claim logs are not stored for missed or expired claims

**Frontend Handling:**
– State is managed via `useRakebackStore` (Zustand)
– Backend values are refreshed via `react-query` to ensure live data

**UI Elements:**
– Amount available
– “Claim” button
– Last claim time
– Tooltip showing how rakeback is calculated

**3.4.2 Promocode Claims**
Users can enter one-time promocodes to receive bonus balance rewards.

**Logic & Rules:**
– Promocodes are single-use per user
– Only one reward type is supported: bonus balance
– No VIP or affiliate restrictions
– If a code is invalid or reused, the user sees a standard error message

**Frontend Handling:**
– Promocode input uses `react-hook-form`
– State may interact with `useAffiliateCodeStore` for code tracking

**UI Elements:**
– Input field
– Submit button
– Confirmation/error messages
– Claim history (in user dashboard)

**3.4.3 VIP System**
The VIP system is manual and handled through an application form.

**Workflow:**
– Users can submit a form to request VIP status transfer from another casino
– Form includes:
  • DropBet username
  • Screenshot from external platform
  • Optional message
– Admins manually review the request and assign VIP level in the backend

**VIP Impact:**
– Higher rakeback percentages
– Potential eligibility for exclusive promotions
– No automated level calculation or tiering logic exists

**Frontend Elements:**
– VIP application form
– Status indicator on the profile

**3.4.4 Deposit Bonus**
DropBet offers a standard 100% deposit match bonus, with requirements to unlock the bonus balance.

**Rules & Logic:**
– Only one deposit bonus can be active at a time
– Bonus amount = 100% of deposit amount, up to \$1000
– Bonus is credited as bonus balance, which cannot be withdrawn until cleared
– Wagering requirement: The user must wager a specific total amount, calculated per eligible game
– If the user cancels the bonus or fails to meet requirements, the bonus is entirely canceled
– Withdrawals are locked while a deposit bonus is active

**Configuration:**
– Bonus rules (percentage, wagering requirement) are set in the codebase, not via admin panel

**Frontend Display:**
The **My Bonuses** section includes:
– Bonus status (active / completed / expired)
– Bonus amount
– Wager progress bar
– Tooltip with terms
– Cancel/claim button (if applicable)

[← Home](readme.md)