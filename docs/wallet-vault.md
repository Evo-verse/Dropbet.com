**3.3 Wallet & Vault**
This section covers the architecture and functionality of the wallet system used in the DropBet platform. It includes support for cryptocurrency deposits and withdrawals, internal balance management (Vault), tipping, and third-party integrations for purchasing crypto.

**3.3.1 Crypto Wallet Overview**
The platform supports multi-currency and multi-network crypto wallets.

**Supported Coins:**
– BTC
– ETH
– SOL
– USDC
– USDT
– LTC
– POL (Polygon)
– TRX (Tron)
– BNB

**Supported Networks:**
– ERC-20
– BEP-20
– TRC-20
– SOL
– BTC

**Users can:**
– Deposit crypto into their casino wallet
– Withdraw crypto to external addresses
– View wallet balances in a single DBC currency

The wallet is integrated into both the user account UI and the header/balance bar for quick access and visibility.

**3.3.2 Vault (Internal Balance System)**
The Vault is a separate balance layer within the user’s account, distinct from their main wallet balance.

**Use cases for the Vault:**
– Segregated balance management
– Locking funds for specific activities

**Features:**
– Manual transfers between Wallet and Vault (send/receive)

**3.3.3 Crypto Purchases via Third-Party Provider**
Users can purchase cryptocurrency directly on the platform using traditional payment methods via a third-party fiat on-ramp provider.

**Supported payment methods:**
– Visa
– Mastercard
– Google Pay
– Apple Pay

**The integration:**
– Is embedded into the platform via an iframe
– Supports automatic deposit into the user’s casino balance upon completion
– Provides users with instructions and real-time status updates

**3.3.4 Transaction History**
The user account page includes a detailed log of all wallet-related actions:

– Deposits (confirmed via blockchain)
– Withdrawals (with status: pending, in review, confirmed)
– Tips sent and received
– Manual transfers to/from Vault
– Crypto purchases
– Promocode claims

**Each transaction log includes:**
– Timestamp
– Amount
– Currency
– Status (e.g. pending, complete)
– Destination/source address (where relevant)

This history is available in the account dashboard with filtering and export options (to confirm).

**3.3.5 Tips System**
Users can tip each other directly from their wallet or Vault balance.

**Features:**
– Search for recipient by username
– Input amount and confirmation modal
– Optional note/message with the tip
– Both sender and receiver see the tip in their transaction history
– Tips are near-instant and processed off-chain (internally)

**3.3.6 Payment Provider Integrations**
The platform integrates with multiple external payment providers to support cryptocurrency deposits, withdrawals, and virtual item (skin) deposits. Each provider uses webhook-based confirmation with transaction validation and user balance updates.

---

**CCPayment Integration**

**Integration Flow:**
– Backend listens to all webhook events from CCPayment
– For each payment notification, the platform validates the transaction by querying CCPayment’s API to confirm its existence and status
– If the transaction is confirmed and processed, the user’s wallet is credited
– Each user is assigned a unique deposit address (or link) tied to their account, which enables accurate mapping of incoming funds

**Relevant API Endpoints:**
– `GetSupportToken`: Retrieves a list of supported tokens (currencies) and their IDs
– `GetTokenChain`: Lists available networks for a token (e.g. USDT-ERC20, BEP-20)
– `CreateOrder`: Creates a deposit order via API—returns token, network, pay\_address, order\_id, etc.
– `CheckoutUrl`: Optional when using hosted payment pages; returns a checkout URL
– `Withdraw`: Used by backend/admin to initiate withdrawals; returns order info and network fee
– `GetTokenRate`: Converts USD amount into crypto amount based on current rate
– `NetworkFee`: Retrieves blockchain fee estimates for a given network

**Webhook Handling:**
– Platform responds to CCPayment webhook callbacks for order confirmations
– Each webhook payload contains transaction details including token\_id, amount, network, status, and possibly an order ID
– The backend verifies webhook authenticity (e.g. via HMAC signature)
– Once validated, the platform triggers user balance credit and transaction logs

**Core Contract Logic:**
– Deposit addresses are generated per user session or request to ensure correct attribution
– The platform handles multi-chain support via `GetTokenChain` and validation logic
– Auto-callback support allows for real-time updates on deposit completion

---

**NOWPayments Integration**
Flow mirrors CCPayment:
– Webhook notification on deposit detection
– Backend calls API to verify transaction status
– Upon confirmation, user wallet credited

Supports multiple coins and networks.
Separate address management and mapping logic per user.

---

**Developer Reference Table**

| Function          | Description                                         |
| ----------------- | --------------------------------------------------- |
| GetSupportToken   | Get list of supported tokens (currency metadata)    |
| GetTokenChain     | Enumerate networks per token (ERC-20, TRC-20, etc.) |
| CreateOrder       | Generate deposit order and payment address          |
| Withdraw          | Request cryptocurrency withdrawal via API           |
| GetTokenRate      | Calculate crypto amount from USD amount             |
| CheckoutUrl       | Optionally create hosted checkout URL               |
| Webhook Callbacks | Confirm payment events and provide structured info  |

**Webhook Security**
– Webhooks must be verified using signature verification (e.g. HMAC) or via a secret token
– The backend confirms authenticity of CCPayment events before crediting users
– System handles retries and logs any unmatched or suspicious webhook payloads

[← Home](readme.md)