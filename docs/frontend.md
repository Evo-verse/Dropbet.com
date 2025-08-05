---
title: "Frontend"
permalink: /frontend/
---

# 3. Frontend

Covers UI components, account flows, wallet, and rewards from the client side.

## 3.1 UI Components

### 3.1.1 Libraries

- **shadcn/ui & Radix UI**
- **Framer Motion**, **Howler**
- **clsx & classnames**

### 3.1.2 Structure

```bash
src/components/
├── common/
├── modals/
├── originalGames/
├── pages/
└── ui/
```

### 3.1.3 Theming & Styling

- CSS variables + `components.json` overrides  
- SCSS modules for theme-specific overrides

### 3.1.4 Responsiveness

- Mobile-first Tailwind classes  
- SCSS mixins for breakpoints  
- Touch-optimized controls

### 3.1.5 Animations

- **Framer Motion** for complex sequences  
- CSS transitions for simple hovers  
- `prefers-reduced-motion` support

---

## 3.2 Account & Authentication

### 3.2.1 Login & Signup

- **Email/Password** (+ email verification)  
- **OAuth**: Google, Steam  
- Unified **AuthModal** UI

### 3.2.2 JWT Management

- Access/Refresh tokens stored securely  
- Axios interceptor auto-refresh on 401

### 3.2.3 Two-Factor Authentication

- Setup via QR code & `qrcode.react`  
- Backup codes, front-end confirm via `verify2FA`

### 3.2.4 Session Activity

- List active sessions, IP, device  
- “End session” button invalidates token

### 3.2.5 Self-Exclusion

- Time-limited (24h, 7d, 30d) & permanent bans  
- UI confirmation, backend enforcement

### 3.2.6 KYC Verification

- Sumsub iframe/redirect  
- Status: pending, approved, rejected

### 3.2.7 Account Data & History

- **Transaction History** (deposits, withdrawals, etc.)  
- **Bet History** (game name, bet, result)  
- **Bonuses & Promotions**  
- **Affiliate Stats** (if applicable)
