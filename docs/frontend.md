**3. Frontend**

**3.1 UI Components**
The UI system is built using `shadcn/ui`, a component library based on Radix UI primitives, and is heavily styled using Tailwind CSS, SCSS modules, and global CSS variables.

**3.1.1 Component Libraries Used**
– shadcn/ui: Core UI elements are based on this custom component library
– Radix UI: Underlying primitives used for accessibility and structure
– clsx/classnames: Used for conditional styling
– framer-motion: Used for animation and transitions
– howler: Enables sound effects in games and certain UI interactions

**3.1.2 Component Structure & Organization**
UI components are structured within the `src/components/` directory under several subfolders:

```
src/components/
├── common/           # Shared cross-page components (e.g., headers, footers)
├── modals/           # All modal components (e.g., AuthModal, ConfirmModal)
├── originalGames/    # Custom components for each in-house game
├── pages/            # Page-level components specific to certain routes
└── ui/               # Core UI components (buttons, inputs, etc.)
```

**Breakdown by Folder:**
**common/**
– Navigation components (e.g. Header, Sidebar, MobileMenu)
– Layout wrappers (PageContainer, SectionHeader, etc.)
– User UI (ProfileDropdown, BalanceDisplay, etc.)

**modals/**
– AuthModal
– BonusClaimModal
– RakebackInfoModal
– GameRulesModal
– Error or Status modals

**originalGames/**
– GameBoard, GameTile, BetControls, etc. for each custom in-house game
– Sound, animations, responsive wrappers specific to each game

**pages/**
– HomePageHero
– PromotionsGrid
– BlogCardPreview
– ChallengeCard
– SlotProviderShowcase

**ui/**
– Button
– Input
– Select
– Tabs
– Switch
– Tooltip
– Dialog
– Toast
– Accordion
– Dropdown
– SkeletonLoader
– ProgressBar
– Tooltip
– Badge
– Alert
– Avatar
– Card
– Carousel
– Popover
– ScrollArea

Each component is typically styled with a mix of Tailwind utility classes and SCSS modules where needed.

**3.1.3 Theming & Styling**
– Tailwind CSS is used as the utility framework and integrates with PostCSS
– Components are themed via:
  • `components.json` (for shadcn/ui overrides)
  • CSS variables based on HSL in `tailwind.config.ts`
– Components adapt to dark/light themes and user preferences
– SCSS modules allow isolated styling logic
– Global styles and mixins in `src/styles/` set consistent spacing, colors, typography

**3.1.4 Responsiveness**
– Components are mobile-optimized with breakpoints built into Tailwind classes and SCSS mixins
– `MobileMenu`, responsive footers, and collapsible menus ensure navigation scales well on all devices
– Game UIs adapt dynamically using container queries, media queries, and `useMediaQuery` hooks

**3.1.5 Animations & Transitions**
– framer-motion is used to animate modal entrances, UI transitions, and game elements
– Animations are encapsulated within components and are consistent across the platform

[← Home](readme.md)