# Database Schema Documentation


## 📁 api.prisma

### 🔹 Model: `Faq`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement()) @map("id")` |
| `title` | `String` | `@map("title")` |
| `text` | `String` | `@map("text")` |
| `order` | `Int` | `@map("order")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |

### 🔹 Model: `SiteConfig`

| Field | Type | Attributes |
|-------|------|------------|
| `type` | `SiteConfigType` | `@id @unique @map("type")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `config` | `Json` | `@map("config")` |

### 🔹 Model: `UserFairnessSeeds`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `userId` | `Int` | `@unique @map("user_id")` |
| `serverSeed` | `String` | `@map("server_seed")` |
| `hashedServerSeed` | `String` | `@map("hashed_seed")` |
| `clientSeed` | `String` | `@map("client_seed")` |
| `nonce` | `Int` | `@default(1) @map("nonce")` |
| `nextServerSeed` | `String` | `@map("next_server_seed")` |
| `nextHashedServerSeed` | `String` | `@map("next_hashed_server_seed")` |
| `user` | `User` | `@relation(fields: [userId], references: [id], onDelete: Cascade)` |

### 🔹 Model: `UserInactiveFairnessSeeds`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `userId` | `Int` | `@map("user_id")` |
| `serverSeed` | `String` | `@map("server_seed")` |
| `hashedServerSeed` | `String` | `@map("hashed_seed")` |
| `clientSeed` | `String` | `@map("client_seed")` |
| `nonce` | `Int` | `@default(1) @map("nonce")` |
| `user` | `User` | `@relation(fields: [userId], references: [id], onDelete: Cascade)` |

### 🔹 Model: `CryptoCurrencyConfig`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @unique @default(autoincrement()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `currencyId` | `CurrencySymbol` | `@unique @map("currency_id")` |
| `name` | `String?` | `` |
| `testNetwork` | `Boolean` | `@default(false) @map("test_network")` |
| `withdrawsEnabled` | `Boolean` | `@default(false) @map("withdraws_enabled")` |
| `depositsEnabled` | `Boolean` | `@default(false) @map("deposits_enabled")` |

### 🔹 Model: `User`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `username` | `String` | `@unique @map("username")` |
| `isPrivate` | `Boolean` | `@default(false) @map("is_private")` |
| `password` | `String?` | `@map("password")` |
| `email` | `String?` | `@unique @map("email")` |
| `emailVerified` | `Boolean` | `@default(false) @map("email_verified")` |
| `lastLoginAt` | `DateTime` | `@default(now()) @map("last_login_at")` |
| `avatar` | `String` | `@map("avatar")` |
| `mfaSecret` | `String?` | `@map("mfa_secret")` |
| `vipLevel` | `Int` | `@default(1) @map("vip_level")` |
| `exp` | `Decimal` | `@default(0) @map("exp")` |
| `steamId` | `String?` | `@unique @map("steam_id")` |
| `steamTradeLink` | `String?` | `@unique @map("steam_trade_link")` |
| `googleEmail` | `String?` | `@unique @map("google_email")` |
| `affiliateCodeId` | `String?` | `@map("affiliate_code_id")` |
| `isEmailNotificationsEnabled` | `Boolean` | `@default(false) @map("is_email_notifications_enabled")` |
| `customMinAffiliateLevel` | `Int` | `@default(0) @map("custom_min_affiliate_level")` |
| `isStreamerMode` | `Boolean` | `@default(false) @map("is_streamer_mode")` |
| `isStreamer` | `Boolean` | `@default(false) @map("is_streamer")` |
| `isStaff` | `Boolean` | `@default(false) @map("is_staff")` |
| `isYoutuber` | `Boolean` | `@default(false) @map("is_youtuber")` |
| `isBanned` | `Boolean` | `@default(false) @map("is_banned")` |
| `banReason` | `String?` | `@map("ban_reason")` |
| `isTest` | `Boolean` | `@default(false) @map("is_test")` |
| `isBot` | `Boolean` | `@default(false) @map("is_bot")` |
| `canUseChat` | `Boolean` | `@default(true)  @map("can_use_chat")` |
| `stats` | `UserStats[]` | `` |
| `roles` | `UserRole[]` | `` |
| `userMfaRecovery` | `UserMfaRecovery[]` | `` |
| `chatMessages` | `ChatMessage[]` | `` |
| `depositWallets` | `DepositWallet[]` | `` |
| `deposits` | `Deposit[]` | `` |
| `permissions` | `UserPermission[]` | `` |
| `withdraws` | `Withdraw[]` | `` |
| `transactions` | `Transaction[]` | `@relation("user")` |
| `initiatedTransactions` | `Transaction[]` | `@relation("adminUser")` |
| `bets` | `Bet[]` | `` |
| `supportRequest` | `SupportRequest[]` | `` |
| `leaderboardUser` | `LeaderboardUser[]` | `` |
| `apiKeys` | `ApiKey[]` | `` |
| `userBalance` | `UserBalance[]` | `` |
| `userSelfExclusion` | `UserSelfExclusion[]` | `` |
| `userGamblingLimits` | `UserGamblingLimits?` | `` |
| `tipsSent` | `Tip[]` | `@relation("tip_sender")` |
| `tipsReceived` | `Tip[]` | `@relation("tip_recipient")` |
| `rakebacks` | `Rakeback[]` | `` |
| `userFairnessSeeds` | `UserFairnessSeeds?` | `` |
| `userInactiveFairnessSeeds` | `UserInactiveFairnessSeeds[]` | `` |
| `affiliateCodes` | `AffiliateCode[]` | `@relation("owner")` |
| `affiliateCode` | `AffiliateCode?` | `@relation("users", fields: [affiliateCodeId], references: [id])` |
| `affiliateUserStats` | `AffiliateUserStats[]` | `` |
| `favoriteGames` | `UserFavoriteGame[]` | `` |
| `sessions` | `UserSession[]` | `` |
| `houseGameMines` | `HouseGameMines[]` | `` |
| `houseGameMonkeyRun` | `HouseGameMonkeyRun[]` | `` |
| `houseGameBlackjack` | `HouseGameBlackjack[]` | `` |
| `adminTipsSent` | `AdminTips[]` | `@relation("admin_tip_sender")` |
| `adminTipsReceived` | `AdminTips[]` | `@relation("admin_tip_recipient")` |
| `kyc` | `UserKyc?` | `` |
| `kycVerificationRequests` | `UserKycVerificationRequest[]` | `@relation("user_kyc_verification_request_user")` |
| `statsUsd` | `UserStatsUsd?` | `` |
| `adminActionLogs` | `AdminActionLog[]` | `` |
| `confirmedWithdraws` | `Withdraw[]` | `@relation("confirmed_by_user")` |
| `registrationInfo` | `RegistrationInfo?` | `` |
| `balanceEvo` | `UserBalanceEvo?` | `` |
| `balanceDbc` | `UserBalanceDbc?` | `` |
| `affiliateStreamer` | `AffiliateStreamer?` | `` |
| `affiliateAggregatedInfo` | `AffiliateAggregatedInfo?` | `` |
| `affiliateUserStatsUsd` | `AffiliateUserStatsUsd[]` | `` |
| `withdrawalBlock` | `UserWithdrawalsBlock?` | `` |
| `notes` | `UserNote[]` | `@relation("notes")` |
| `createdNotes` | `UserNote[]` | `@relation("created_notes")` |
| `createdPromoCodes` | `PromoCode[]` | `` |
| `claimedPromoCodes` | `UserPromoCode[]` | `` |
| `createdChallenges` | `Challenge[]` | `@relation("challenge_creator")` |
| `wonChallenges` | `Challenge[]` | `@relation("challenge_winner")` |
| `confirmedChallenges` | `Challenge[]` | `@relation("challenge_winner_confirmed_by")` |
| `botConnect` | `BotsCasino?` | `` |
| `arbitrage` | `ArbitrageIncome?` | `` |
| `vipProgram` | `VipProgram?` | `` |
| `promoProgresses` | `UserPromoCodeProgress[]` | `` |
| `userConsents` | `UserConsents[]` | `` |
| `fastTrackBonusReporting` | `FastTrackBonusReporting[]` | `` |

