# DropBet Casino Platform – Technical Documentation

## 1. Introduction & Purpose

**Project Name:** DropBet Casino Platform

**Summary of the Platform:** DropBet is a modern crypto-first online casino platform that combines aggregated slot content, custom in-house games, and a range of social and financial features. Key aspects of the platform include:

* Access to a wide range of slot providers via a unified integration.
* A growing suite of 10 original in-house games.
* Support for cryptocurrency deposits and withdrawals.
* A dedicated Vault system for internal balance segregation.
* A structured Rewards and VIP system (rakeback and bonuses).
* A multi-tiered Affiliate system with referral tracking.
* User engagement features such as tipping, bonus claims, and slot challenges.
* An admin panel for platform operations and content management.
* Third-party integrations for KYC (Sumsub), payments, analytics, and more.

**Purpose of This Documentation:** This documentation serves as a full technical handover of the DropBet platform from the current development team to a new team. The goal is to ensure a seamless transition by providing comprehensive knowledge and references needed to maintain, operate, and expand the platform.

This documentation covers:

* System architecture and technology stack.
* Frontend and backend implementation details.
* Admin panel functionality and usage.
* Deployment and CI/CD processes.
* Third-party integrations and external services.
* A feature-by-feature technical breakdown of the platform.

**Target Audience:** This documentation is intended for developers, DevOps engineers, QA specialists, and product managers who will take over development and maintenance of the DropBet platform.

## 2. System Architecture

This section outlines the overall architecture of the DropBet platform, including core frameworks, libraries, key architectural decisions, and the project structure.

### 2.1 Frameworks and Libraries

**Core Framework:**

* **Next.js (App Router):** The platform is built on Next.js, utilizing the App Router feature for routing and built-in internationalization.
* **React (with Hooks):** React is used for building the user interface, leveraging functional components and hooks.
* **TypeScript:** The entire codebase is written in TypeScript to ensure type safety and robustness across both client and server code.

**State Management:**

* **@tanstack/react-query:** Used extensively for data fetching, caching, and managing server state (e.g., fetching user data, game results, etc.).
* **Zustand:** Used for client-side global state management with several custom stores, including:

  * `useWalletStore` – manages wallet and currency selection.
  * `useTrafficIncomeStore` – tracks affiliate/referral traffic and income.
  * `useRakebackStore` – handles rakeback reward calculations and state.
  * `useAffiliateCodeStore` – manages affiliate code usage and storage.
  * `useGameSettingsStore` – stores game settings (e.g., sound preferences, display options).

**UI and Styling:**

* **shadcn/ui:** A custom UI component library built on top of Radix UI primitives, providing accessible and themeable UI components.
* **Tailwind CSS:** Utility-first CSS framework used for rapid UI styling, configured via `tailwind.config.ts`.
* **SCSS Modules:** Used for component-specific styling through `.module.scss` files, allowing fine-tuned and scoped styles.
* **clsx / classnames:** Utility libraries for conditional class name assembly.

**Internationalization:**

* **next-intl:** Handles multi-language support with locale-specific routing (each page under an `[locale]` directory for language separation).

**Form Handling and Validation:**

* **react-hook-form:** Used for building and validating forms (e.g., login, signup, profile forms).

**Other Notable Libraries:**

* **axios:** Used for HTTP requests to backend APIs.
* **socket.io-client:** Enables real-time features and game interactions via WebSockets.
* **howler:** Provides audio capabilities for games (sound effects, background music).
* **framer-motion:** Used for animations and transitions in UI components.
* **embla-carousel:** For creating carousel/slider interfaces (e.g., game showcases).
* **qrcode.react:** Used to generate QR codes (e.g., for 2FA setup or crypto deposit addresses).

### 2.2 Build Tools

The project uses a variety of build and development tools:

* **PostCSS:** Processes CSS with plugins (Tailwind CSS is integrated as a PostCSS plugin).
* **ESLint:** Enforces code quality and style guidelines, using a custom configuration.
* **Prettier:** Automatically formats code to maintain consistency.
* **Stylelint:** Lints SCSS/CSS to catch styling issues.
* **Webpack & Next.js Build:** The Next.js framework handles module bundling. The project uses plugins like `mini-css-extract-plugin` to extract CSS into separate files during the build.

### 2.3 File Structure

The codebase follows the Next.js App Router structure combined with an internationalized routing approach. A simplified overview of the file structure:

```
src/
├── app/
│   └── [locale]/         # Internationalized route directories (e.g., en, fr, etc.)
│       ├── layout.tsx    # Root layout for each locale
│       ├── page.tsx      # Homepage for the locale
│       ├── settings/     # Settings pages
│       ├── games/        # Game-related pages
│       └── ...           # Other pages (promotions, affiliates, etc.)
├── components/
│   ├── common/           # Shared components (e.g., Header, Footer, Navigation)
│   ├── modals/           # Modal components (AuthModal, ConfirmModal, etc.)
│   ├── originalGames/    # Components for each in-house game (board, controls, etc.)
│   ├── pages/            # Page-specific composite components
│   └── ui/               # Reusable UI components (buttons, inputs, toggles, etc.)
├── api/
│   └── apiClient/        # API client implementations (for browser and server)
├── hooks/                # Custom React hooks
├── providers/            # Context providers for global contexts (e.g., user context)
├── queries/              # Definitions for React Query data fetches
├── stores/               # Zustand state stores definitions
├── styles/               # Global styles (globals.css) and SCSS mixins
├── types/                # TypeScript type declarations and interfaces
├── utils/                # Utility functions and helpers
├── constants/            # Constant values and configuration (e.g., enums, static data)
├── i18n/                 # Internationalization configuration and locale data
└── mappers/              # Functions for transforming and mapping data formats
```

This structure separates concerns by feature and type, making the project maintainable and scalable.

### 2.4 Styling Approach

The DropBet platform uses a hybrid styling approach:

* **Tailwind CSS:** Many layout and spacing styles are applied using Tailwind utility classes for rapid development and consistency.
* **SCSS Modules:** For more complex or scoped styling, SCSS module files (e.g., `ComponentName.module.scss`) are used. This is common for styling specific components without leaking styles globally.
* **Global CSS and Variables:** Global styles are defined in `src/styles/globals.css`. CSS custom properties (variables) are used for theming (colors, font sizes, etc.), and these are configured via the Tailwind configuration (using HSL values for easy theme adjustments).
* **SCSS Mixins:** Common patterns (like responsive breakpoints or reusable CSS snippets) are defined in `src/styles/mixins.scss` and imported where needed. This provides consistent responsive design breakpoints and styles across the code.

### 2.5 Theming

The application supports theming (e.g., dark mode and light mode) using:

* **CSS Variables:** Color schemes and theme values are defined as CSS variables (via the Tailwind config). By adjusting these variables (for example, toggling a `.dark` class on the root), the entire app switches theme without changing individual components.
* **shadcn/ui Theming:** The custom UI library components are configured via a `components.json` which defines default style variants. This ensures base components like buttons or dialogs automatically adapt to the theme.
* **Dynamic Themes:** The design allows for user preferences. Styles and Radix UI primitives respond to CSS variables, so a user’s theme choice (or system preference) can dynamically apply site-wide.

### 2.6 Routing

Routing is handled by Next.js App Router:

* **Internationalized Routes:** The folder structure under `app/[locale]` means each locale (language) has a parallel set of pages. Next Intl helps provide localized routing and content for each page, based on the locale prefix in the URL.
* **Page Organization:** Each major feature or section of the site has its own directory (e.g., `settings/` for account settings pages, `games/` for game-related pages, etc.). This modular approach makes it straightforward to navigate the code.
* **Protected Routes:** The application uses Next.js Middleware (see `middleware.ts`) to guard certain routes. For example, an array `authProtectedRoutes` might list paths that require authentication. If a user without a valid session tries to access those paths, the middleware will redirect them to the login page.
* **Nested Layouts:** Using Next.js App Router capabilities, the platform likely has shared layouts for certain sections (e.g., a settings layout common to all pages under `/settings/`, providing a submenu or consistent header).

### 2.7 State Management

The platform distinguishes between server state (data fetched from the backend) and client state (UI state and ephemeral data):

* **Server State with React Query:** All asynchronous data fetching from APIs (user profile, wallet balances, game results, etc.) is done via React Query hooks. This provides caching, automatic refetching, and consistent data access patterns across components.
* **Global Client State with Zustand:** Zustand stores maintain client-side state that doesn't come directly from the server. This includes things like:

  * Currently selected currency or wallet details.
  * Affiliate tracking info (e.g., storing a referral code if a user arrived via one, using `useAffiliateCodeStore`).
  * UI preferences and toggles (like whether sound is enabled in games, via `useGameSettingsStore`).
  * Real-time game state or challenge progress that updates via WebSockets or user interactions.
