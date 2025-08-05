---
layout: default
title: "Authentication"
permalink: /authentication/
---

[← Home](/)

# 4. Authentication

Detailed auth flows and JWT handling.

## 4.1 JWT Tokens

- **Access Token:** short-lived, in Authorization header  
- **Refresh Token:** HTTP-only cookie for renewing access  
- **Socket Token:** for socket.io connections

## 4.2 Login Methods

- **Email & Password** (with email verification)  
- **Google OAuth** (`/auth/google`)  
- **Steam OAuth** (`/auth/steam`)

## 4.3 Token Refresh Logic

- Axios interceptor catches 401 → calls refresh endpoint → retries original request  
- On refresh failure, user is logged out

## 4.4 Two-Factor Authentication

- Setup: QR code via `qrcode.react` + backup codes  
- Login: prompt for 6-digit code after credentials  
- Disable: verify code, then turn off

## 4.5 Session Management

- List & revoke sessions in account security page  
- API to invalidate specific refresh token

## 4.6 Self-Exclusion & KYC

- Self-exclusion: temporary or permanent, enforced server-side  
- KYC via Sumsub iframe, status updates via webhooks