### 🔹 Model: `FastTrackBonusReporting`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id` |
| `actionCommunicationProfileId` | `Int` | `@map("action_communication_profile_id")` |
| `actionGroupId` | `Int` | `@map("action_group_id")` |
| `actionId` | `Int` | `@map("action_id")` |
| `activityId` | `Int` | `@map("activity_id")` |
| `triggerHash` | `String` | `@map("trigger_hash")` |
| `playerOriginId` | `Int` | `@map("player_origin_id")` |
| `userId` | `Int` | `@map("user_id")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `UserNote`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement())` |
| `userId` | `Int` | `@map("user_id")` |
| `createdById` | `Int` | `@map("created_by_id")` |
| `note` | `String` | `@map("note")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `riskLevel` | `UserNoteRiskLevel` | `@default(NONE) @map("risk_level")` |
| `user` | `User` | `@relation(fields: [userId], references: [id], name: "notes")` |
| `createdBy` | `User` | `@relation(fields: [createdById], references: [id], name: "created_notes")` |

### 🔹 Model: `UserSelfExclusion`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement())` |
| `userId` | `Int` | `` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `expiresAt` | `DateTime` | `` |
| `createdAt` | `DateTime` | `@default(now())` |
| `updatedAt` | `DateTime` | `@updatedAt` |

### 🔹 Model: `UserGamblingLimits`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement())` |
| `userId` | `Int` | `@unique` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `betLimit` | `Decimal?` | `` |
| `createdAt` | `DateTime` | `@default(now())` |
| `updatedAt` | `DateTime` | `@updatedAt` |

### 🔹 Model: `UserBalance`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@map("user_id")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `amount` | `Decimal` | `@default(0) @map("amount")` |
| `vaultAmount` | `Decimal` | `@default(0) @map("vault_amount")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `Country`

| Field | Type | Attributes |
|-------|------|------------|
| `name` | `String` | `@map("name")` |
| `code` | `String` | `@id @unique @map("code")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `isBlocked` | `Boolean` | `@default(false) @map("is_blocked")` |
| `kyc` | `UserKyc[]` | `` |
| `regions` | `CountryRegion[]` | `` |
| `registrationInfo` | `RegistrationInfo[]` | `` |

### 🔹 Model: `CountryRegion`

| Field | Type | Attributes |
|-------|------|------------|
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `code` | `String` | `@map("code")` |
| `name` | `String` | `@map("name")` |
| `countryCode` | `String` | `` |
| `country` | `Country` | `@relation(fields: [countryCode], references: [code])` |
| `isBlocked` | `Boolean` | `@map("is_blocked")` |

### 🔹 Model: `UserKycVerificationRequest`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `userId` | `Int` | `@map("user_id")` |
| `kycLevel` | `KycLevel` | `@map("kyc_level")` |
| `verdict` | `KycVerificationVerdict?` | `@map("verdict")` |
| `rejectType` | `KycRejectType?` | `@map("reject_type")` |
| `moderationComment` | `String?` | `@map("moderation_comment")` |
| `clientComment` | `String?` | `@map("client_comment")` |
| `user` | `User` | `@relation("user_kyc_verification_request_user", fields: [userId], references: [id], map: "user_kyc_verification_request_user_fkey")` |
| `kyc` | `UserKyc` | `@relation("user_kyc_verification_request_kyc", fields: [userId], references: [userId], map: "user_kyc_verification_request_kyc_fkey")` |

### 🔹 Model: `Permission`

| Field | Type | Attributes |
|-------|------|------------|
| `title` | `String` | `@map("title")` |
| `key` | `String` | `@id @unique @map("key")` |
| `userPermission` | `UserPermission[]` | `` |