* **React Context Providers:** In addition to Zustand, some React Contexts are used for specific scenarios. For example, a `UserProvider` might wrap the app to provide the logged-in user info globally, and a `ModalProvider` could manage modals globally (so any component can open/close modals without prop drilling).
* **State Persistence:** Certain state values may persist in local storage or cookies (for example, a flag that the user has seen a tutorial, or their last selected language or currency), ensuring a smoother user experience across sessions.

### 2.8 UI Component Library

DropBet uses a custom component library based on Radix UI primitives (internally referred to as **shadcn/ui**):

* **Radix UI:** Low-level accessible components (like dialogs, dropdowns, tooltips) serve as the foundation, ensuring proper focus management and ARIA attributes for accessibility.
* **Custom UI Components:** The project uses a set of pre-built components from the shadcn/ui collection (such as buttons, switches, dialogs, etc.), all styled to match the DropBet theme. This reduces development effort and keeps the look-and-feel consistent.
* **Component Consistency:** Using a centralized library means common elements (buttons, inputs, modals) behave consistently across the application. If design changes are needed, updating the base components propagates throughout the app.
* **Organization:** Core UI components live in `src/components/ui/`. Higher-level components (like the site header or a complex game widget) compose these base components and reside in feature-specific folders (e.g., `components/common/` or `components/originalGames/`).

### 2.9 API Handling

All communication with the backend is abstracted through a custom API client layer:

* **ApiClientBase:** A base class (in `src/api/apiClient/ApiClientBase.ts`) defines generic methods for making requests (GET, POST, etc.), handling the base URL, and setting standard headers.
* **ApiClientBrowser:** Implements ApiClientBase for browser usage. This includes attaching the user's access token to requests and handling token refresh if a request returns an unauthorized error. It also manages the socket token for establishing WebSocket connections.
* **ApiClientServer:** A variant used during server-side rendering (SSR) or static generation. This would handle making API calls from the Next.js server (for example, injecting server-side cookies or using internal network calls).
* **React Query Integration:** Instead of calling the ApiClient directly in components, the code uses custom React Query hooks (in `src/queries/`) that internally utilize the ApiClient. This way, data fetching logic is centralized and benefits from caching and deduplication.
* **Error Handling:** The API client uses Axios interceptors to handle error scenarios. For example, if an API call returns a 401 Unauthorized (meaning the access token expired), the ApiClientBrowser will automatically use the refresh token to obtain a new access token, update the stored tokens, and retry the original request. Any other errors are caught to display user-friendly messages or prompts (e.g., redirecting to login if a token refresh fails).

### 2.10 Authentication

Authentication is based on JWT (JSON Web Tokens) with multiple tokens for security:

