---
title: "Rewards & Bonus"
permalink: /rewards-bonus/
---

# 6. Rewards & Bonus System

## 6.1 Rakeback

- **Instant, Daily, Weekly, Monthly** tiers  
- Real-time accrual from house edge (% depends on VIP)  
- Claim UI with progress bars and automatic resets

## 6.2 Promocode Claims

- Single-use per user, expiration / usage limits  
- Bonus balance credit via `POST /promocode/redeem`  
- History recorded in user activity

## 6.3 VIP System

- Manual application form → admin approval  
- Tiered benefits: higher rakeback, limits, dedicated support  
- Front-end badge & invite to apply if non-VIP

## 6.4 Deposit Bonus

- 100% match up to configured cap (e.g., $1k)  
- Bonus balance with wagering requirement (e.g., 30x)  
- Wagering progress, “Forfeit bonus” option  
- Configuration in code/database, not admin