### 🔹 Model: `UserPermission`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@map("user_id")` |
| `permissionKey` | `String` | `@map("permission_key")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `permission` | `Permission` | `@relation(fields: [permissionKey], references: [key])` |

### 🔹 Model: `UserSession`

| Field | Type | Attributes |
|-------|------|------------|
| `sessionKey` | `String` | `@id @map("session_key")` |
| `sessionId` | `String` | `@map("session_id")` |
| `userId` | `Int` | `@map("user_id")` |
| `ip` | `String` | `@map("ip")` |
| `countryCode` | `String` | `@map("country_code")` |
| `regionCode` | `String` | `@map("region_code")` |
| `lastActivity` | `DateTime` | `@default(now()) @map("last_activity")` |
| `userAgent` | `Json` | `@default("{` |

### 🔹 Model: `UserMfaRecovery`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@map("user_id")` |
| `recoveryCode` | `String` | `@map("recovery_code") @db.VarChar(64)` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `UserRole`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@map("user_id")` |
| `role` | `Role` | `@map("role")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `AdminTips`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement())` |
| `senderId` | `Int` | `@map("sender_id")` |
| `recipientId` | `Int` | `@map("recipient_id")` |
| `amount` | `Decimal` | `@map("amount")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `usdAmount` | `Decimal` | `@default(0) @map("usd_amount")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `notes` | `String` | `@map("notes")` |
| `transactionId` | `String` | `@unique @map("transaction_id")` |
| `type` | `AdminTipsType` | `@map("type")` |
| `tag` | `AdminTipsTag` | `@default(OTHER) @map("tag")` |
| `sender` | `User` | `@relation("admin_tip_sender", fields: [senderId], references: [id])` |
| `recipient` | `User` | `@relation("admin_tip_recipient", fields: [recipientId], references: [id])` |

### 🔹 Model: `Tip`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement())` |
| `senderId` | `Int` | `@map("sender_id")` |
| `recipientId` | `Int` | `@map("recipient_id")` |
| `amount` | `Decimal` | `` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `isPublic` | `Boolean` | `@default(false) @map("is_public")` |
| `withdrawTransactionId` | `String` | `@unique @map("withdraw_transaction_id")` |
| `depositTransactionId` | `String` | `@unique @map("deposit_transaction_id")` |
| `sender` | `User` | `@relation("tip_sender", fields: [senderId], references: [id])` |
| `recipient` | `User` | `@relation("tip_recipient", fields: [recipientId], references: [id])` |

### 🔹 Model: `Bet`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @unique @default(uuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `settledAt` | `DateTime?` | `@map("settled_at")` |
| `userId` | `Int` | `@map("user_id")` |
| `payload` | `Json?` | `@map("payload")` |
| `status` | `BetStatus` | `@map("status")` |
| `errorDetails` | `String?` | `@map("error_details")` |
| `amount` | `Decimal` | `@map("amount")` |
| `payout` | `Decimal` | `@map("payout")` |
| `multiplier` | `Float` | `@default(0) @map("multiplier")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `usdAmount` | `Decimal` | `@map("usd_amount")` |
| `usdPayout` | `Decimal` | `@map("usd_payout")` |
| `commissionGgrUsdAmount` | `Decimal` | `@default(0) @map("commission_ggr_usd_amount")` |
| `commissionGgrPercent` | `Decimal` | `@default(0) @map("commission_ggr_percent")` |
| `gameId` | `Int` | `@map("game_id")` |

### 🔹 Model: `UserConsents`

| Field | Type | Attributes |
|-------|------|------------|
| `type` | `UserConsent` | `@map("type")` |
| `optedIn` | `Boolean` | `@default(false) @map("opted_in")` |
| `userId` | `Int` | `@map("user_id")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `UserKyc`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@id @map("user_id")` |
| `verificationPending` | `Boolean` | `@default(false) @map("verification_pending")` |
| `level` | `KycLevel` | `@default(LEVEL_0) @map("level")` |
| `gender` | `Gender` | `@default(OTHER) @map("gender")` |
| `firstName` | `String?` | `@map("first_name")` |
| `lastName` | `String?` | `@map("last_name")` |
| `dateOfBirth` | `DateTime?` | `@map("date_of_birth")` |
| `countryCode` | `String?` | `@map("country_code")` |
| `address` | `String?` | `@map("address")` |
| `postalCode` | `String?` | `@map("postal_code")` |
| `city` | `String?` | `@map("city")` |
| `occupation` | `String?` | `@map("occupation")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `country` | `Country?` | `@relation(fields: [countryCode], references: [code])` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `kycVerificationRequests` | `UserKycVerificationRequest[]` | `@relation("user_kyc_verification_request_kyc")` |

### 🔹 Model: `Transaction`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @unique @default(uuid()) @map("id")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `userId` | `Int` | `@map("user_id") // user whose account is being updated` |
| `adminUserId` | `Int?` | `@map("admin_user_id") // admin user who initiated the transaction` |
| `amount` | `Decimal` | `@map("amount")` |
| `beforeBalance` | `Decimal?` | `@map("before_balance")` |
| `afterBalance` | `Decimal?` | `@map("after_balance")` |
| `status` | `TransactionStatus` | `@map("status")` |
| `type` | `TransactionType` | `` |
| `notes` | `String?` | `` |
| `tag` | `TransactionTag` | `` |
| `roundId` | `String?` | `@map("game_id")` |
| `payload` | `Json?` | `@map("payload")` |
| `originalId` | `String?` | `@unique @map("original_id")` |
| `slotOriginalId` | `String?` | `@unique @map("slot_original_id")` |
| `user` | `User` | `@relation("user", fields: [userId], references: [id])` |
| `adminUser` | `User?` | `@relation("adminUser", fields: [adminUserId], references: [id])` |
| `originalTransaction` | `Transaction?` | `@relation("originalTransaction", fields: [originalId], references: [id])` |
| `rollbackTransaction` | `Transaction?` | `@relation("originalTransaction")` |
| `deposit` | `Deposit[]` | `` |
| `withdraw` | `Withdraw[]` | `` |

### 🔹 Model: `GgrCommissionRule`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `ggrPercent` | `Decimal` | `@map("ggr_percent")` |
| `payload` | `Json?` | `@map("payload")` |
| `providerId` | `Int` | `@map("provider_id") // low priority` |
| `category` | `GameCategory?` | `@map("category") // medium priority` |
| `gameId` | `Int?` | `@unique @map("game_id") // high priority` |
| `provider` | `GameProvider` | `@relation(fields: [providerId], references: [id])` |
| `game` | `GameIdentity?` | `@relation(fields: [gameId], references: [id])` |

### 🔹 Model: `GameProvider`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @unique @default(autoincrement()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `name` | `String` | `@map("name")` |
| `slug` | `String` | `@unique @map("slug")` |
| `prefix` | `String` | `@map("prefix")` |
| `enabled` | `Boolean` | `@default(true) @map("enabled")` |
| `originName` | `String?` | `@map("origin_name")` |
| `images` | `Json?` | `@map("images")` |
| `customImages` | `Json?` | `@map("custom_images")` |
| `gameIdentity` | `GameIdentity[]` | `` |
| `commissionRules` | `GgrCommissionRule[]` | `` |

### 🔹 Model: `GameInCategory`

| Field | Type | Attributes |
|-------|------|------------|
| `category` | `GameCategory` | `@map("category")` |
| `order` | `Int` | `@map("order")` |
| `gameId` | `Int` | `@map("game_id")` |
| `game` | `GameIdentity` | `@relation(fields: [gameId], references: [id])` |

