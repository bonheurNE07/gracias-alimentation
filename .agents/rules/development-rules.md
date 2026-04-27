---
trigger: always_on
---

# Development Rules — Alimentation Gracias

These are mandatory engineering, architecture, UI/UX, and code quality rules for the project.

All implementation decisions must follow these rules strictly.

---

# 1. Core Development Philosophy

Always prioritize:

1. Simplicity
2. Mobile-first UX
3. Performance
4. Reliability
5. Maintainability
6. Scalability
7. Clean professional UI

Avoid:

* overengineering
* unnecessary backend complexity
* premature optimization
* complex abstractions without real value
* unnecessary dependencies
* code duplication
* poor folder structure
* weak validation
* unclear UI interactions

Always choose the simplest robust production-ready solution.

---

# 2. Mobile-First Rule (MANDATORY)

This project is mobile-first, not desktop-first.

Every feature must be designed for mobile usage first.

Rules:

* mobile UI must be designed before desktop
* touch interaction must be prioritized
* buttons must be thumb-friendly
* spacing must support easy tapping
* forms must be easy to complete on phone
* checkout must require minimal friction
* cart interaction must be fast
* popup modal must feel native on mobile
* PWA install flow must be smooth

Desktop support is secondary.

Never design desktop-first layouts.

---

# 3. PWA Rule

The website must behave like a mobile app.

Required:

* installable PWA
* Add to Home Screen support
* offline menu caching
* fast loading
* proper manifest configuration
* app icons
* splash behavior
* smooth mobile experience

Avoid fake PWA implementation.

Use real production-ready PWA setup.

---

# 4. No Backend Complexity Rule

Do NOT create unnecessary backend systems.

Forbidden unless explicitly required:

* authentication system
* user accounts
* payment gateway
* admin dashboard
* complex database setup
* REST API for basic features
* unnecessary server actions
* unnecessary microservices

Checkout must be WhatsApp-based.

Use frontend-first architecture.

---

# 5. Data Management Rule

Phase 1:

Use local JSON for menu data.

Do NOT start with:

* Google Sheets API
* CMS
* external API dependency
* unnecessary database

Only move to Google Sheets later if business needs frequent updates.

Always prefer static-first architecture.

---

# 6. Feature-Based Architecture Rule

Must use:

Feature-based folder structure

Preferred:

features/
menu/
cart/
checkout/
theme/
language/
pwa/

Avoid:

pages/
components/
utils/
everything mixed together

Architecture must scale cleanly.

Never use messy folder structures.

---

# 7. State Management Rule

Use the right tool for the right problem.

Use:

* Zustand for global state
* React Hook Form for forms
* Zod for validation
* nuqs for URL state
* local state only when appropriate

Do NOT use:

* Redux
* unnecessary Context abuse
* over-complicated global state

Keep state management minimal and clean.

---

# 8. UI Component Rule

Build reusable production-ready components.

Requirements:

* clear API
* strong TypeScript typing
* reusable structure
* accessibility support
* composable design
* clean naming
* scalable patterns

Avoid:

* giant components
* business logic inside UI components
* repeated UI patterns
* deeply nested unreadable JSX

Use component composition.

---

# 9. Modal UX Rule

When clicking item card:

Open modal popup.

Modal must include:

* large image
* description
* price
* quantity selector
* add to cart button

Rules:

* prevent accidental multiple quantity selection
* quantity must be explicit
* add-to-cart must require clear confirmation

No confusing UX.

---

# 10. Cart UX Rule

Cart must be:

* clear
* fast
* visible
* easy to update

Rules:

* quantity must be obvious
* accidental duplicate orders must be prevented
* remove/update actions must be simple
* checkout CTA must be strong and visible

Never make cart interaction confusing.

---

# 11. Checkout Validation Rule

Validation must be strict and clear.

Required:

Always ask:

* customer name

If delivery selected:

Require:

* phone number
* address

Validation messages must be:

* user-friendly
* multilingual
* immediate
* clear

Never allow invalid checkout flow.

---

# 12. WhatsApp Checkout Rule

Checkout must redirect to WhatsApp with a professional formatted message.

Use only ONE fixed owner number.

Format must be clean and readable.

Do NOT use:

* payment integration
* complex checkout system

WhatsApp is the final checkout channel.

Keep it simple and reliable.

---

# 13. Internationalization Rule

Must support:

* French
* Swahili
* Kinande

Rules:

* auto-detect browser language
* allow manual switching
* remember user preference
* no hardcoded text in components
* use translation files properly

All visible UI text must be translatable.

No shortcuts.

---

# 14. Theme Rule

Support:

* light mode
* dark mode

Rules:

* detect system preference
* allow manual override
* persist user preference
* maintain design quality in both themes

Light mode default feel:

minimal + premium

Dark mode must not feel broken.

---

# 15. Performance Rule

Performance is mandatory.

Rules:

* optimize images
* lazy load where needed
* avoid unnecessary rerenders
* minimize JavaScript
* avoid heavy libraries
* keep bundle size small
* static rendering first
* cache aggressively where appropriate

Performance is part of UX.

Never ignore it.

---

# 16. Design System Rule

UI must be consistent.

Must define:

* spacing scale
* typography scale
* border radius system
* button variants
* color system
* card patterns
* modal patterns
* form patterns

Avoid inconsistent styling.

Every screen must feel part of one product.

---

# 17. Minimalism Rule

UI must be minimalist.

Avoid:

* visual clutter
* too many colors
* excessive animation
* heavy shadows
* unnecessary banners
* unnecessary sections

Prioritize:

* whitespace
* clarity
* readability
* trust
* elegance

Less is better.

---

# 18. Error Handling Rule

Handle errors professionally.

Required:

* fallback UI
* empty states
* loading states
* graceful validation handling
* offline awareness

Never leave broken silent failures.

---

# 19. SEO Rule

Even small business websites need good SEO.

Required:

* metadata
* Open Graph
* proper semantic HTML
* structured content
* fast loading
* mobile optimization

Local visibility matters.

---

# 20. Deployment Rule

Deployment target:

Vercel

Rules:

* production-ready deployment
* environment simplicity
* no unnecessary server requirements
* reliable build process
* easy maintenance

Deploy for stability, not complexity.

---

# 21. Code Quality Rule

All code must be:

* strongly typed
* clean
* readable
* maintainable
* production-ready

Avoid:

* any types
* unclear naming
* dead code
* duplicated logic
* large unmaintainable files
* weak validation

Code must be senior-level quality.

---

# 22. Future Scalability Rule

Even if small now, architecture must allow future growth.

Possible future additions:

* promotions
* featured items
* owner dashboard
* menu scheduling
* analytics
* order history
* Google Sheets sync

Prepare for growth without building unnecessary systems today.

Build for evolution, not complexity.

---

# Final Rule

If two solutions exist:

Choose the simpler one
that remains professional,
maintainable,
and production-ready.
