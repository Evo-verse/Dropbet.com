**2. System Architecture**
This section outlines the key frameworks, libraries, architectural decisions, and project structure behind the DropBet casino platform.

**2.1 Frameworks and Libraries**
**Core Framework**
– Next.js: The project leverages Next.js, specifically its App Router with integrated internationalization features
– React: Utilized as the primary UI library, with extensive use of React Hooks
– TypeScript: The entire codebase is written in TypeScript for robust type safety

**State Management**
– @tanstack/react-query: Extensively used for data fetching, caching, and server state management
– Zustand: Manages client-side global state through various stores:
  • useWalletStore: For wallet and currency management
  • useTrafficIncomeStore: For affiliate/traffic tracking
  • useRakebackStore: For rakeback challenge features
  • useAffiliateCodeStore: For affiliate code management
  • useGameSettingsStore: For game settings, such as sound preferences

**UI and Styling**
– shadcn/ui: Provides custom UI components built on top of Radix UI primitives
– Tailwind CSS: Employed for utility-first styling, configured in `tailwind.config.ts`
– SCSS Modules: Used extensively for component-specific styling (`.module.scss` files)
– clsx/classnames: For conditional class name composition

**Internationalization**
– next-intl: Facilitates multi-language support with locale-based routing

**Form Handling**
– react-hook-form: Manages form state and validation

**Other Notable Libraries**
– axios: For efficient HTTP requests
– socket.io-client: Enables real-time communication
– howler: For audio effects within games
– framer-motion: Used for sophisticated animations
– embla-carousel: For creating carousel/slider components
– qrcode.react: For generating QR codes (likely for 2FA or crypto addresses)

**2.2 Build Tools**
– PostCSS: For processing CSS with various plugins
– Tailwind CSS: Integrated as a PostCSS plugin
– ESLint: Enforces code linting with custom rules
– Prettier: Ensures consistent code formatting
– Stylelint: For SCSS/CSS linting
– mini-css-extract-plugin: For extracting CSS into separate files

**2.3 File Structure**
The project adheres to the Next.js App Router structure with internationalization:

```
src/
 ├── app/
 │   └── [locale]/         # Internationalized routes
 │       ├── layout.tsx
 │       ├── page.tsx
 │       ├── settings/
 │       ├── games/
 │       └── ...
 ├── components/
 │   ├── common/           # Shared components
 │   ├── modals/           # Modal components
 │   ├── originalGames/    # Game-specific components
 │   ├── pages/            # Page-specific components
 │   └── ui/               # UI library components
 ├── api/
 │   └── apiClient/        # API client implementation
 ├── hooks/                # Custom React hooks
 ├── providers/            # React context providers
 ├── queries/              # React Query definitions
 ├── stores/               # Zustand stores
 ├── styles/               # Global styles and mixins
 ├── types/                # TypeScript type definitions
 ├── utils/                # Utility functions
 ├── constants/            # Constants and configuration
 ├── i18n/                 # Internationalization setup
 └── mappers/              # Data transformation utilities
```

**2.4 Styling Approach**
The project employs a hybrid styling approach:
– Tailwind CSS: For utility-first styling, configured in `tailwind.config.ts`
– SCSS Modules: For component-specific styling using `.module.scss` files
– Global CSS: Found in `src/styles/globals.css` for base styles and CSS variables
– SCSS Mixins: Defined in `src/styles/mixins.scss` for responsive design and reusable patterns

**2.5 Theming**
The project implements theming through:
– CSS Variables: Defined within the Tailwind configuration using HSL color values
– shadcn/ui: Components are themed via the `components.json` configuration

**2.6 Routing**
– Next.js App Router: Used for all page routing
– Internationalized Routes: Implemented with `next-intl` utilizing the `[locale]` parameter in routes
– Protected Routes: Managed in `middleware.ts` with arrays like `authProtectedRoutes` that check for authentication tokens

**2.7 State Management**
**Server State**
– @tanstack/react-query: Utilized for efficient data fetching, caching, and server state management

**Client State**
– Zustand: For global state management with various dedicated stores
– React Context: Used for specific features via providers such as `useModal` and `useUser`

**2.8 UI Component Library**
– shadcn/ui: A custom component library built on Radix UI primitives

**Component Organization**
– Base UI components: `src/components/ui/`
– Shared components: `src/components/common/`
– Feature-specific components: Organized in dedicated folders

**2.9 API Handling**
– Custom API Client: Implemented in `src/api/apiClient/` with:
  • `ApiClientBase.ts`: Provides a base implementation with common methods
  • `ApiClientBrowser.ts`: Handles browser-specific implementation, including token refresh logic
  • `ApiClientServer.ts`: Manages server-specific implementation for SSR
– React Query: Used for data fetching with custom hooks for specific API endpoints
– Error Handling: Implemented in API client interceptors and React Query error callbacks

**2.10 Authentication**
– JWT-based Authentication: Employs access, refresh, and socket tokens
– Login/Signup: Implemented in the `AuthModal` component, supporting:
  • Email/password authentication
  • Social logins (Google, Steam) via OAuth
  • Username setup after OAuth login
– 2FA Implementation:
  • Google Authenticator integration
  • QR code scanning for setup
  • Recovery codes for backup
  • Verification during login with `verify2FA` mutation

**2.11 Third-Party Integrations**
**OAuth Providers**
– Google (`/auth/google`)
– Steam (`/auth/steam`)

**Crypto Wallets**
– Supports BTC, ETH, SOL, USDC, USDT, LTC, POL (Polygon), TRX (Tron), BNB
– Multiple network support: ERC-20, BEP-20, TRC-20, etc.

**Payment Processing**
– Integrates with Visa, Mastercard, Google Pay, Apple Pay for crypto purchases

**Analytics**
– Sentry integration for error tracking and monitoring

**2.12 Responsive Design**
The project implements responsive design through:
– SCSS Mixins: Defined in `src/styles/mixins.scss` with specific breakpoints:
  • Mobile: `max-width: 430px`
  • Tablet-min: `max-width: 968px`
  • Tablet: between `430px and 1380px`
  • Desktop: between `1400px and 1860px`
  • Large Desktop: `min-width: 1860px`
– Container Queries: Used for component-specific responsive behavior
– Media Queries: Employed in SCSS modules for component-specific responsive styling

**Responsive Components**
– `MobileMenu` component for mobile navigation
– Responsive layouts using flexbox and grid
– `useMediaQuery` hook from `usehooks-ts` for responsive logic

**Mobile-Optimized Views**
– Special components and layouts for mobile devices, such as game interfaces adapted for touch interaction

[← Home](readme.md)