### 🔹 Model: `GamePopularity`

| Field | Type | Attributes |
|-------|------|------------|
| `gameId` | `Int` | `@map("game_id")` |
| `gamePlayed` | `BigInt` | `@default(0) @map("game_played")` |
| `launchCount` | `BigInt` | `@default(0) @map("launch_count")` |
| `walletErrorCount` | `BigInt` | `@default(0) @map("wallet_error_count")` |
| `game` | `GameIdentity` | `@relation(fields: [gameId], references: [id])` |

### 🔹 Model: `GameIdentity`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @unique @default(autoincrement()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `addedAt` | `DateTime` | `@default(now()) @map("added_at")` |
| `lastPlayedAt` | `DateTime` | `@default(now()) @map("last_played_at")` |
| `name` | `String` | `@map("name")` |
| `slug` | `String` | `@map("slug")` |
| `type` | `GameType` | `@map("type")` |
| `providerId` | `Int` | `@map("provider_id")` |
| `walletId` | `String?` | `@map("wallet_id")` |
| `enabled` | `Boolean` | `@default(true) @map("enabled")` |
| `tags` | `String[]` | `@default([]) @map("tags")` |
| `originalSlug` | `String` | `@map("original_slug")` |
| `info` | `Json?` | `@map("info")` |
| `settings` | `Json?` | `@map("settings")` |
| `images` | `Json?` | `@map("images")` |
| `customImages` | `Json?` | `@map("custom_images")` |
| `provider` | `GameProvider` | `@relation(fields: [providerId], references: [id])` |
| `popularity` | `GamePopularity?` | `` |
| `bet` | `Bet[]` | `` |
| `categories` | `GameInCategory[]` | `` |
| `userFavorites` | `UserFavoriteGame[]` | `` |
| `botsCasino` | `GameInBotsCasino[]` | `` |
| `commissionRule` | `GgrCommissionRule?` | `` |
| `challenges` | `Challenge[]` | `` |
| `promoGameWhitelist` | `PromoGameWhitelist[]` | `` |

### 🔹 Model: `UserStats`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@map("user_id")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `totalDeposits` | `Decimal` | `@default(0) @map("total_deposits")` |
| `totalWithdraws` | `Decimal` | `@default(0) @map("total_withdraws")` |
| `totalWagered` | `Decimal` | `@default(0) @map("total_wagered")` |
| `totalPayouts` | `Decimal` | `@default(0) @map("total_payouts")` |
| `totalBets` | `Int` | `@default(0) @map("total_bets")` |
| `ltv` | `Decimal` | `@default(0) @map("ltv")` |
| `totalLoss` | `Decimal` | `@default(0) @map("total_loss")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `UserStatsUsd`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@id @map("user_id")` |
| `totalDeposits` | `Decimal` | `@default(0) @map("total_deposits")` |
| `totalWithdraws` | `Decimal` | `@default(0) @map("total_withdraws")` |
| `totalWagered` | `Decimal` | `@default(0) @map("total_wagered")` |
| `totalPayouts` | `Decimal` | `@default(0) @map("total_payouts")` |
| `totalBets` | `Int` | `@default(0) @map("total_bets")` |
| `totalLoss` | `Decimal` | `@default(0) @map("total_loss")` |
| `depositCount` | `Int` | `@default(0) @map("deposit_count")` |
| `withdrawCount` | `Int` | `@default(0) @map("withdraw_count")` |
| `ltv` | `Decimal` | `@default(0) @map("ltv")` |
| `firstDepositAt` | `DateTime?` | `@map("first_deposit_at")` |
| `lastDepositAt` | `DateTime?` | `@map("last_deposit_at")` |
| `firstWithdrawAt` | `DateTime?` | `@map("first_withdraw_at")` |
| `lastWithdrawAt` | `DateTime?` | `@map("last_withdraw_at")` |
| `lastWageredAt` | `DateTime?` | `@map("last_wagered_at")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `ChatRoom`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid())` |
| `code` | `String` | `` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `settings` | `Json` | `@default("{` |

### 🔹 Model: `ChatMessage`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid())` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `type` | `ChatMessageType` | `` |
| `content` | `String` | `` |
| `userId` | `Int` | `@map("user_id")` |
| `roomId` | `String` | `@map("room_id")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `room` | `ChatRoom` | `@relation(fields: [roomId], references: [id])` |
| `replyToId` | `String?` | `@map("reply_to_id")` |
| `replyTo` | `ChatMessage?` | `@relation("ChatMessageReplyTo", fields: [replyToId], references: [id])` |
| `replies` | `ChatMessage[]` | `@relation("ChatMessageReplyTo")` |

### 🔹 Model: `AffiliateUserStats`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@map("user_id")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `claimableAmount` | `Decimal` | `@default(0) @map("claimable_amount")` |
| `claimedAmount` | `Decimal` | `@default(0) @map("claimed_amount")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `AffiliateUserStatsUsd`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@id @map("user_id")` |
| `claimableAmount` | `Decimal` | `@default(0) @map("claimable_amount")` |
| `claimedAmount` | `Decimal` | `@default(0) @map("claimed_amount")` |
| `lastBetCreatedAt` | `DateTime?` | `@map("last_bet_created_at")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `AffiliateCode`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @map("id")` |
| `ownerId` | `Int` | `@map("owner_id")` |
| `wageredUsdAmount` | `Decimal` | `@default(0) @map("wagered_usd_amount")` |
| `allowCommissionBonus` | `Boolean` | `@default(true) @map("allow_commission_bonus")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `owner` | `User` | `@relation("owner", fields: [ownerId], references: [id])` |
| `users` | `User[]` | `@relation("users")` |
| `deposits` | `Deposit[]` | `` |
| `exclusivePromoCodes` | `PromoCode[]` | `` |

