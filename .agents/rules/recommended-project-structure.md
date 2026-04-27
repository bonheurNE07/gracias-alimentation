---
trigger: always_on
---

# Recommended Project Structure — Alimentation Gracias

This is the recommended production-ready folder structure for the project using:

* Next.js (App Router)
* Tailwind CSS
* TypeScript
* Zustand
* next-intl
* next-pwa
* React Hook Form
* Zod
* nuqs

The structure follows:

* Feature-Based Architecture
* Mobile-First Design
* PWA-first thinking
* Scalable production standards

Avoid page-based messy architecture.

---

# Root Structure

```text
alimentation-gracias/
│
├── app/
├── components/
├── features/
├── config/
├── constants/
├── data/
├── hooks/
├── lib/
├── providers/
├── messages/
├── public/
├── styles/
├── types/
├── utils/
│
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── manifest.ts
├── robots.ts
├── sitemap.ts
└── README.md
```

---

# 1. app/ (Routing Layer)

Only routing and layout responsibilities.

Never place business logic here.

```text
app/
│
├── [locale]/
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── menu/
│   │   └── page.tsx
│   │
│   ├── cart/
│   │   └── page.tsx
│   │
│   ├── checkout/
│   │   └── page.tsx
│   │
│   └── not-found.tsx
│
├── globals.css
├── layout.tsx
└── not-found.tsx
```

Rules:

* routing only
* page composition only
* no heavy logic
* no business rules here

---

# 2. features/ (Business Logic Layer)

This is the heart of the application.

```text
features/
│
├── menu/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   └── index.ts
│
├── cart/
│   ├── components/
│   ├── store/
│   ├── hooks/
│   ├── utils/
│   └── index.ts
│
├── checkout/
│   ├── components/
│   ├── forms/
│   ├── validation/
│   ├── utils/
│   └── index.ts
│
├── theme/
│   ├── store/
│   ├── hooks/
│   └── index.ts
│
├── language/
│   ├── hooks/
│   └── index.ts
│
├── pwa/
│   ├── hooks/
│   └── index.ts
```

Rules:

* feature isolation
* scalable logic
* no feature coupling
* business rules stay here

---

# 3. components/ (Shared UI Components)

Reusable global UI only.

```text
components/
│
├── ui/
│   ├── button.tsx
│   ├── input.tsx
│   ├── modal.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── sheet.tsx
│   ├── drawer.tsx
│   ├── loader.tsx
│   └── empty-state.tsx
│
├── layout/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── mobile-nav.tsx
│   └── app-shell.tsx
│
├── common/
│   ├── language-switcher.tsx
│   ├── theme-toggle.tsx
│   ├── whatsapp-button.tsx
│   └── install-pwa-banner.tsx
```

Rules:

* shared only
* no feature-specific business logic

---

# 4. data/ (Static Data Layer)

Initial menu data.

```text
data/
│
├── menu.json
├── categories.json
└── settings.json
```

Phase 1 uses local JSON only.

No API dependency.

---

# 5. messages/ (Translations)

Multilingual support.

```text
messages/
│
├── fr.json
├── sw.json
└── kin.json
```

Rules:

* no hardcoded text
* everything translatable

---

# 6. config/ (Application Config)

System-level config.

```text
config/
│
├── site.ts
├── whatsapp.ts
├── theme.ts
├── pwa.ts
└── navigation.ts
```

Examples:

* owner WhatsApp number
* SEO metadata
* app settings
* branding config

---

# 7. constants/

```text
constants/
│
├── routes.ts
├── currencies.ts
├── delivery.ts
└── languages.ts
```

Only static constants.

---

# 8. hooks/

Shared hooks only.

```text
hooks/
│
├── use-mobile.ts
├── use-local-storage.ts
├── use-debounce.ts
└── use-online-status.ts
```

Avoid feature logic here.

Feature hooks stay inside features/.

---

# 9. lib/

Third-party setup and integrations.

```text
lib/
│
├── intl.ts
├── zustand.ts
├── pwa.ts
├── metadata.ts
└── analytics.ts
```

No business logic.

---

# 10. providers/

Application wrappers.

```text
providers/
│
├── theme-provider.tsx
├── intl-provider.tsx
├── query-provider.tsx
└── app-provider.tsx
```

Only app-wide providers.

---

# 11. styles/

```text
styles/
│
├── tokens.css
├── animations.css
└── utilities.css
```

Design system support.

---

# 12. types/

Global shared types.

```text
types/
│
├── menu.ts
├── cart.ts
├── checkout.ts
└── common.ts
```

Avoid duplicated types.

---

# 13. utils/

Pure helper functions only.

```text
utils/
│
├── currency.ts
├── whatsapp.ts
├── formatter.ts
├── image.ts
└── validation.ts
```

No UI logic.

---

# Important Structural Rules

NEVER:

* mix business logic inside app/
* create giant components
* duplicate types
* duplicate validation
* hardcode UI text
* mix feature logic inside shared components
* use page-based architecture

ALWAYS:

* isolate features
* use reusable UI
* keep logic close to feature
* keep architecture scalable
* think long-term maintainability

---

# Golden Rule

If a file feels hard to locate,
the structure is wrong.

If a developer cannot understand the project quickly,
the architecture is wrong.

Clarity is architecture.
