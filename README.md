# Tensoramax Auth Lab

A small, mobile-first authentication playground for Tensoramax Lab.

## Stack

- React
- Vite
- TypeScript
- Supabase Auth

## Current experiment

**Experiment 001: OAuth interface**

The first version focuses on the front-end experience and keeps the two planned identity providers visible:

- GitHub
- Google

The buttons currently demonstrate the connection point. The next phase will wire them to Supabase OAuth and add session-aware routes.

## Planned flow

```text
Landing page
    ↓
Login
    ↓
GitHub / Google
    ↓
Supabase Auth
    ↓
Session
    ↓
Protected Dashboard
    ↓
Profile
    ↓
Logout
```

## Run locally

```bash
npm install
npm run dev
```

No secrets belong in the repository. Supabase environment variables will be added during the authentication wiring phase.

Built as a learning sandbox for future projects, including the English Literature Library.