* **Access Token:** A short-lived JWT used for most API calls. It may be stored in memory or as an HTTP-only cookie for security. The access token is issued upon login and included in the Authorization header for subsequent requests.
* **Refresh Token:** A longer-lived token used to obtain new access tokens. Stored securely (often in an HTTP-only cookie), the refresh token is sent to a special endpoint when the access token expires, allowing the backend to issue a new token pair without requiring the user to log in again.
* **Socket Token:** A separate token specifically for authenticating WebSocket (socket.io) connections, ensuring that real-time events (like game updates or chat) are only delivered to authorized users.
* **Login Methods:** Users can log in via:

  * **Email & Password:** Traditional sign-up and login with email verification required upon registration.
  * **Google OAuth:** Using a Google account via OAuth2 (the user is redirected to Google and back, and on first login must choose a username since Google doesn't provide one for our platform).
  * **Steam OAuth:** Using a Steam account via OpenID/OAuth. Similarly, a returning Steam user will set a username on first login.
    After OAuth login, if it's a new account, the platform prompts for any additional required info (like username if not set).
* **Token Storage & Refresh:** On login, the app stores the access and refresh tokens (and possibly the socket token). The ApiClient ensures tokens are attached to requests. When the access token expires, the refresh token is used automatically to refresh credentials. If the refresh fails (e.g., refresh token expired), the user is logged out.
* **Logout:** Logging out clears tokens from storage (cookies/local storage) and disconnects any socket connections. The user is then redirected to a logged-out state (e.g., homepage or login screen).

### 2.11 Third-Party Integrations

DropBet integrates with several external services to enhance its functionality:

* **OAuth Providers:** Third-party logins via Google and Steam are implemented (the backend has endpoints like `/auth/google` and `/auth/steam` to handle these flows).
* **Crypto Wallet Services:** The platform supports multiple cryptocurrencies and networks. It uses external API services or libraries for generating deposit addresses and tracking blockchain transactions for:

  * Bitcoin (BTC)
  * Ethereum (ETH) – including ERC-20 tokens like USDC, USDT.
  * Solana (SOL)
  * Litecoin (LTC)
  * Polygon (MATIC)
  * Tron (TRX)
  * Binance Smart Chain (BNB, including BEP-20 tokens)
* **Fiat On-Ramp Providers:** Integration with services that allow users to buy crypto via credit card or digital wallets (Visa, Mastercard, Apple Pay, Google Pay). DropBet uses third-party providers for this purpose (for example, **CCPayment** and **NOWPayments** are integrated; see the Wallet section for more details).
* **KYC Verification:** Sumsub is integrated for KYC (Know Your Customer) checks. The frontend integration uses Sumsub's SDK or an embedded iframe to collect user documents and selfies, and the backend receives callbacks or status updates via webhooks/API to update the user's verification status.
* **Analytics and Monitoring:** Sentry is used for error tracking. Runtime exceptions and frontend errors are sent to Sentry’s dashboard, allowing developers to monitor and debug issues in production.
* **Game Content Providers:** For third-party slot games, DropBet likely connects to a game aggregator or directly to providers’ APIs. This allows loading thousands of slot games through a unified integration. (The details of aggregator integrations would be handled on the backend side, ensuring game launch URLs, sessions, and user balances are managed securely.)

### 2.12 Responsive Design

The interface is built to be fully responsive, ensuring usability on mobile devices, tablets, and desktops:

* **SCSS Mixins for Breakpoints:** Standard breakpoints are defined in `mixins.scss` (for example: mobile up to 430px width, tablet up to 968px, desktop above 1400px, etc.). These mixins are used in SCSS modules to apply different styles at different screen sizes.
* **Tailwind Responsive Utilities:** Tailwind's built-in responsive classes (like `md:bg-none` or `xl:px-4`) are used throughout the JSX for quick mobile-to-desktop adjustments.
* **Container Queries & Flexible Layouts:** Some components utilize modern CSS (like flexbox and grid) along with container queries or percentage-based sizing so that content automatically adjusts to the parent container or viewport. Game components, for instance, might scale to fill available space while maintaining aspect ratio.
* **Responsive Components:** Certain components have mobile-specific implementations:

  * A `MobileMenu` component is used to provide a drawer-style navigation on phones, whereas a full horizontal menu might be shown on desktop.
  * Some pages might condense content into accordions or swipeable tabs on small screens (for example, a wallet page showing different panels in tabs on mobile vs. side-by-side on desktop).
* **Touch Optimization:** Interactive elements are sized and spaced for touch inputs. Buttons are given adequate height, and swipe gestures might be enabled for carousels and sliders. The in-house game UIs consider touch controls (e.g., tapping on game tiles or using on-screen controls for betting) to make playing on mobile intuitive.

With these practices, the platform provides a smooth experience whether accessed from a phone, tablet, or large desktop display.

## 3. Frontend

This section delves into the client-facing aspects of DropBet, covering UI components and key features like account management, wallet operations, and reward systems from the frontend perspective.

### 3.1 UI Components

The DropBet UI is built with reusable components and a consistent design language.

#### 3.1.1 Component Libraries Used

* **shadcn/ui & Radix UI:** The UI elements leverage the shadcn/ui library, which provides pre-built components (modals, dropdowns, buttons, etc.) built on Radix UI primitives. This ensures accessibility (proper ARIA tags, keyboard navigation) and consistency in behavior.
* **Framer Motion:** Used for adding animations to components (e.g., smooth fading in modals, sliding menus, game element transitions).
* **Howler:** Provides audio support, particularly in custom in-house games. UI components can play sounds (click effects, game sounds, background music) via Howler.
* **clsx & classnames:** Utility libraries to compose CSS class strings conditionally, used throughout the UI code when applying dynamic Tailwind classes.

#### 3.1.2 Component Structure & Organization

Components are organized by their usage and scope under the `src/components` directory:

* **Common Components (`components/common/`):** Shared across multiple pages. For example:

  * **Header & Footer:** The main site navigation bar (logo, links, user menu) and the footer (links to T\&C, social media, etc.).
  * **Sidebar / MobileMenu:** For cases where a side navigation or a hamburger menu is used on smaller screens. The MobileMenu might slide in on mobile devices.
  * **ProfileDropdown:** A dropdown menu for user actions (profile, settings, logout), usually triggered by clicking the user avatar in the header.
  * **BalanceDisplay:** A component showing the user's current balance (and a way to switch wallets or currencies).
* **Modal Components (`components/modals/`):** These include:

  * **AuthModal:** A modal dialog for login/signup (with tabs or toggles between the two), including inputs for credentials and buttons for OAuth logins.
  * **BonusClaimModal:** Allows users to claim a bonus or enter a promocode.
  * **RakebackInfoModal:** Shows details about how rakeback works and the user's current rakeback levels.
  * **GameRulesModal:** Displays rules or instructions for a game (could be used for in-house games or general info).
  * **ConfirmModal / ErrorModal:** Generic dialogs to confirm user actions or show error messages.
* **Original Games Components (`components/originalGames/`):** Custom in-house game UIs:

  * Each game (e.g., a mines game, crash game, wheel spinner, etc.) might have its own sub-folder with components specific to that game.
  * Common elements include the **Game Board** or canvas (the main visual area of the game), **Game Tile/Card** components for individual interactive elements, **Bet Controls** (inputs for bet amount, action buttons), and game-specific displays (like current multiplier for a crash game or remaining mines in a mines game).
  * These components communicate with the backend via WebSocket or API calls to get game outcomes and updates. They use Howler for sound effects (e.g., a click sound when revealing a tile, or a special sound on winning).
  * They are designed to be responsive and possibly even handle orientation changes on mobile.
* **Page-Specific Components (`components/pages/`):** Larger composite components used on specific pages:

  * **HomePageHero:** The hero section on the homepage (e.g., a banner with a call-to-action or featured game).
  * **PromotionsGrid:** A grid/list of current promotions or offers available to the user.
  * **BlogCardPreview:** A card showing a preview of a blog post or announcement (title, snippet, image).
  * **ChallengeCard:** A card representing a slot challenge or achievement, with progress and reward information.
  * **SlotProviderShowcase:** A section listing slot game providers (often with logos) to highlight the variety of games.
* **UI Library Components (`components/ui/`):** Fundamental, reusable components that appear throughout the application:

  * **Button, Input, Select, Checkbox, Switch, Tabs:** Standard form and interactive elements, likely wrappers around Radix or HTML elements with DropBet styling.
  * **Tooltip, Dialog, Dropdown, Popover:** Small overlay components to show extra info or small menus, built on Radix UI primitives for accessibility.
  * **SkeletonLoader:** A placeholder shimmer effect for content loading states.
  * **Carousel/Slider:** Based on Embla Carousel for cycling through images or game cards.
  * **Avatar, Badge, Card, ProgressBar, ScrollArea:** Additional UI patterns used in profiles, notifications, or lists.

Each UI component typically uses Tailwind CSS classes for layout and basic styling, and where needed, SCSS module files provide more specific styles. This modular approach keeps the UI consistent and maintainable.

#### 3.1.3 Theming & Styling

* Most components support theming via CSS variables. For example, instead of hardcoding a color hex code, they use something like `var(--primary)` which is defined differently in light vs dark mode.
* The `components.json` (shadcn/ui config) defines default style props for components; external contributors can tweak this to adjust the overall theme (like rounding of buttons or default colors).
* SCSS modules often include conditional classes for themes. For example, a component might have a `.dark & { ... }` style in its SCSS to adjust when the dark theme is active.
* The overall styling approach means external contributors can change the theme in one place (CSS variables or Tailwind config) and the changes reflect globally, rather than hunting through numerous CSS files.

#### 3.1.4 Responsiveness

* Components are built mobile-first. Many Tailwind classes include responsive variants (e.g., `md:flex` to apply flex layout on medium screens and up).
* Complex layouts transform for smaller screens: for instance, a multi-column layout might become a vertical stack on mobile. Accordions or tabs might replace wide tables or grids on small devices.
* Game UIs are carefully handled: some might enforce landscape orientation or provide fullscreen modes on mobile for better experience. The use of `useMediaQuery` hooks allows the game components to know the current screen size and adjust controls (e.g., bigger buttons on mobile).
* The design was tested on common devices to ensure that all functionality (registration, deposits, gameplay, chat if any) is accessible and user-friendly on touch screens.

#### 3.1.5 Animations & Transitions

* **Framer Motion** provides declarative animation primitives. It is used for things like fading in modals, sliding menus, bouncing effects on game elements, etc. For example, when the AuthModal appears, it might smoothly scale and fade into view.
* Some animations might be pure CSS for simplicity (using `transition` properties for hovers, etc.), but more complex sequences (like a slot machine roll or a coin flip in an in-house game) could be orchestrated with Framer Motion or canvas-based animations.
* The animation strategy prioritizes performance; animations are kept subtle and are disabled or toned down on lower-end devices to avoid jank. There’s also attention to reducing motion for users who prefer that (using the `prefers-reduced-motion` media query).

### 3.2 Account & Authentication

The account system manages user identity, security settings, and personal preferences on the platform.

#### 3.2.1 Login and Signup

* **Email/Password:** Users can register with an email address and password. The sign-up flow includes email verification — the user receives a verification link to activate their account. Logging in with email/password simply requires the correct credentials (and 2FA if enabled).
* **OAuth Logins:** The platform integrates with Google and Steam for one-click sign-up/login. When a user first logs in via Google or Steam, they must pick a username (as those services do not provide a username for DropBet). Subsequent logins via those services skip that step and go straight in.
* **Auth Modal:** The UI presents login and signup in a unified modal dialog. Users can switch between “Login” and “Sign Up” views. The modal also shows buttons like “Continue with Google” or “Continue with Steam” for OAuth. Error messages (like invalid credentials or an email already taken) are displayed inline in this modal.
* **After Login:** Once logged in, the UI updates: the AuthModal closes, the header might show the user’s profile icon and balance. If the user’s email wasn’t verified, a prompt might show to resend verification. If the user logged in via OAuth for the first time, a username selection prompt appears. The user’s JWT token is now stored for subsequent authenticated requests.

#### 3.2.2 JWT Token Management

* After a successful login, the application receives an **Access Token** and **Refresh Token** (and possibly a socket token).
* Tokens are stored as HTTP-only cookies or in secure browser storage. The exact mechanism is designed to keep tokens inaccessible to JavaScript (preventing XSS leaks) while allowing the API client to use them for requests.
* The custom Axios instance (ApiClientBrowser) automatically attaches the access token to every outgoing API call (e.g., in the Authorization header).
* When an API response indicates the access token has expired (HTTP 401), an Axios interceptor triggers the refresh flow:

  * The refresh token is sent to the backend refresh endpoint.
  * If the refresh is successful, new tokens are saved and the original API request is replayed.
  * If the refresh fails (e.g., refresh token is invalid or expired), the user’s session is ended and they are prompted to log in again.
* This mechanism ensures users remain logged in seamlessly as long as their refresh token is valid (which could be several days or weeks, depending on server configuration), without needing to manually log in each session.

#### 3.2.3 Two-Factor Authentication (2FA)

* Users can secure their accounts with 2FA using an authenticator app (e.g., Google Authenticator, Authy).
* **Setup Process:** In the account settings, the user chooses to enable 2FA. The frontend generates a QR code (using `qrcode.react`) that encodes a secret key obtained from the backend. The user scans this code with their authenticator app, which then starts generating 6-digit time-based codes for DropBet. The backend also provides a set of one-time backup codes for account recovery, which the user should save offline.
* The user must enter a current code from their authenticator app to confirm activation. The frontend sends this to the backend (via a `verify2FA` API call) to complete the setup. Once verified, 2FA is marked active on the account.
* **Login with 2FA:** After entering correct username/password, a user with 2FA enabled is prompted for their 6-digit code. Only if the code matches will the login succeed (issuing JWT tokens). This step is also required for OAuth logins if 2FA is turned on (after the external provider login, DropBet asks for the code).
* **Disabling 2FA:** Users can turn off 2FA in settings by providing a code (to verify it’s really them). The backend then disables the 2FA requirement on future logins.
* The UI clearly indicates when 2FA is on (often with a label like “Two-factor authentication: Enabled” in the security settings). It also shows instructions and all the backup codes one time during setup for the user to save.

#### 3.2.4 Session Activity Log

* The account security page includes a **Session Activity** or **Device Management** section. This displays a list of active sessions and recent logins. Each entry might include:

  * The date/time of login.
  * The IP address (partially masked for security perhaps).
  * The device or browser (based on the user agent string, e.g., “Chrome on Windows 10”).
* Next to each active session (besides the current one), there’s usually a “Log out” or “End session” button. If the user clicks it, the frontend calls an API to invalidate that specific session token on the server, effectively logging that device out.
* This feature allows users to monitor if their account is logged in somewhere without their knowledge and terminate access remotely. It’s a critical security feature for an online casino platform.

#### 3.2.5 Self-Exclusion Options

* To promote responsible gambling, DropBet provides self-exclusion tools in the user’s account settings:

  * **Time-Limited Exclusion:** The user can choose a cool-down period (e.g., 24 hours, 7 days, 30 days) during which they will not be able to gamble. When activated, the user is immediately logged out and cannot log back in until the period expires (the backend rejects login attempts or game actions for that account).
  * **Permanent Self-Exclusion:** The user can choose to self-ban indefinitely. This typically requires contacting customer support to lift in the future (or may be irrevocable for a minimum period like 6 months).
* The UI for this warns the user of the consequences (for example, “Are you sure? You will be logged out and unable to access your account during the selected period.”). They likely have to confirm via typing “CONFIRM” or similar to avoid accidental activation.
* Once activated, if the user tries to log in, they see a message about being self-excluded. The frontend and backend coordinate to ensure no betting or depositing can occur for self-excluded accounts.

#### 3.2.6 KYC Verification

* Under account settings, there is a section for **Identity Verification**. Users can initiate KYC when required:

  * The frontend might show a “Start Verification” button which triggers the Sumsub integration. Sumsub could be embedded as an iframe or a redirect; either way, the user goes through steps to upload documents (ID, proof of address) and possibly a selfie video.
  * Sumsub’s interface guides the user and then shows a completion message when done.
* After submission, the account page reflects a “Verification in progress” status. The user cannot initiate another verification unless the current one is resolved.
* Once Sumsub completes processing:

  * If **approved**, the backend updates the user’s status. The frontend might show a “Verified” badge or simply remove the verification prompt. Certain features (like higher withdrawal limits) become available.
  * If **rejected**, the user is notified (possibly via email and an alert in the account page) and given a chance to re-submit documents.
* KYC is often required before the first withdrawal or if cumulative deposits exceed a threshold. The admin panel also shows KYC statuses so support can manually review if needed.

#### 3.2.7 Account Data and History

* The account dashboard provides various tabs for the user to view their history and data:

  * **Transaction History:** Shows all deposits, withdrawals, vault transfers, tips, and purchases. Each entry includes date, type, amount, and status. The user can filter by type or date range to find specific transactions.
  * **Bet History:** Lists all bets the user has placed on the platform. For slot games, this might show the game name, bet amount, result (win/loss and amount won if any). For in-house games, it would show the game type (e.g., Mines, Crash), bet, outcome, and profit. There may be options to filter by game or time period.
  * **Bonuses & Promotions:** Details of all bonuses the user has interacted with, such as:

    * Promocodes redeemed (with code and bonus amount).
    * Rakeback claimed (with timestamps and amounts).
    * Deposit bonuses active or completed (with progress).
  * **Affiliate Stats:** (if applicable) shows how many people the user has referred, their affiliate earnings, and maybe a list of recent referral sign-ups or earnings per referral.
* This information is fetched via API calls (often paginated). The UI likely uses data tables for neat display, possibly with an option to export data (CSV) for personal records. External contributors may need to adjust these if new transaction types or bet types are added.

### 3.3 Wallet & Vault

DropBet's wallet system allows users to manage multiple cryptocurrencies and an internal vault for segregated balances, as well as facilitating tipping and direct crypto purchases.

#### 3.3.1 Crypto Wallet Overview

* **Multi-Currency Support:** Users have a wallet that can hold balances in various supported cryptocurrencies, including:

  * Bitcoin (BTC)
  * Ethereum (ETH) – including ERC-20 tokens like USDC, USDT.
  * Solana (SOL)
  * Tether (USDT) – supported on multiple networks (ERC-20, TRC-20, BEP-20).
  * USD Coin (USDC)
  * Litecoin (LTC)
  * Polygon (MATIC, sometimes shown as POL)
  * Tron (TRX)
  * Binance Coin (BNB)
* **Network Selection:** For applicable currencies (like USDT, USDC), the platform supports multiple blockchain networks. When depositing or withdrawing, the user is prompted to choose the network (Ethereum vs Tron vs BSC, etc.), and the system will generate the appropriate address or process the transaction on that chain.
* **Unified vs. Separate Balances:** The UI might show a unified balance converted to a standard value (like USD), but under the hood each currency is tracked separately. Users can typically switch the display to any currency they hold to see amounts in that denomination.
* **Deposit Process:**

  * The user selects a cryptocurrency and network to deposit.
  * The platform provides a deposit address (unique to the user, possibly unique per deposit). A QR code may also be shown for convenience.
  * The user sends crypto to that address. The deposit is initially marked as “pending” in the user’s account until confirmed.
  * Once the blockchain confirms the transaction (and the provider’s webhook fires, see 3.3.6), the deposit is marked complete and funds are added to the user’s balance.
* **Withdrawal Process:**

  * The user selects a cryptocurrency, enters an external address, the amount to withdraw, and chooses the network if applicable.
  * The UI might show the network fee or a warning about ensuring the address is correct.
  * After submission, the withdrawal goes into a “pending” state. The backend or an admin will process it (either automatically via integration or manually).
  * The status updates to “completed” once the transaction is broadcast and confirmed, or “rejected” if it was cancelled or failed. Users can see these statuses in their history.
  * Some withdrawals might require KYC verification or admin approval if above certain thresholds.

#### 3.3.2 Vault (Internal Balance System)

* The **Vault** is an internal ledger separate from the main wallet balances. Think of it as a savings or secondary account within the platform:

  * Users can move funds into the Vault to set them aside. This can help with budgeting (only gamble with what’s in your main wallet, keep the rest safe in Vault).
  * Some promotions or features might specifically use the Vault (e.g., an interest-bearing feature or as collateral for challenges, though not explicitly stated).
* **Transfers between Wallet and Vault:**

  * Users can **Send to Vault**: choose an amount from their main balance to lock in the vault.
  * Users can **Withdraw from Vault**: bring money back to the main balance when they want to use it.
  * These actions are instantaneous (just an internal database update) and incur no fees since they’re off-chain.
  * The UI likely provides a slider or input for the amount and confirms the transfer.
* The Vault balance is displayed alongside the main balance. It may also show up in the header (e.g., “Balance: 0.5 BTC (Vault: 0.2 BTC)”). This reminds users that not all funds are immediately in play unless moved.

#### 3.3.3 Crypto Purchases (Fiat On-Ramp)

* To lower the barrier for users who don’t already have crypto, DropBet integrates a fiat-to-crypto on-ramp service:

  * Users can buy certain cryptocurrencies directly on the platform using credit/debit cards or other payment methods like Apple Pay/Google Pay.
  * Typically, the user would choose which crypto to purchase (and possibly which network), enter an amount in their local currency or number of coins, and then proceed to payment.
  * The platform likely uses an embedded widget or a redirected checkout provided by the third-party (e.g., a CCPayment or NOWPayments widget opens where the user enters card details).
* **Post-Purchase:** After a successful purchase, the bought crypto is deposited into the user’s DropBet wallet automatically. For example, if a user bought 0.1 ETH, once the payment clears, 0.1 ETH will show up in their account as if they had deposited it.
* **Fees and Rates:** Fees or exchange rates for the purchase are determined by the provider. The user is shown a quote (e.g., “\$100 will give you 0.098 ETH”) and any fees before confirming the purchase. This transparency is important for user trust.
* **Limits:** There might be daily or monthly limits on purchases imposed by the provider or the platform (for anti-fraud reasons). The UI would enforce or at least display these limits.
* From a development perspective, handling the on-ramp mostly involves integrating the provider’s SDK or iframe and then listening for a callback or webhook to credit the user’s account.

#### 3.3.4 Transaction History

* All wallet and vault related transactions are recorded and visible to the user in the Transaction History (as mentioned in 3.2.7). Key points about this history:

  * It is often accessible via the user’s profile or a separate “History” section.
  * Each entry is clearly labeled (Deposit, Withdrawal, Vault Transfer, Tip Sent, Tip Received, Purchase) and has a status.
  * There might be a link to view on blockchain explorer for deposits/withdrawals (e.g., “View on Etherscan”).
  * Pagination or lazy-loading is used for performance if there are many transactions.
  * Users can filter by date or type to find specific transactions.
* This history is important not just for the user, but also for support. If a user complains about a missing deposit, they can reference the timestamp/amount from here, and support can cross-check in the admin panel or provider’s dashboard.

#### 3.3.5 Tips System

* DropBet includes a social feature that allows peer-to-peer tipping between users:

  * A user can send a tip to another user’s account if they know the recipient’s username. For instance, a streamer might tip a viewer or friends might share winnings.
  * The UI provides a form where you enter the username and an amount. Some parts of the site (like chat or a profile page) might have a “Tip” button pre-filled with that user’s name.
* **Process:**

  * When the tip is submitted, the frontend immediately deducts the amount from the sender’s displayed balance (optimistically, or after confirmation from the backend) and credits it to the recipient’s balance.
  * The transfer is done off-chain (internally) so it’s instant and free.
  * Both users get a notification: the sender sees a “Tip sent to X” confirmation, and the recipient might get a toast or an alert saying “You received a tip of Y from Z!”.
* **Limits:** There may be a minimum tip amount to prevent spam (for example, you can’t tip 0.000001 BTC just to send a message). Also, users cannot tip more than their available balance.
* **Privacy:** Tipping is generally private (not broadcast platform-wide) unless there’s a public chat where such events are shown (some casinos show “UserX tipped UserY \$5” in chat, but it depends on community norms).
* **Use Cases:** Apart from social generosity, tips can be used by support (an admin could “tip” a user as a form of compensation for an issue) since it’s an easy way to credit a small amount to a user without a formal bonus.

#### 3.3.6 Payment Provider Integrations

The platform uses external payment provider APIs to facilitate crypto deposits and withdrawals, instead of directly interacting with blockchains. This offloads complexity and adds reliability (providers handle confirmations, address generation, etc.). Two main integrations are highlighted here:

**CCPayment Integration:**

* *Integration Flow:* The backend creates unique deposit orders via the CCPayment API for each user deposit request. Each order yields:

  * A cryptocurrency and network (e.g., USDT on ERC-20).
  * A deposit address (or QR code) unique to that order.
  * An order ID for tracking.
    The user sends funds to the provided address. The backend listens for webhook events from CCPayment:
  * When CCPayment detects the blockchain transaction to that address, it sends a webhook to DropBet's backend with details (amount, token, network, order ID, status).
  * The backend verifies this by querying CCPayment's API (double-checking the transaction status).
  * On confirmation, the user's balance is credited and the deposit marked as complete.
* *Relevant API Endpoints:* (provided by CCPayment's API)

  * **GetSupportToken:** List of supported tokens (currencies) and their IDs (used to know what currencies are available).
  * **GetTokenChain:** List of supported networks for a given token (e.g., for USDT you might get options: ERC-20, TRC-20, BEP-20).
  * **CreateOrder:** Generates a new deposit order. The response includes the deposit address, chosen token/network, and an order identifier.
  * **GetCheckoutUrl:** (If using hosted payment pages) Provides a URL where the user can see payment instructions or pay via a web interface.
  * **Withdraw:** API call to initiate a payout (withdrawal) from DropBet’s side. It returns details like transaction hash or an order ID and network fees.
  * **GetTokenRate:** Utility to convert between fiat and crypto (e.g., to show how much crypto a \$100 purchase would yield).
  * **GetNetworkFee:** Retrieves the current estimated network fee for sending a transaction on a given network (used to inform users or calculate withdrawal fees).
* *Webhook Handling:*

  * The backend has an endpoint to receive CCPayment webhooks. Each webhook is authenticated (using a signature or secret to ensure it’s from CCPayment).
  * On receiving a webhook (e.g., “deposit confirmed” or “withdrawal completed”), the backend cross-verifies with CCPayment’s API if necessary and updates the transaction status in the database.
  * If confirmed deposit: credit user’s balance, mark transaction as complete. If withdrawal: mark as complete (and possibly notify the user via email or notification).
  * Any discrepancies or errors (like amount mismatch or unknown order ID) are logged and flagged for manual review.
* *Core Logic Considerations:*

  * Each user either has a permanent deposit address per currency or a new address per deposit. DropBet opts to use the provider’s generated address for each deposit to ensure accurate tracking.
  * The integration handles multiple chains seamlessly; if a user selects TRC-20 USDT versus ERC-20 USDT, the appropriate network is used in the CreateOrder and the webhook will specify which network the payment came on.
  * The system gracefully handles network confirmation times – it credits after the required confirmations, as signaled by the provider’s webhook, which abstracts away the actual waiting time and number of confirmations needed.

**NOWPayments Integration:**

* NOWPayments is a similar crypto payment gateway that DropBet uses, likely to handle fiat on-ramps or as an alternative for certain currencies.
* *Integration Flow:* Essentially mirrors the CCPayment flow:

  * A user is provided with a deposit address or a payment link through NOWPayments.
  * The user sends funds or pays via the link.
  * Webhooks from NOWPayments notify the backend of incoming payments.
  * The backend verifies the details and credits the user’s account accordingly.
* It supports a wide range of cryptocurrencies and networks, often overlapping with CCPayment’s offerings.
* DropBet uses NOWPayments primarily for the on-ramp (fiat-to-crypto) feature, whereas CCPayment is used for direct crypto deposits. By having two providers, the platform can cover any gaps (if one provider doesn’t support a certain coin or payment method, the other might).
* Implementation-wise, from the code perspective, there will be a similar set of API client calls and webhook handlers for NOWPayments as described for CCPayment.

**Developer Reference Table:** The following table summarizes some important CCPayment API functions used in the integration:

| Function             | Description                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------- |
| **GetSupportToken**  | Retrieves the list of supported cryptocurrencies (and their internal IDs).               |
| **GetTokenChain**    | Retrieves the supported blockchain networks for a given token (e.g., networks for USDT). |
| **CreateOrder**      | Creates a new deposit order and returns the payment address and details.                 |
| **GetCheckoutUrl**   | Provides a URL for a hosted checkout page (if using an off-site payment flow).           |
| **GetTokenRate**     | Converts a fiat amount to a crypto amount at the current exchange rate.                  |
| **Withdraw**         | Initiates a withdrawal transaction (crypto payout) via the provider.                     |
| **Webhook Callback** | (Inbound to DropBet) Notification when a transaction is detected/confirmed for an order. |

**Webhook Security:**

* All webhook callbacks from payment providers are secured by signatures or secret tokens. The DropBet backend validates each callback to ensure it’s genuine (e.g., using HMAC SHA256 with a shared secret).
* Only after validation does the system act on the webhook (crediting balance or marking withdrawal complete).
* The system also handles potential webhook retries or duplicates, ensuring that, for example, a deposit isn't credited twice if the provider resends a notification. Idempotency keys or checking the transaction status in the database helps here.
* Logs are kept for all webhook events for auditing purposes. If something goes wrong (like a webhook not received or a mismatch in amounts), these logs assist in troubleshooting and reconciling with the provider.

### 3.4 Rewards & Bonus System

DropBet implements several reward mechanisms to retain users and encourage play, including rakeback (cashback on bets), promocodes, a VIP tier system, and deposit bonuses.

#### 3.4.1 Rakeback

* **Types of Rakeback:** The platform provides multiple rakeback rewards: Instant, Daily, Weekly, and Monthly:

  * *Instant Rakeback:* A small percentage of each wager’s house edge is instantly credited to the user's rakeback balance. This accumulates in real-time as the user plays.
  * *Daily/Weekly/Monthly Rakeback:* Larger periodic rewards that accumulate over the respective time frame. At the end of each period (24 hours for daily, etc.), the user can claim those amounts.
* **Calculation:** Whenever a user places a bet, the backend calculates the house edge profit on that bet (for example, if a user bets \$100 on a game with 5% house edge, the expected house profit is \$5). A percentage of that (depending on the user’s VIP level, say 5% for a regular user up to 15% for a top VIP) is allocated as rakeback. So maybe \$0.25 to \$0.75 in this example goes to rakeback.
* **Claiming Mechanism:**

  * The rakeback balances (instant, daily, etc.) update continuously as the user plays.
  * **Instant Rakeback:** The user can claim this at any time. It’s like a running cashback balance. Clicking “Claim” will transfer all of it to the user’s main balance and reset the rakeback to 0 (until they play more). There’s no cooldown on claiming instant rakeback.
  * **Daily/Weekly/Monthly:** These can only be claimed after the period ends (to encourage users to come back daily or weekly). For example, every day at midnight UTC a user’s daily rakeback becomes available to claim. If they don’t claim, it might roll over or accumulate further (depending on implementation, but likely they need to claim each period).
  * The system does not appear to expire unclaimed rakeback within a period — it waits until you claim it. But unclaimed daily/weekly rakebacks might not accumulate beyond their period (if you don’t claim daily rakeback by end of next day, perhaps it expires; this detail would be clarified in the UI).
* **Frontend Implementation:** A Zustand store (`useRakebackStore`) tracks the user’s current rakeback balances. These values are fetched via React Query at intervals or updated via WebSocket events when new rakeback is earned.
* **UI:** In the “Rewards” or “Rakeback” section, the user sees something like:

  * Instant Rakeback: \$X available \[Claim]
  * Daily Rakeback: \$Y available (if period ended) or \$Y accruing (if still within period)
  * Weekly Rakeback: \$Z … etc.
    Each has a Claim button when eligible. There may also be a progress indicator or note showing how much they’ve wagered to earn the current amount. Upon claiming, the figures update and the claimed amount moves into the main balance display.

#### 3.4.2 Promocode Claims

* The platform allows users to redeem **promotional codes** for bonuses:

  * Promocodes are typically alphanumeric strings distributed via marketing campaigns, affiliates, or events.
  * A user can enter a promocode in a designated field (often in the Rewards or Promo section of their account) to claim a reward.
* **Reward Type:** Currently, promocodes grant **bonus balance**. That means the user gets a certain amount of bonus funds which might be subject to wagering requirements (as opposed to cash that can be withdrawn immediately). For example, a code “LUCKY50” might give a \$5 bonus.
* **Rules:**

  * One-time use per user: once you redeem a specific code, you cannot use it again.
  * Codes have an expiration date and sometimes a max number of total uses (set by marketing). If a code is expired or fully used up, the user will get an “Invalid code” message.
  * Codes are generally not restricted by VIP level or similar — any user who has it can use it, unless specified otherwise (some casinos tie codes to affiliate tiers, but it’s noted that only one reward type is supported and no special restrictions).
* **Redemption Flow:**

  * User enters the code and clicks a “Redeem” or “Claim” button.
  * The frontend calls an API like `POST /promocode/redeem` with the code.
  * The backend checks the code’s validity and eligibility.

    * If valid, it credits the corresponding bonus to the user’s bonus balance and returns success (possibly with details like amount).
    * If invalid, it returns an error reason (expired, not found, already used) which the frontend displays to the user.
  * On success, the frontend might show a confirmation like “Success! \$5 bonus credited.” and possibly update the bonus balance display in real-time.
* **Promocode History:** In the account history, each promocode redemption is recorded (e.g., “Promocode LUCKY50 – \$5 bonus credited on 2025-08-05”). This helps support and the user to track which codes they’ve used and what they got.

#### 3.4.3 VIP System

* The VIP program in DropBet is unique in that it’s **manually managed** rather than purely points-based:

  * Users who want to obtain VIP status can fill out a **VIP Application form** on the site. Typically, this form might ask: “Do you have VIP on another casino? Provide evidence (screenshot) and reason you should be VIP here.”
  * The application is sent to the team (likely via email or stored for admin review in the backend).
  * Admins manually assign a VIP level to the user if they approve the request.
* **VIP Levels:** The platform likely has tiered levels (e.g., VIP Level 1 through 5, or named levels). Since there’s no automated level up, these levels correspond to how the team values the user. For example, a user who is a high roller elsewhere might be given a mid-tier VIP to start.
* **Benefits:** VIP levels grant certain benefits, although much of the logic is manual or outside this documentation’s scope:

  * Increased rakeback percentages (as mentioned earlier, VIPs get more rakeback).
  * Possibly higher deposit and withdrawal limits, or faster withdrawal processing.
  * Special bonuses like reload bonuses, free spins, or cash drops from the VIP manager.
  * Dedicated support or a personal account manager for top VIPs.
* **Frontend Indications:**

  * If a user is VIP, their profile might show a badge (like a star or crown icon with their level).
  * The Rewards page might list their current rakeback percentages or upcoming VIP-specific promos.
  * If not VIP, the user sees an invitation to apply: e.g., “Join our VIP program – click here to apply if you’re a VIP elsewhere or a high volume player.”
* **Maintenance:** Since it’s manual, external contributors don’t need to worry about complex algorithms for leveling up. Instead, ensure the application form works, and that any references to VIP benefits (like rakeback percentages) correctly use the VIP level that the backend provides in the user’s profile data.

#### 3.4.4 Deposit Bonus

* DropBet offers a **100% Deposit Match Bonus**, commonly as a first-time deposit bonus (or occasionally on reloads, depending on promotions). Essentially, when a user deposits money, the platform grants an equal amount in bonus funds.
* **Key Terms:**

  * The bonus is usually capped (e.g., “100% up to \$1000” means if you deposit \$1500, you still only get \$1000 bonus).
  * The bonus funds go into a **bonus balance** separate from the cash balance. They cannot be withdrawn immediately; they’re intended for betting to meet requirements.
  * There is a **wagering requirement** attached. For example, a 30x wagering requirement on the bonus means the user must wager 30 times the bonus amount in eligible games to convert the bonus to real money. Some casinos also require wagering the deposit amount, but our documentation specifically highlights wagering on the bonus.
* **Rules & Logic:**

  * Only one deposit bonus can be active at a time per user. If a user has an active bonus, they typically can’t claim another until it’s completed or cancelled.
  * While a bonus is active, the user’s own deposit money might be “locked” to the bonus. This often means they cannot withdraw their deposit either until wagering is completed or they forfeit the bonus, to prevent abuse (deposit, get bonus, withdraw real money leaving bonus only).
  * If the user **fails to meet the wagering requirement** in time (if there’s an expiration, e.g., you have 30 days to wager), or if they choose to **cancel the bonus**, the bonus funds (and any winnings derived from them) are forfeited. The user would keep only whatever portion of their deposit is left.
  * The user can manually cancel the bonus at any time if they don’t want to continue wagering. This zeroes out the bonus balance.
  * The backend tracks wagering progress: not all games may count 100% towards wagering (slots often count 100%, but table games might count 10%, etc., depending on terms, though this detail isn’t in text).
* **Configuration:** The details (match percentage, max amount, wagering multiple, expiry) are set in the code or database config. Currently, they are not adjustable via the admin panel, meaning changes to the bonus offer would require a deployment or config change by developers. This is an important note for the incoming team if marketing wants to tweak promotions.
* **Frontend Display:**

  * In the account section, there is a **“My Bonuses”** or similar area. When a deposit bonus is active, it shows an entry with:

    * Bonus Amount (e.g., “\$200 bonus”)
    * Wagering Progress: e.g., “\$5000 wagered of \$6000 (83.3%)” often with a progress bar visualization.
    * Time remaining (if the bonus expires after a period).
    * Status: Active (or perhaps “X% completed”).
    * A button to “Forfeit Bonus” if the user wants to cancel it, and possibly a tooltip explaining consequences of cancellation.
  * If the bonus is completed (wagering done), the UI might show it as completed and allow the user to officially claim conversion (though usually the conversion to real balance is automatic upon completion). It might say “Completed – \$200 moved to your balance” or similar.
  * If no bonus is active and the user is eligible (e.g., never took the first deposit bonus), the site may prominently display an offer like “Get 100% bonus on your next deposit!” encouraging the user to deposit and claim it. This can be in the deposit page or a banner on the homepage for that user.

#### 3.5 Affiliate & Referral System

* DropBet’s affiliate program allows users to earn rewards for referring new players to the platform. Every user effectively can be an affiliate by sharing their code or link:

  * Upon registration, each user is assigned a unique **referral code** (often a short alphanumeric string or their username itself can act as a code). There is also a referral link that includes this code as a URL parameter (e.g., `https://dropbet.com?ref=UserCode`).
  * If a new visitor signs up through that link or by entering the code during signup, they become linked as a **referral** under that affiliate.
* **Multi-Tier Structure:** DropBet has a multi-tiered referral system:

  * **Tier 1:** Direct referrals. If Alice refers Bob using her code, Alice earns a commission from Bob’s activity.
  * **Tier 2:** If Bob (who is Alice’s referral) then refers Charlie with his own code, Bob earns from Charlie (his Tier 1), and Alice also earns a smaller commission from Charlie (Alice’s Tier 2).
  * This can potentially extend to Tier 3 or more, depending on configuration, but multi-tier usually means exactly that – multiple levels of indirect referrals provide diminishing commissions to the original referrer.
* **Commission Mechanics:**

  * The commission is typically a percentage of the house edge or net revenue from the referred players. For example, if Bob (Tier 1 for Alice) loses \$100, and the house edge on those bets was \$5, Alice might get 10% of that \$5 (so \$0.50) as commission.
  * If Charlie (Tier 2 for Alice) loses \$100 with \$5 house edge, Bob might get \$0.50 (10%) and Alice gets \$0.25 (5%, a smaller cut).
  * These percentages and structures are predefined. Often Tier 1 has the highest percentage (e.g., 10%), Tier 2 a smaller one (5%), Tier 3 even smaller (2%), etc.
  * Commission usually accumulates in an **affiliate balance** separate from regular balance, because these funds might only be withdrawable once certain conditions are met (like a minimum amount or only after a delay to avoid fraud).
* **Affiliate Dashboard:** Users who participate in the affiliate program have a dedicated section (sometimes under account or a standalone “Affiliate” page):

  * **Referral Link & Code:** prominently shown, with a “Copy” button for easy sharing.
  * **Statistics:** number of referrals (and how many are active players), total earnings, maybe earnings by day or month. Possibly a breakdown by tier (e.g., 5 direct referrals, 12 referrals in your second tier, etc.).
  * **Commission Payouts:** If the affiliate balance can be withdrawn, there will be a “Withdraw Commission” button to transfer it to the main wallet (likely after reaching a minimum like \$50). This could also be automated weekly or monthly.
  * **List of Referrals:** Some programs show a table of usernames you referred, their sign-up date, and maybe their total bets or revenue they generated (without personal details, respecting privacy). This helps affiliates gauge who their big players are.
* **Technical Implementation:**

  * The `useAffiliateCodeStore` indicates that if a new user clicks a referral link, the code is stored client-side (perhaps in a cookie or localStorage) so that even if they browse around and then register, the code will be applied.
  * During registration, there’s a field for “Referral Code (optional)” which can auto-fill from that store.
  * Once the user signs up, the backend records the referral relationship in the database (linking the new user’s account to the referrer’s ID, possibly with a tier level if the referrer themselves had a referrer).
  * Commission calculations likely occur on the backend whenever a bet is settled or a deposit is made (depending on commission rules). These add to the affiliate balance records.
  * The frontend periodically fetches affiliate stats (using React Query or similar) so the dashboard stays updated.
* **Usage for External Affiliates:** This system also doubles as a traditional affiliate program: external marketers or streamers can use their code to bring in players. The admin panel probably has tools to create special codes, adjust commission rates for specific affiliates (some high-value affiliates get higher revshare), and view affiliate performance. External contributors may be involved in maintaining those tools or adjusting the affiliate tracking as needed.

#### 3.6 Slot Challenges & Engagement Features

* To increase engagement, DropBet introduces **“Slot Challenges”** – which are tasks or achievements users can complete by playing slot games. These work as gamified objectives on top of regular play:

  * Challenges could be daily, weekly, or seasonal. For example: “Wager \$1000 on any slots today” or “Hit at least one win of 100x your bet this week”.
  * They might also be specific: “Play 500 spins on \[Specific Game]” or “Win a total of 1 BTC on slots this month”.
* **Challenge System:**

  * When a challenge is active, the backend tracks the user’s progress towards that goal. This progress is likely updated in real-time or near real-time and stored in the database.
  * Users may have multiple challenges at once (often of different types or tiers).
  * Some challenges could reset daily (daily missions) and others could be one-time achievements.
* **UI Elements:**

  * **Challenges Page or Widget:** The frontend displays available challenges, each as a card or list item. It shows the challenge description, the progress (e.g., “300/1000 dollars wagered” or a progress bar), and the reward for completion.
  * There may be visual indicators like badges for completed challenges or highlights for nearly done ones.
  * If a challenge is time-limited, a countdown timer is shown (“Ends in 5h 23m”).
  * **Claiming Rewards:** For challenges that don’t auto-credit, once the user meets the goal, a “Claim” button appears on the challenge card. Clicking it will reward the user (bonus, free spins, etc.) and mark the challenge as completed. Some challenges might auto-complete and credit the reward immediately.
  * **Notifications:** The user might get a notification or celebratory animation when they complete a challenge (“Challenge Complete!”) to encourage them.
* **Rewards for Challenges:** These can vary – often they give small bonus amounts, free spins on specific slots, rakeback boosts, or entries into a raffle. It depends on the design. The documentation mentions bonus claims in user features, so likely bonus balance is a common reward.
* **Competition Aspect:** In some systems, challenges might be tied to leaderboards or community events (though none is explicitly mentioned, it’s possible for future expansion). For example, a leaderboard of who completed the most challenges or who had the biggest slot win in a challenge period. External contributors might consider this if expanding the feature.
* **Other Engagement Features:**

  * **Daily Login Bonus:** While not mentioned, many platforms have a “daily reward” (like a free spin on a wheel or a small bonus for logging in each day consecutively). If DropBet has this, it would be implemented via a similar claim modal and some state in the user profile indicating when they last claimed.
  * **Tournaments:** Some casinos run slot tournaments. If DropBet does, the frontend would show tournament info (time left, leaderboard, user rank, prize pool). This is a more complex feature likely outside the provided text, but something to be aware of in the codebase if present.
  * **Social Features:** Apart from tipping, sometimes chat rooms or community leaderboards exist. The mention of challenges and tips suggests a community aspect. If there’s a chat, it would be a component possibly using socket.io as well, and external devs should ensure its moderation and performance.

## 4. Admin Panel

DropBet includes an administrative interface for staff to manage the platform's operations. This admin panel is typically a protected part of the site (or a separate site) that allows authorized personnel to view and modify data.

### 4.1 Technology and Access

* The admin panel is built using the same tech stack (Next.js/React + TypeScript), possibly as a separate Next.js application or as a set of secured routes under an admin-specific path or subdomain. It might have its own entry in the repository or a separate repository.
* Access to the admin panel requires an admin login. Admin authentication might use the same user accounts with an admin flag, or a separate mechanism. In any case, an admin JWT token will carry the information that the user has elevated privileges.
* For additional security, the admin panel could be served on a separate domain (e.g., `admin.dropbet.com`) and might be restricted by IP or VPN, though that’s more of an infrastructure detail. As developers, you should be aware of environment-specific settings (like CORS or cookies) if the admin is separate.

### 4.2 Key Features and Functions

* **User Management:**

  * Search for users by username, email, or ID.
  * View detailed profile of a user: balances, activity, verification status, etc.
  * Edit user attributes if needed (for example, adjusting a balance, resetting a password manually, banning an account).
  * Force actions like log out user, disable account, or mark as fraud.
  * View user’s session history or login IPs (helpful for investigations).
* **Financial Oversight:**

  * **Deposits:** See a log of all deposits. Check confirmations, address used, and ability to credit manually if a webhook failed.
  * **Withdrawals:** A queue of pending withdrawals requiring approval. Admins can review each (see user KYC status, amount, address) and then either approve (which triggers the integration’s withdraw API call) or reject (which returns funds to user balance and flags an issue).
  * Possibly set limits: adjust a user’s deposit or loss limits (if user requests or as a risk measure).
  * **Vault/Internal:** If any manual adjustment is needed (like moving funds from main to vault for a user), though typically not needed.
* **Game Management:**

  * View current games in progress (for in-house games, maybe see active crash game or a list of recent bets in each game).
  * For provably fair games, see the seeds/hashes to verify outcomes if needed.
  * Adjust game parameters: e.g., set the house edge for a game, or toggle availability of a game for maintenance.
  * Manage slot providers: enable/disable certain providers or games, which could remove them from the frontend catalog if something is down or retired.
* **Content Management:**

  * **Promotions/Bonuses:** Create and manage promocodes (set code, bonus amount, expiration, usage limit).
  * Assign bonuses to users manually (e.g., credit a bonus balance or free spins to a specific user as compensation or reward).
  * **Announcements/Blog:** If the site has a blog or news page, admins can draft and publish posts (with title, content, and maybe an image upload).
  * **Banners:** Upload and change banners for the homepage or promotional sections. This might be done through a config or direct file upload in admin.
* **Rewards & VIP Management:**

  * **Rakeback Config:** Change global rakeback percentages or enable special rakeback events (though if not in admin, then in code). At least view current values.
  * **VIP Levels:** View and change a user’s VIP level. Process VIP applications: see the submitted info and approve/decline with a click.
  * Possibly manage affiliate commission rates for specific users (some affiliates might have custom deals).
* **Affiliate Management:**

  * See a list of affiliates and their stats (how many referrals, earnings).
  * Adjust an affiliate’s tier or commission rate if needed.
  * Review big affiliate payouts.
* **Support Tools:**

  * Impersonate user (login as a user to see what they see, useful for debugging issues a user reports – this action is logged).
  * A section for support tickets or messages if the platform has an integrated support chat. Otherwise, logs of important events (failed logins, self-exclusions) to assist support.
* **Analytics & Monitoring:**

  * Dashboard with KPIs: active users online now (via sockets), new signups today, total bets today, gross gaming revenue, etc. Charts for trends over time.
  * Error monitoring: perhaps integrated with Sentry or custom logs visible in admin for recent errors or warnings.
  * Transaction monitor: a live feed of big wins or big deposits/withdrawals, to keep an eye on high-roller activity or potential abuse.
* **Roles and Permissions:**

  * The admin panel might support different roles (Admin, Finance, Support, Moderator). Each role sees different sections. For example, Support might not see financial configuration, and Finance might not be able to ban users, etc.
  * Admin accounts can be managed in the admin panel itself (create new admin users, assign roles, revoke access). This is sensitive, so carefully protected.

### 4.3 Admin Panel Deployment

* The admin panel, if separate, will have its own deployment process. If it’s part of the main Next.js app (just protected by role), then deployment is together. If separate, it might be a smaller app hosted internally.
* Typically, environment variables for admin (like API base URL, or an admin-specific secret) need to be set in the deployment environment.
* The admin panel should always be run over HTTPS and with tight network security. External contributors should coordinate with DevOps on how to access the admin panel in staging or dev (sometimes a dummy admin login is provided in dev databases, or you may need to directly insert an admin user into the DB for testing).
* Logging: Admin actions are logged (who did what at what time). This may not affect development, but in testing, be mindful that any changes you make via admin are persisted and possibly live-affecting users if done on production by mistake. Always use staging for testing admin functionality.

Overall, the admin panel is the command center of the platform. While users never see it, its reliability and security are just as important as the main site. External developers working on admin features should ensure thorough testing, as mistakes in admin can directly impact users and finances.

## 5. Deployment & CI/CD

Smooth deployment and continuous integration practices ensure that updates to DropBet are delivered reliably and safely.

### 5.1 Environments

* **Development:** Developers run the Next.js app locally. Typically, there will be a `.env.development` file with settings pointing to a development database and maybe sandbox API keys for providers (so you’re not hitting production wallets or KYC during local testing). Running `npm run dev` boots up the Next.js app at `localhost` for front-end and API routes. Some features like WebSockets might connect to a dev socket server or local instance.
* **Staging:** A staging environment (often on a protected URL or VPN-only) is used to test the integrated system. It should mirror production in architecture – connected to a staging database, using test API keys (or real ones but on a test environment when possible, e.g., Sumsub sandbox, CCPayment test mode). New releases are deployed here first for QA to verify.
* **Production:** The live environment for end users. It likely consists of one or more application servers, databases, and all the necessary third-party service configurations. Access to production is strictly controlled.

### 5.2 Continuous Integration (CI)

* The project uses a CI pipeline (e.g., GitHub Actions or GitLab CI):

  * On each push or pull request, the pipeline runs automated tasks. This typically includes linting (ESLint, Stylelint) and running any automated tests. The repository’s config will have job definitions for these.
  * If any of these tasks fail, the CI marks the build as failed, preventing merges if you have branch protection. This ensures code quality (no lint errors, consistent formatting) and basic correctness if tests are present.
  * Code formatting via Prettier might be enforced – sometimes CI will auto-fix and commit changes, or simply fail if formatting is off (developers then run Prettier locally to fix).

### 5.3 Continuous Deployment (CD)

* **Build Process:** When code is merged into the main branch (or a release branch), a deployment pipeline is triggered. The Next.js app is built for production (`npm run build` which calls `next build`). This outputs an optimized build with server-side rendered pages and client-side assets.
* **Containerization:** The app is likely containerized using Docker. A Dockerfile would define:

  * Base image (like node:18-alpine),
  * Copying source code, installing dependencies,
  * Running the build,
  * Then either using a smaller base to copy the build output (multistage build) or just running `next start` on the built app.
    If using multi-stage, the final image might use something like `node:18-alpine` copying the `.next` build and `node_modules` needed for runtime, to keep image slim.
* **Infrastructure:**

  * The app could be hosted on cloud VMs, containers orchestrated by Kubernetes, or a platform like AWS ECS/Fargate. The presence of real-time features (WebSockets) suggests they run a Node server continuously (not serverless).
  * A load balancer might distribute traffic across multiple instances for scale. Sticky sessions are typically not needed because JWT auth is stateless, but for WebSockets, one might use a sticky session or a shared session store if scaling horizontally (depending on socket.io setup).
  * Static assets (images, JS, CSS) from Next.js build can be served via a CDN for performance. Next.js by default can integrate with a CDN for its `_next/static` assets.
* **Deploy Steps:**

  * CI builds the Docker image (with a unique tag, e.g., the commit hash) and pushes it to a container registry.
  * Then either the CI or a separate deployment tool (like ArgoCD or a simple SSH script for a VM) pulls the new image and restarts the application with minimal downtime. If using something like Kubernetes, it would create new pods with the new image and phase out old ones (rolling update).
  * Environment variables (for DB connection strings, API keys, secrets) are provided to the container at runtime via secure means (Kubernetes secrets, Docker env, etc.). These include things like `DATABASE_URL`, `JWT_SECRET`, `SUMSUB_API_KEY`, `PAYMENT_PROVIDER_KEY`, etc. External contributors should get a list of needed env vars for setting up dev and also be aware how to configure them in staging/production.
* **After Deployment:** The new version is live. Often there’s a smoke test or health check (like hitting the health endpoint of the app) that CI performs to ensure the app is responding. If it fails, some pipelines auto-rollback to the previous version. Otherwise, the team is notified (via Slack or email) that a new release is live.

### 5.4 Scalability & Maintenance

* **Horizontal Scaling:** Because the platform deals with potentially high loads (especially if many players are online or a big promotion hits), it’s designed to scale:

  * Multiple instances of the Next.js server can run concurrently. All are stateless regarding user sessions (thanks to JWT auth). For sockets, if using multiple instances, they might use a message broker (like Redis pub/sub) to coordinate events across nodes (to broadcast game results to all players in a game, for example).
  * The database should be scaled appropriately (read replicas, proper indexing) to handle the volume of transactions.
  * If using third-party game content, ensure the network can handle many iframe/API requests to providers (usually fine since providers are robust).
* **Backups and Migrations:**

  * Database backups should be taken regularly (automated via cloud provider or cron jobs). External devs should ensure any schema changes (migrations) are backward compatible or done during a maintenance window to avoid downtime. The CI/CD pipeline might integrate a migration step (e.g., running `prisma migrate deploy` or similar) just before launching the new version.
  * Logs (application logs, security logs) should be stored and rotated. Monitoring tools might be attached (like CloudWatch, ELK stack, or Sentry for backend) to keep track of errors and performance.
* **Monitoring & Alerts:**

  * The team likely uses Sentry for frontend; possibly also for backend. Additionally, uptime monitors (Pingdom, etc.) to alert if the site goes down.
  * If any microservices are in use (not evident, but maybe a separate game server), those are also monitored.
  * DevOps might have set up alerts for unusual events (e.g., sudden spike in error rate, or in user signups, etc., which could indicate abuse or a bug).
* **Developer Onboarding:**

  * A fresh developer can get the project running by cloning the repo, installing Node and dependencies, setting up a local database (maybe a provided Docker Compose for PostgreSQL), and starting the dev server. Documentation (possibly in a README or separate doc) should list needed env vars and any special steps (like “run `npm run prisma:generate`” or “seed the database with initial data using `npm run seed`”).
  * External contributors should request access to a staging environment for testing any integration that can’t be done locally (e.g., testing actual deposit webhooks might require a public callback URL – in staging, not locally, unless using a tool like ngrok).
* **Future Updates:**

  * The architecture as documented allows for adding new games (just add new components and maybe backend endpoints for them), adding new currencies (configure in payment provider and UI lists), and scaling features like tournaments or new reward types.
  * The documentation should be updated by the new team as they modify or extend systems, to keep it as a living reference.