### 🔹 Model: `Withdraw`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid())` |
| `amount` | `Decimal` | `@map("amount")` |
| `txHash` | `String?` | `@map("tx_hash")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `usdAmount` | `Decimal` | `@map("usd_amount")` |
| `userId` | `Int` | `@map("user_id")` |
| `recipientAddress` | `String` | `@map("recipient_address")` |
| `recipientMemo` | `String?` | `@map("recipient_memo")` |
| `confirmedAt` | `DateTime?` | `@map("confirmed_at")` |
| `confirmations` | `Int` | `@default(0)` |
| `status` | `WithdrawStatus` | `@default(PENDING)` |
| `rejectReason` | `String?` | `@map("reject_reason")` |
| `providerId` | `PaymentProviderName` | `@map("provider_id")` |
| `networkId` | `PaymentNetwork` | `@map("network_id")` |
| `externalId` | `String?` | `@map("external_id")` |
| `failedReason` | `String?` | `@map("failed_reason")` |
| `confirmedByUserId` | `Int?` | `@map("confirmed_by_user_id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `provider` | `PaymentProvider` | `@relation(fields: [providerId], references: [id])` |
| `confirmedByUser` | `User?` | `@relation("confirmed_by_user", fields: [confirmedByUserId], references: [id])` |
| `transactionId` | `String` | `@map("transaction_id")` |
| `transaction` | `Transaction` | `@relation(fields: [transactionId], references: [id])` |

### 🔹 Model: `Deposit`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `confirmedAt` | `DateTime?` | `@map("confirmed_at")` |
| `amount` | `Decimal` | `@map("amount")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `status` | `DepositStatus` | `@map("status")` |
| `providerId` | `PaymentProviderName` | `@map("provider_id")` |
| `usdAmount` | `Decimal` | `@map("usd_amount")` |
| `externalId` | `String` | `@unique @map("external_id")` |
| `txHash` | `String?` | `@unique @map("tx_hash")` |
| `networkId` | `PaymentNetwork` | `@map("network_id")` |
| `payAddress` | `String?` | `@map("pay_address")` |
| `payMemo` | `String?` | `@map("pay_memo")` |
| `userId` | `Int` | `@map("user_id")` |
| `transactionId` | `String?` | `@unique @map("transaction_id")` |
| `affiliateCodeId` | `String?` | `@map("affiliate_code_id")` |
| `affiliateAmount` | `Decimal?` | `@map("affiliate_amount")` |
| `depositBonus` | `Decimal?` | `@map("deposit_bonus")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `transaction` | `Transaction?` | `@relation(fields: [transactionId], references: [id])` |
| `affiliateCode` | `AffiliateCode?` | `@relation(fields: [affiliateCodeId], references: [id])` |
| `provider` | `PaymentProvider` | `@relation(fields: [providerId], references: [id])` |

### 🔹 Model: `PaymentProvider`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `PaymentProviderName` | `@id @map("id")` |
| `priority` | `Int` | `@unique @map("priority")` |
| `isDepositEnabled` | `Boolean` | `@default(false) @map("is_deposit_enabled")` |
| `isWithdrawEnabled` | `Boolean` | `@default(false) @map("is_withdraw_enabled")` |
| `depositWallet` | `DepositWallet[]` | `` |
| `deposits` | `Deposit[]` | `` |
| `withdraws` | `Withdraw[]` | `` |

### 🔹 Model: `DepositWallet`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @unique @default(uuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `address` | `String` | `@map("address")` |
| `providerId` | `PaymentProviderName` | `@map("provider_id")` |
| `userId` | `Int` | `@map("user_id")` |
| `networkId` | `PaymentNetwork` | `@map("network_id")` |
| `memo` | `String?` | `@map("memo")` |
| `user` | `User` | `@relation(fields: [userId], references: [id], onDelete: Cascade)` |
| `provider` | `PaymentProvider` | `@relation(fields: [providerId], references: [id])` |

### 🔹 Model: `SupportRequest`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `name` | `String` | `@map("string")` |
| `email` | `String` | `@map("email")` |
| `message` | `String` | `@map("message")` |
| `notes` | `String?` | `@map("notes")` |
| `status` | `SupportRequestStatus` | `@default(NEW) @map("status")` |
| `userId` | `Int?` | `@map("user_id")` |
| `user` | `User?` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `LeaderboardSchedule`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid())` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `enabled` | `Boolean` | `@default(true) @map("enabled")` |
| `config` | `Json` | `@map("config")` |
| `leaderboards` | `Leaderboard[]` | `` |

### 🔹 Model: `Leaderboard`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid())` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `name` | `String` | `@map("name")` |
| `description` | `String?` | `@map("description")` |
| `type` | `LeaderboardType` | `@map("type")` |
| `config` | `Json` | `@map("config")` |
| `startDate` | `DateTime` | `@map("start_date")` |
| `endDate` | `DateTime` | `@map("end_date")` |
| `scheduleId` | `String?` | `@map("schedule_id")` |
| `status` | `LeaderboardStatus` | `@default(NOT_STARTED) @map("status")` |
| `leaderboardUsers` | `LeaderboardUser[]` | `` |
| `schedule` | `LeaderboardSchedule?` | `@relation(fields: [scheduleId], references: [id])` |

