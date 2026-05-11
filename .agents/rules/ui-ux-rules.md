---
trigger: always_on
---

# UI & UX Rules — Alimentation Gracias

These are the mandatory UI and UX rules for the project.

All interface decisions must follow these rules to ensure:

* simplicity
* trust
* fast ordering
* excellent mobile experience
* premium minimalist design
* WhatsApp-friendly checkout flow

This project is not a generic restaurant app.

It is a focused mobile-first food ordering experience for fast customer conversion.

---

# 1. UX Philosophy

Primary goal:

Help the customer order as fast and as confidently as possible.

Every screen must answer:

“How can the user complete the order faster?”

Avoid:

* unnecessary steps
* confusing actions
* too many clicks
* hidden pricing
* weak checkout CTA
* overwhelming visuals
* unclear forms
* complicated cart management

Ordering must feel natural and obvious.

---

# 2. Home Page UX Flow

Required user journey:

Landing
→ Browse menu
→ Open item modal
→ Select quantity
→ Add to cart
→ Review cart
→ Checkout form
→ WhatsApp confirmation

This flow must feel smooth and obvious.

Never interrupt this flow.

---

# 3. Header Rules

Header must be minimal and useful.

Include:

* logo / restaurant name
* language switcher
* theme toggle
* cart icon with quantity badge

Avoid:

* large navigation menus
* unnecessary links
* distracting hero sections

This is not a corporate website.

It is an ordering app.

---

# 4. Hero Section Rules

Hero section must be small and purposeful.

Include:

* restaurant name
* short welcoming message
* simple CTA

Example text:

Bienvenue chez Alimentation Gracias

Commandez rapidement vos plats préférés
et confirmez votre commande sur WhatsApp.

CTA:
Voir le Menu

Avoid:

* long paragraphs
* large marketing sections
* unnecessary storytelling

Keep it practical.

---

# 5. Menu Card Rules

Every menu card must immediately show:

* item image
* item name
* short subtitle (optional)
* price in USD
* local equivalent price
* clear add trigger

Card must feel tappable.

Rules:

* price must never be hidden
* image must feel appetizing
* spacing must be clean
* quantity must not be editable directly on card
* avoid accidental multiple order

Checkbox/add trigger must be visually clear.

---

# 6. Click Behavior Rule

Critical UX rule:

If user clicks:

## Item Card

→ Open popup modal

If user clicks:

## Add Trigger

→ Open quantity confirmation modal

Never confuse these actions.

Interaction must feel predictable.

---

# 7. Modal Rules

Popup modal must feel premium and mobile-native.

Must include:

* large image
* item name
* short 
* price
* quantity selector
* strong Add to Cart button

Rules:

* modal should open smoothly
* quantity must be explicit
* quantity selector must be very clear
* close action must be obvious
* no hidden pricing

Button example:

Ajouter au panier

Avoid weak CTA like:

Submit

Bad UX.

---

# 8. Cart Rules

Cart must be simple and confidence-building.

Must show:

* selected items
* quantity
* subtotal
* total
* pickup/delivery choice
* strong checkout button

Rules:

* easy remove action
* easy quantity update
* no confusion about total price
* clear empty cart state

Example empty state:

Votre panier est vide

Ajoutez vos plats préférés pour continuer.

---

# 9. Checkout Form Rules

Checkout must be short and frictionless.

Always ask:

* customer name

Delivery options:

## Pickup

Only name required

## Home Delivery

Require:

* phone number
* address

Rules:

* forms must be short
* fields must be large and mobile-friendly
* validation must be immediate
* error messages must be clear
* never ask unnecessary information

Do not ask email.

Do not ask account creation.

Do not ask password.

---

# 10. WhatsApp Confirmation UX

Final action must feel safe and professional.

CTA example:

Confirmer sur WhatsApp

Never use:

Place Order

because WhatsApp is the real checkout.

User must clearly understand:

clicking opens WhatsApp.

Trust is important.

---

# 11. Recommended Texts (French Default)

Because the business is in DRC,
French should feel primary.

---

# Main Welcome Text

Bienvenue chez Alimentation Gracias

Vos plats préférés,
rapidement et simplement.

---

# CTA Button

Voir le Menu

---

# Add to Cart

Ajouter au panier

---

# Quantity

Quantité

---

# Cart

Panier

---

# Empty Cart

Votre panier est vide

Ajoutez vos plats préférés pour continuer.

---

# Checkout

Finaliser la commande

---

# Pickup

Retrait sur place

---

# Delivery

Livraison à domicile

---

# Name Field

Nom complet

---

# Phone Field

Téléphone

---

# Address Field

Adresse de livraison

---

# WhatsApp CTA

Confirmer sur WhatsApp

---

# Validation Error Example

Veuillez entrer votre nom

Veuillez entrer votre numéro de téléphone

Veuillez entrer votre adresse de livraison

---

# Success Guidance Text

Votre commande sera confirmée directement sur WhatsApp.

---

# 12. Multilingual UX Rule

French = primary

Swahili + Kinande = equal quality

Rules:

* translations must feel natural
* avoid machine-translated bad UX
* keep labels short
* maintain visual consistency

Never let one language feel secondary.

---

# 13. Theme UX Rule

Light mode:

premium + elegant

Dark mode:

clean + readable

Rules:

* maintain contrast quality
* avoid aggressive dark colors
* avoid overly bright accents

Dark mode must feel designed,
not inverted.

---

# 14. Color Rules

Preferred style:

minimal premium + street food casual

Recommended palette style:

Primary:
warm green / elegant olive

Accent:
soft gold / warm beige

Neutral:
clean white / soft gray

Dark:
charcoal dark mode

Avoid:

* too many bright colors
* fast-food aggressive red/yellow
* childish color systems

Trust > Noise

---

# 15. Typography Rules

Typography must feel premium and readable.

Rules:

* strong hierarchy
* large readable titles
* comfortable body text
* excellent mobile readability

Avoid:

* too many font families
* decorative fonts
* tiny text

Use clean professional typography.

---

# 16. Button Rules

Buttons must feel obvious.

Rules:

Primary CTA:
strong and clear

Secondary CTA:
minimal and subtle

Danger:
remove item only

Never use too many button styles.

Visual hierarchy matters.

---

# 17. Empty State Rules

Empty states must guide action.

Never leave blank screens.

Example:

Aucun plat disponible

Veuillez revenir plus tard.

or

Votre panier est vide

Ajoutez vos plats préférés pour continuer.

Good UX always guides.

---

# 18. Loading UX Rules

Loading must feel smooth.

Use:

* skeleton loading
* smooth transitions
* visual feedback

Avoid:

* flashing UI
* broken layout jumps
* unclear waiting states

Perceived speed matters.

---

# 19. Offline UX Rules

Since PWA supports offline:

If offline:

Show clear message:

Connexion limitée

Certaines fonctionnalités peuvent être indisponibles.

Do not silently fail.

---

# 20. Final UX Rule

Every action must answer:

“Does this help the customer order faster?”

If not:

remove it.

Good UX is reduction,
not addition.
