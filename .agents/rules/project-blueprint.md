---
trigger: always_on
---


# Project Blueprint — Alimentation Gracias

## Project Type

A **mobile-first multilingual restaurant menu Progressive Web App (PWA)** where customers can:

* browse menu items
* view images and descriptions
* select quantity
* add items to cart
* choose pickup or delivery
* provide customer information
* send final order directly to WhatsApp owner

without:

* authentication
* payment gateway
* backend complexity
* heavy database
* unnecessary admin systems

This is the best architecture for your business case.

---

# PART 1 — Recommended Tech Stack

---

# Frontend Framework

## Recommendation:

## Next.js (App Router)

### Why

Because it gives:

* excellent mobile performance
* static generation
* SEO support
* PWA compatibility
* clean routing
* easy deployment on Vercel
* professional scalability

Better than Vite for this project.

---

# Styling

## Recommendation:

## Tailwind CSS

### Why

Because it gives:

* fast UI development
* clean minimalist design
* responsive mobile-first workflow
* dark/light mode support
* production-ready maintainability

Perfect for this project.

---

# State Management

## Recommendation:

## Zustand

### Why

Because:

* lighter than Redux
* perfect for cart management
* simple and fast
* ideal for small/medium projects

Used for:

* cart state
* theme state
* language preferences

---

# URL State

## Recommendation:

## nuqs

Excellent choice from you.

Used for:

* filters
* categories
* search state
* language persistence

---

# Forms

## Recommendation

* React Hook Form
* Zod

Used for:

* checkout validation
* delivery form validation
* multilingual validation messages

Professional and safe.

---

# Internationalization

## Recommendation:

## next-intl

For:

* French
* Swahili
* Kinande

This is the best professional option.

---

# PWA Support

## Recommendation:

## next-pwa

Used for:

* install as app
* offline menu caching
* home screen icon
* splash screen
* app-like behavior

Very important.

---

# Data Source

## Recommendation:

## Phase 1 → Local JSON

## Phase 2 → Google Sheets sync if needed

### Why

Start simple.

Since menu is stable:

### Better first approach:

```text
menu.json
```

because:

* faster
* safer
* zero API dependency
* better performance
* easier deployment

Google Sheets only if owner needs frequent updates.

My recommendation:

## Start with Local JSON

Very important decision.

---

# Deployment Platform

---

# Recommendation:

# Vercel

## Why NOT Render

Render is better for:

* backend APIs
* Docker services
* Python services

Not ideal here.

---

## Why NOT Netlify

Good, but:

### Vercel is better for Next.js

because:

* native optimization
* better App Router support
* easier PWA setup
* smoother deployment
* better performance

---

# Final Recommendation

# Use Vercel

Best professional choice.

---

# PART 2 — Architecture Style

---

# Recommended Architecture

# Static-First Modular Architecture

Meaning:

### UI first

*

### minimal dynamic logic

*

### WhatsApp checkout

*

### offline-first caching

This is ideal.

---

# Design Pattern Recommendation

## Use:

# Feature-Based Architecture

instead of

# Page-Based Architecture

---

## Good Example

```text
features/
   cart/
   menu/
   checkout/
   theme/
   language/
   pwa/
```

instead of:

```text
pages/
components/
utils/
everything mixed
```

This is much more professional.

---

# Also Use

## Component Composition Pattern

## Custom Hook Pattern

## Provider Pattern

## Store Pattern

## Config-Driven UI Pattern

especially for menu rendering.

Very important.

---

Next message I’ll continue with:

# PART 3

including:

* folder structure strategy
* UX flow design
* multilingual architecture
* WhatsApp order flow
* PWA strategy
* branding system
* colors
* typography
* mobile-first UI decisions
* caching strategy
* performance optimization
* SEO strategy

This is where the project becomes truly production-grade.