### 🔹 Model: `LeaderboardUser`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid())` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `userId` | `Int` | `@map("user_id")` |
| `leaderboardId` | `String` | `@map("leaderboard_id")` |
| `remainingUsdPrize` | `Decimal` | `@default(0) @map("remaining_usd_prize")` |
| `isWinner` | `Boolean` | `@default(false) @map("is_winner")` |
| `isPrizeReceived` | `Boolean` | `@default(false) @map("is_prize_received")` |
| `finalPosition` | `Int?` | `@map("final_position")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `leaderboard` | `Leaderboard` | `@relation(fields: [leaderboardId], references: [id])` |
| `usdAmount` | `Decimal` | `@map("usd_amount")` |
| `position` | `LeaderboardUserPositionView?` | `@relation(fields: [id], references: [id])` |

### 🔹 Model: `ApiKey`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid())` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `key` | `String` | `@unique @map("key")` |
| `disabled` | `Boolean` | `@default(false) @map("disabled")` |
| `userId` | `Int` | `@map("user_id")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `Rakeback`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@map("user_id")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `instantClaimable` | `Decimal` | `@default(0) @map("instant_claimable")` |
| `instantTotalClaimed` | `Decimal` | `@default(0) @map("instant_total_claimed")` |
| `dailyClaimable` | `Decimal` | `@default(0) @map("daily_claimable")` |
| `dailyTotalClaimed` | `Decimal` | `@default(0) @map("daily_total_claimed")` |
| `dailyAccumulated` | `Decimal` | `@default(0) @map("daily_accumulated")` |
| `weeklyClaimable` | `Decimal` | `@default(0) @map("weekly_claimable")` |
| `weeklyTotalClaimed` | `Decimal` | `@default(0) @map("weekly_total_claimed")` |
| `weeklyAccumulated` | `Decimal` | `@default(0) @map("weekly_accumulated")` |
| `monthlyClaimable` | `Decimal` | `@default(0) @map("monthly_claimable")` |
| `monthlyTotalClaimed` | `Decimal` | `@default(0) @map("monthly_total_claimed")` |
| `monthlyAccumulated` | `Decimal` | `@default(0) @map("monthly_accumulated")` |
| `updatedAt` | `DateTime` | `@default(now()) @updatedAt @map("updated_at")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `UserFavoriteGame`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@map("user_id")` |
| `gameId` | `Int` | `@map("game_id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `game` | `GameIdentity` | `@relation(fields: [gameId], references: [id], onDelete: Cascade)` |
| `user` | `User` | `@relation(fields: [userId], references: [id], onDelete: Cascade)` |

### 🔹 Model: `HouseGameMines`

| Field | Type | Attributes |
|-------|------|------------|
| `gameId` | `String` | `@id @unique @default(uuid()) @map("game_id")` |
| `userId` | `Int` | `@map("user_id")` |
| `board` | `Json` | `@map("board")` |
| `isFinished` | `Boolean` | `@default(false) @map("is_finished")` |
| `user` | `User` | `@relation(fields: [userId], references: [id], onDelete: Cascade)` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |

### 🔹 Model: `HouseGameMonkeyRun`

| Field | Type | Attributes |
|-------|------|------------|
| `gameId` | `String` | `@id @unique @default(uuid()) @map("game_id")` |
| `userId` | `Int` | `@map("user_id")` |
| `betAmount` | `Decimal` | `@map("bet_amount")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `deadPoint` | `Int` | `@default(1) @map("dead_point")` |
| `step` | `Int` | `@default(1) @map("step")` |
| `difficulty` | `MonkeyRunDifficulties` | `@map("difficulty")` |
| `isFinished` | `Boolean` | `@default(false) @map("is_finished")` |
| `user` | `User` | `@relation(fields: [userId], references: [id], onDelete: Cascade)` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `seed` | `Json` | `@map("seed")` |

### 🔹 Model: `AdminActionLog`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement())` |
| `createdAt` | `DateTime` | `@default(now())` |
| `method` | `String` | `` |
| `url` | `String` | `` |
| `userId` | `Int?` | `` |
| `user` | `User?` | `@relation(fields: [userId], references: [id])` |
| `userAgent` | `String?` | `` |
| `ipAddress` | `String?` | `` |
| `status` | `Int` | `` |
| `response` | `Json?` | `` |
| `durationMs` | `Float?` | `` |
| `requestBody` | `Json?` | `` |

### 🔹 Model: `HouseGameBlackjack`

| Field | Type | Attributes |
|-------|------|------------|
| `roundId` | `String` | `@id @unique @map("round_id")` |
| `userId` | `Int` | `@map("user_id")` |
| `payload` | `Json` | `@default("{` |

### 🔹 Model: `RegistrationInfo`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@id @map("user_id")` |
| `device` | `String` | `@map("device")` |
| `os` | `String` | `@map("os")` |
| `browser` | `String` | `@map("browser")` |
| `countryCode` | `String?` | `@map("country_code")` |
| `language` | `String?` | `@map("language")` |
| `ipAddress` | `String` | `@map("ip_address")` |
| `referrer` | `String?` | `@map("referrer")` |
| `type` | `RegistrationInfoType` | `@map("type")` |
| `userAgent` | `String` | `@map("user_agent")` |
| `deviceType` | `String` | `@map("device_type")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `country` | `Country?` | `@relation(fields: [countryCode], references: [code])` |

### 🔹 Model: `UserWithdrawalsBlock`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@id @map("user_id")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `reason` | `String?` | `@map("reason")` |
| `reasonPublic` | `String?` | `@map("reason_public")` |
| `blockUntil` | `DateTime?` | `@map("block_until")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |

### 🔹 Model: `Challenge`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `createdById` | `Int` | `@map("created_by_id")` |
| `defaultTitle` | `String` | `@map("default_title")` |
| `title` | `String?` | `@map("title")` |
| `imageUrl` | `String` | `@map("image_url")` |
| `isHidden` | `Boolean` | `@default(false) @map("is_hidden")` |
| `targetGameId` | `Int` | `@map("target_game_id")` |
| `minBetAmountUsd` | `Decimal` | `@map("min_bet_amount_usd")` |
| `minBetMultiplier` | `Float` | `@map("min_bet_multiplier")` |
| `rewardCurrency` | `CurrencySymbol` | `@map("reward_currency")` |
| `rewardAmount` | `Decimal` | `@map("reward_amount")` |
| `winnerId` | `Int?` | `@map("winner_id")` |
| `winnerSelectedAt` | `DateTime?` | `@map("winner_selected_at")` |
| `winnerConfirmedById` | `Int?` | `@map("winner_confirmed_by_id")` |
| `betId` | `String?` | `@map("bet_id") // No DB relation to bet` |
| `targetGame` | `GameIdentity` | `@relation(fields: [targetGameId], references: [id])` |
| `winner` | `User?` | `@relation(name: "challenge_winner", fields: [winnerId], references: [id])` |
| `creator` | `User` | `@relation(name: "challenge_creator", fields: [createdById], references: [id])` |
| `winnerConfirmedBy` | `User?` | `@relation(name: "challenge_winner_confirmed_by", fields: [winnerConfirmedById], references: [id])` |

### 🔹 Model: `ArbitrageIncome`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@map("user_id")` |
| `subId` | `String` | `@map("sub_id")` |
| `provider` | `ArbitrageProvider` | `@map("provider")` |
| `actions` | `Json?` | `@map("actions")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `VipProgram`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement())` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `userId` | `Int` | `@unique` |
| `status` | `ApplicationStatus` | `@default(INBOX) @map("status")` |
| `name` | `String` | `` |
| `social` | `String` | `` |
| `transfer` | `Json` | `// { wagger: number, avgDeposit: number, playsWeek: number, reasons?: string` |

### 🔹 Model: `BotsCasino`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `Int` | `@id @map("user_id")` |
| `playDays` | `Weekday[]` | `@map("play_days")` |
| `type` | `BotType` | `@map("type")` |
| `behavior` | `BotBehavior` | `@map("behaviour")` |
| `startTime` | `String` | `@map("start_time")` |
| `isActive` | `Boolean` | `@map("is_active") @default(false)` |
| `games` | `GameInBotsCasino[]` | `` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |

### 🔹 Model: `GameInBotsCasino`

| Field | Type | Attributes |
|-------|------|------------|
| `botsCasinoUserId` | `Int` | `` |
| `gameIdentityId` | `Int` | `` |
| `botsCasino` | `BotsCasino` | `@relation(fields: [botsCasinoUserId], references: [userId], onDelete: Cascade)` |
| `gameIdentity` | `GameIdentity` | `@relation(fields: [gameIdentityId], references: [id], onDelete: Cascade)` |

### 🔹 Model: `PromoCode`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `createdById` | `Int` | `@map("created_by_id")` |
| `title` | `String` | `@map("title")` |
| `description` | `String?` | `@map("description")` |
| `imageUrl` | `String?` | `@map("image_url")` |
| `type` | `PromoBonusType` | `@default(INSTANT) @map("type")` |
| `publicContent` | `Json?` | `@map("public_content")` |
| `isPublic` | `Boolean` | `@default(false) @map("is_public")` |
| `code` | `String` | `@map("code")` |
| `amount` | `Decimal` | `@default(0) @map("amount")` |
| `currencyId` | `CurrencySymbol` | `@default(DBC) @map("currency_id")` |
| `isHidden` | `Boolean` | `@default(true) @map("is_hidden")` |
| `isActive` | `Boolean?` | `@map("is_active")` |
| `expiresAt` | `DateTime?` | `@map("expires_at")` |
| `claimsLeft` | `Int?` | `@map("claims_left")` |
| `minKYCLevelToClaim` | `KycLevel?` | `@map("min_kyc_level_to_claim")` |
| `minTotalWagerUsdToClaim` | `Decimal?` | `@map("min_total_wager_usd_to_claim")` |
| `minTotalDepositUsdToClaim` | `Decimal?` | `@map("min_total_deposit_usd_to_claim")` |
| `minVipLevelToClaim` | `Int?` | `@map("min_vip_level_to_claim")` |
| `onlyZeroDepositsToClaim` | `Boolean?` | `@map("only_zero_deposits_to_claim")` |
| `affiliateCodeToClaim` | `String?` | `@map("affiliate_code_to_claim")` |
| `minDepositUsdToActivate` | `Decimal?` | `@map("min_deposit_usd_to_activate")` |
| `lockWithdrawOnClaimHours` | `Int?` | `@map("lock_withdraw_on_claim_hours") // Different name for backward compatibility` |
| `bonusMultiplier` | `Float?` | `@map("bonus_multiplier")` |
| `maxBonusUsdAmount` | `Decimal?` | `@map("max_bonus_usd_amount")` |
| `autoVaultOnClaim` | `Boolean?` | `@map("auto_vault_on_claim")` |
| `timeSecondsToComplete` | `Int?` | `@map("time_seconds_to_complete")` |
| `wagerMultiplierToComplete` | `Decimal?` | `@map("wager_multiplier_to_complete")` |
| `wagerUsdAmountToComplete` | `Decimal?` | `@map("wager_usd_amount_to_complete")` |
| `createdBy` | `User` | `@relation(fields: [createdById], references: [id])` |
| `affiliateCode` | `AffiliateCode?` | `@relation(fields: [affiliateCodeToClaim], references: [id])` |
| `claimedByUsers` | `UserPromoCode[]` | `` |
| `userProgresses` | `UserPromoCodeProgress[]` | `` |
| `promoGameWhitelist` | `PromoGameWhitelist[]` | `` |

### 🔹 Model: `UserPromoCode`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid()) @map("id")` |
| `userId` | `Int` | `@map("user_id")` |
| `promoCodeId` | `String` | `@map("promo_code_id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `isActive` | `Boolean` | `@default(false) @map("is_active")` |
| `status` | `UserPromoCodeStatus` | `@default(COMPLETED) @map("status")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `promoCode` | `PromoCode` | `@relation(fields: [promoCodeId], references: [id])` |
| `userProgress` | `UserPromoCodeProgress?` | `` |

### 🔹 Model: `UserPromoCodeProgress`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `userId` | `Int` | `@map("user_id")` |
| `promoCodeId` | `String` | `@map("promo_code_id")` |
| `expiresAt` | `DateTime` | `@map("expires_at")` |
| `bonusUsdAmount` | `Decimal` | `@map("bonus_usd_amount")` |
| `baseUsdAmount` | `Decimal` | `@map("base_usd_amount")` |
| `ownUsdAmount` | `Decimal` | `@map("own_usd_amount")` |
| `currencyId` | `CurrencySymbol` | `@map("currency_id")` |
| `wagerMultiplierToComplete` | `Decimal` | `@map("wager_multiplier_to_complete")` |
| `wagerUsdAmountToComplete` | `Decimal` | `@map("wager_usd_amount_to_complete")` |
| `wageredUsdAmount` | `Decimal` | `@map("wagered_usd_amount")` |
| `user` | `User` | `@relation(fields: [userId], references: [id])` |
| `promoCode` | `PromoCode` | `@relation(fields: [promoCodeId], references: [id])` |
| `userPromoCode` | `UserPromoCode?` | `@relation(fields: [promoCodeId, userId], references: [promoCodeId, userId])` |

### 🔹 Model: `PromoGameWhitelist`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `promoCodeId` | `String` | `@map("promo_code_id")` |
| `gameId` | `Int` | `@map("game_id")` |
| `maxBetAmount` | `Decimal` | `@default(5) @map("max_bet_amount")` |
| `wagerMultiplier` | `Float` | `@default(1) @map("wager_multiplier")` |
| `enabled` | `Boolean` | `@default(true) @map("enabled")` |
| `promoCode` | `PromoCode` | `@relation(fields: [promoCodeId], references: [id])` |
| `game` | `GameIdentity` | `@relation(fields: [gameId], references: [id], onDelete: Cascade)` |


## 📁 blackjack.prisma

### 🔹 Model: `BlackjackBet`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `settledAt` | `DateTime?` | `@map("settled_at")` |
| `userId` | `String` | `@map("user_id")` |
| `gameId` | `String` | `@map("game_id")` |
| `amount` | `Decimal` | `@map("amount")` |
| `payout` | `Decimal` | `@default(0) @map("payout")` |
| `betData` | `Json` | `@default("{` |

### 🔹 Model: `BlackjackUser`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @map("id")` |
| `username` | `String` | `@map("username")` |
| `isPrivate` | `Boolean` | `@map("is_private")` |
| `avatar` | `String` | `@map("avatar")` |
| `vipLevel` | `Int` | `@map("vip_level")` |
| `bets` | `BlackjackBet[]` | `` |
| `blackjackUserOnTable` | `BlackjackUserOnTable[]` | `` |

### 🔹 Model: `BlackjackTable`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(autoincrement())` |
| `maxPlayersCount` | `Int` | `@default(1) @map("max_players_count")` |
| `minBet` | `Float` | `@default(0) @map("min_bet")` |
| `maxBet` | `Float` | `@default(0) @map("max_bet")` |
| `minPerfectPairsBet` | `Float` | `@default(1) @map("min_perfect_pairs_bet")` |
| `maxPerfectPairsBet` | `Float` | `@default(1) @map("max_perfect_pairs_bet")` |
| `waitBetUntilUtc` | `DateTime?` | `@map("wait_bet_until_utc")` |
| `activeProvablyFairSeedId` | `String?` | `@unique @map("active_provably_fair_seed_id")` |
| `gameId` | `String?` | `@map("game_id")` |
| `isActive` | `Boolean` | `@default(true) @map("is_active")` |
| `activeProvablyFairSeed` | `BlackjackProvablyFairSeed?` | `@relation(fields: [activeProvablyFairSeedId], references: [id])` |
| `usersOnTables` | `BlackjackUserOnTable[]` | `` |
| `games` | `BlackjackGame[]` | `` |

### 🔹 Model: `BlackjackUserOnTable`

| Field | Type | Attributes |
|-------|------|------------|
| `userId` | `String` | `@map("user_id")` |
| `tableId` | `Int` | `@map("table_id")` |
| `position` | `Int` | `@default(0) @map("position")` |
| `countOfSkippedGames` | `Int` | `@default(0) @map("count_of_skipped_games")` |
| `table` | `BlackjackTable` | `@relation(fields: [tableId], references: [id])` |
| `user` | `BlackjackUser` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `BlackjackPlayerHand`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id` |
| `gameId` | `String` | `@map("game_id")` |
| `status` | `BlackjackPlayerStatus` | `@map("status")` |
| `game` | `BlackjackGame` | `@relation("Game", fields: [gameId], references: [id])` |

### 🔹 Model: `BlackjackGame`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id` |
| `tableId` | `Int` | `@map("table_id")` |
| `status` | `BlackjackGameStatus` | `@map("status")` |
| `provablyFairSeedId` | `String` | `@unique @map("provably_fair_seed_id")` |
| `waitActionUntilUtc` | `DateTime?` | `@map("wait_action_until_utc")` |
| `table` | `BlackjackTable` | `@relation(fields: [tableId], references: [id])` |
| `playerHands` | `BlackjackPlayerHand[]` | `@relation("Game")` |
| `provablyFairSeed` | `BlackjackProvablyFairSeed` | `@relation(fields: [provablyFairSeedId], references: [id])` |
| `data` | `Json` | `@default("{` |

### 🔹 Model: `BlackjackGameConfig`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `Int` | `@id @default(1)` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `minBet` | `Float` | `@map("min_bet")` |
| `maxBet` | `Float` | `@map("max_bet")` |
| `minPerfectPairsBet` | `Float` | `@default(1) @map("min_perfect_pairs_bet")` |
| `maxPerfectPairsBet` | `Float` | `@default(10) @map("max_perfect_pairs_bet")` |
| `maxPlayersCountOnTable` | `Int` | `@default(1) @map("max_players_count_on_table")` |
| `timeToPlaceBetsSec` | `Float` | `@default(17) @map("time_to_place_bets_sec")` |
| `numberOfDecks` | `Int` | `@default(8) @map("number_of_decks")` |
| `isEvenMoneyEnabled` | `Boolean` | `@default(true) @map("is_even_money_enabled")` |
| `isInsuranceEnabled` | `Boolean` | `@default(true) @map("is_insurance_enabled")` |
| `isSplitEnabled` | `Boolean` | `@default(true) @map("is_split_enabled")` |
| `playerCanResplitTo` | `Int` | `@default(3) @map("player_can_resplit_to")` |
| `isDoubleEnabled` | `Boolean` | `@default(true) @map("is_double_enabled")` |
| `isSurrenderEnabled` | `Boolean` | `@default(true) @map("is_surrender_enabled")` |
| `timeToMakeActionSec` | `Float` | `@default(20) @map("time_to_make_action_sec")` |
| `gameStartDelaySec` | `Float` | `@default(2) @map("game_start_delay_sec")` |

### 🔹 Model: `BlackjackProvablyFairSeed`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @default(uuid())` |
| `serverSeed` | `String` | `@map("server_seed")` |
| `hashedServerSeed` | `String` | `@map("hashed_server_seed")` |
| `externalSeedData` | `Json` | `@default("{` |


## 📁 speed_roulette.prisma

### 🔹 Model: `SpeedRouletteGame`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @unique @default(cuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `updatedAt` | `DateTime` | `@updatedAt @map("updated_at")` |
| `state` | `SpeedRouletteGameState` | `@map("state")` |
| `secret` | `String` | `@map("secret")` |
| `roll` | `Int?` | `@map("roll")` |
| `color` | `SpeedRouletteGameColor?` | `@map("color")` |
| `endedAt` | `DateTime?` | `@map("ended_at")` |
| `eosBlockTimestamp` | `DateTime` | `@map("eos_block_timestamp")` |
| `eosBlockNum` | `Int` | `@map("eos_block_num")` |
| `eosBlockId` | `String?` | `@map("eos_block_id")` |
| `speedRouletteBets` | `SpeedRouletteBet[]` | `` |

### 🔹 Model: `SpeedRouletteBet`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @unique @default(cuid()) @map("id")` |
| `createdAt` | `DateTime` | `@default(now()) @map("created_at")` |
| `gameId` | `String` | `@map("game_id")` |
| `userId` | `String` | `@map("user_id")` |
| `currencyId` | `String` | `@map("currency_id")` |
| `amount` | `Decimal` | `@map("amount")` |
| `color` | `SpeedRouletteGameColor` | `@map("color")` |
| `isSettled` | `Boolean` | `@default(false) @map("is_settled")` |
| `game` | `SpeedRouletteGame` | `@relation(fields: [gameId], references: [id])` |
| `user` | `SpeedRouletteUser` | `@relation(fields: [userId], references: [id])` |

### 🔹 Model: `SpeedRouletteUser`

| Field | Type | Attributes |
|-------|------|------------|
| `id` | `String` | `@id @map("id")` |
| `username` | `String` | `@map("username")` |
| `isPrivate` | `Boolean` | `@map("is_private")` |
| `avatar` | `String` | `@map("avatar")` |
| `vipLevel` | `Int` | `@map("vip_level")` |
| `bets` | `SpeedRouletteBet[]` | `` |

[← Home](readme.md)