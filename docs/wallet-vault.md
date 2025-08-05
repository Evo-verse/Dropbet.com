---
layout: default
title: "Wallet & Vault"
permalink: /wallet-vault/
---

[← Home](/)

# 5. Wallet & Vault

## 5.1 Crypto Wallet

- **Supported coins**: BTC, ETH/ERC-20 (USDC, USDT), SOL, LTC, MATIC, TRX, BNB  
- **Network selection** for multi-chain tokens  
- **Deposit**: unique address + QR code, “pending” → confirmed via webhook  
- **Withdrawal**: submit address → pending → processed (auto/manual)

## 5.2 Vault

- Internal off-chain balance  
- Instant transfers **to** and **from** Vault  
- No fees, UI slider for amounts

## 5.3 Fiat On-Ramp

- Embedded widget / redirect (CCPayment, NOWPayments)  
- Post-purchase auto-credit to wallet  
- Quote display, fee transparency, limits

## 5.4 Transaction History

- Accessible via user dashboard  
- Filter by date/type, export CSV option  
- Optional “View on Explorer” links

## 5.5 Tips System

- Peer-to-peer tipping via username  
- Off-chain, instant, optional note  
- Minimum tip limits, privacy considerations

## 5.6 Payment Provider Integrations

### CCPayment

- **CreateOrder**, **Webhook Callback**, **GetSupportToken**, etc.  
- HMAC-signed webhooks, idempotent handling

### NOWPayments

- Mirror CCPayment flow for fiat on-ramp  
- Separate webhook handlers
