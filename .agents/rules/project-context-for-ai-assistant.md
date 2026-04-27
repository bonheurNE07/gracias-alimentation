---
trigger: always_on
---

# Project Context for AI Assistant — Alimentation Gracias

You are helping build a production-ready mobile-first restaurant menu PWA for a small food business called **Alimentation Gracias**.

Your role is to assist as a senior software architect and frontend engineer focused on clean architecture, scalability, UX quality, and professional best practices.

---

# Project Goal

Build a minimalist multilingual online menu where customers can:

* browse available food items
* view item image, price, and short description
* click an item to open a popup/modal with larger image and details
* select quantity from the popup
* add items to cart
* review cart before checkout
* choose pickup or home delivery
* provide customer information before checkout
* send final order directly to the owner's WhatsApp as a formatted message

There is:

* NO authentication
* NO payment gateway
* NO traditional backend required
* NO heavy database
* NO admin dashboard for now

The final goal is simplicity, speed, and excellent mobile UX.

---

# Core Business Rules

## Restaurant Name

Alimentation Gracias

---

# Current Menu Items

* Omelette au frittes
* Omelette au socise
* Omelette au sardine
* Kwanga et socise

The system must be prepared for future categories like:

* Breakfast
* Drinks
* Snacks
* Lunch

even if currently only one category exists.

---

# Ordering Flow

## Item Selection

Each menu card must contain:

* image preview
* item name
* price
* checkbox / add trigger

IMPORTANT:

If the user clicks the item card itself (not the checkbox), a popup modal must open.

---

## Popup Modal Must Include

* large image
* short description
* price
* quantity selector
* add to cart button

Preferred UX:

Prevent accidental multiple quantity selection.
Quantity selection must be explicit and clear.

Preferred behavior:
Modal confirmation before adding to cart.

---

# Checkout Flow

Before checkout:

Ask for:

* customer name (required)

Also support:

* pickup
* home delivery

If user selects:

## Pickup

Only customer name required.

## Home Delivery

Required:

* customer name
* phone number
* delivery address

Phone number becomes mandatory only for delivery.

---

# WhatsApp Checkout

Final checkout must send order as a WhatsApp message to ONE fixed owner phone number.

Use professional format:

Example:

Nouvelle commande – Alimentation Gracias

Nom client: Bonheur
Téléphone: XXXXX

Type: Livraison
Adresse: XXXXX

Articles:
• Omelette frites ×2
• Kwanga saucisse ×1

Total: 12$

Merci.

Do not use payment integration.

Checkout = redirect to WhatsApp with prefilled message.

---

# Languages

Must support multilingual UI:

* French
* Swahili
* Kinande

Requirements:

* automatically detect browser language
* allow manual language switching
* remember user language preference

---

# Theme

Support:

* Light mode
* Dark mode

Rules:

* follow device theme automatically
* remember last selected theme
* allow manual switching
* light mode should feel premium and minimalist

---

# Currency Display

The business is used in DRC.

Prices should display:

* USD ($)
* local equivalent (hardcoded)

This should be configurable.

---

# PWA Requirements

This must behave like a mobile app.

Requirements:

* installable on mobile (Add to Home Screen)
* offline support for cached menu
* smooth mobile-first UX
* app-like experience

Use proper PWA implementation.

---

# Design Style

Visual style must be:

* minimalist
* premium
* easy to understand
* fast to use
* WhatsApp-friendly
* street-food casual + premium mix

Avoid:

* heavy UI
* over-animation
* clutter
* unnecessary complexity

Prioritize:

* clarity
* spacing
* readability
* fast interaction
* trust

---

# Technical Stack (MANDATORY)

Use:

* Next.js (App Router)
* Tailwind CSS
* Zustand
* nuqs
* React Hook Form
* Zod
* next-intl
* next-pwa

Deployment target:

* Vercel

---

# Data Strategy

PHASE 1:

Use local JSON for menu data.

Reason:

* faster
* simpler
* stable menu
* better performance
* no API dependency

PHASE 2 (optional later):

Can migrate to Google Sheets sync if frequent owner updates become necessary.

Do NOT start with Google Sheets unless truly needed.

---

# Architecture Rules

Use:

## Feature-Based Architecture

Preferred structure:

features/
menu/
cart/
checkout/
theme/
language/
pwa/

Avoid messy page-based architecture.

Also prefer:

* reusable UI components
* custom hooks
* provider pattern
* config-driven UI
* clean TypeScript types
* scalable folder structure

Code must be production-ready and maintainable.

---

# Priority Order

Most important:

1. Simplicity
2. Mobile UX
3. Performance
4. Reliability
5. Professional UI quality
6. Future scalability

Avoid overengineering.

---

# Important Development Rule

Do NOT introduce unnecessary backend complexity.

This project should remain:

simple,
fast,
professional,
and easy to maintain for a small local business.

Always choose the simplest robust solution.
