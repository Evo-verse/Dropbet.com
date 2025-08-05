# 7. Affiliate & Referral System

## 7.1 Multi-Tier Structure

- Tier 1 (direct), Tier 2 (indirect), possibly Tier 3  
- Diminishing commission percentages per tier

## 7.2 Commission Mechanics

- % of house edge on referred players’ bets  
- Stored in affiliate balance, withdrawable once conditions met

## 7.3 Affiliate Dashboard

- Referral code/link with “Copy”  
- Stats: referrals, earnings by period, tier breakdown  
- Withdraw commission button, referral list table

## 7.4 Technical Implementation

- `useAffiliateCodeStore` stores code on first visit  
- Registration form auto-fills referral code  
- Backend records relationship and calculates commissions  
- Front-end fetches stats via React Query
