# 2. System Architecture

This section outlines the overall architecture of the DropBet platform, including core frameworks, libraries, key decisions, and project structure.

## 2.1 Frameworks and Libraries

**Core Framework:**  
- **Next.js (App Router)** for routing & i18n  
- **React Hooks** for UI  
- **TypeScript** for type safety  

**State Management:**  
- **@tanstack/react-query** for server state  
- **Zustand** for client state (`useWalletStore`, `useRakebackStore`, etc.)

**UI & Styling:**  
- **shadcn/ui** (Radix primitives)  
- **Tailwind CSS**, **SCSS Modules**, **clsx/classnames**

**Internationalization:**  
- **next-intl** for localized routing

**Forms & Validation:**  
- **react-hook-form**

**Other:**  
- **axios**, **socket.io-client**, **howler**, **framer-motion**, **embla-carousel**, **qrcode.react**

## 2.2 Build Tools

- **PostCSS** (with Tailwind plugin)  
- **ESLint**, **Prettier**, **Stylelint**  
- **Webpack & Next.js build**, **mini-css-extract-plugin**

## 2.3 File Structure

```bash
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── settings/
│       └── games/
├── components/
│   ├── common/
│   ├── modals/
│   ├── originalGames/
│   └── ui/
├── api/apiClient/
├── hooks/
├── providers/
├── queries/
├── stores/
├── styles/
├── types/
├── utils/
├── constants/
├── i18n/
└── mappers/
```
## 2.4 Styling Approach

- **Tailwind CSS** for utilities  
- **SCSS Modules** for component styles  
- **Global CSS + CSS Variables** (HSL via Tailwind)  
- **SCSS Mixins** for responsive patterns  

## 2.5 Theming

- **CSS Variables** toggled with `.dark`  
- **shadcn/ui** theming via `components.json`  

## 2.6 Routing

- **App Router** with `[locale]` directories  
- **Protected routes** via `middleware.ts`  
- **Nested layouts** for sections (e.g., `/settings/`)  

## 2.7 State Management

- **Server state:** React Query hooks  
- **Client state:** Zustand stores, React Context  
- **Persistence:** localStorage/cookies via store middlewares  

## 2.8 UI Component Library

- **Radix UI primitives** + **shadcn/ui** wrappers  
- Organized into:
  - `components/ui/`  
  - `components/common/`  
  - `components/modals/`  
  - `components/originalGames/`  

## 2.9 API Handling

- **ApiClientBase**, **ApiClientBrowser**, **ApiClientServer**  
- **Axios interceptors** for JWT refresh  
- **React Query** custom hooks in `queries/`  

## 2.10 Authentication

- **Access**, **Refresh**, **Socket** tokens (JWT)  
- **Email/password**, **Google OAuth**, **Steam OAuth**  
- Token storage in HTTP-only cookies, automatic refresh  

## 2.11 Third-Party Integrations

- **OAuth:** Google, Steam  
- **Crypto wallets:** BTC, ETH/ERC-20, SOL, LTC, MATIC, TRX, BNB  
- **Fiat on-ramp:** CCPayment, NOWPayments  
- **KYC:** Sumsub iframe  
- **Analytics:** Sentry  
- **Slot aggregators**  

## 2.12 Responsive Design

- **SCSS mixins** + **Tailwind responsive utilities**  
- **Container queries**, **flexbox/grid**  
- **MobileMenu**, **useMediaQuery** for dynamic layouts  

[← Home](readme.md)