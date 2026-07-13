---
# Onsko Beauty — Design System
# A warm, premium beauty brand with rounded edges and natural tones.
# Deep green/orange palette, rounded cards, soft shadows, light blue product backgrounds.

colors:
  # Backgrounds
  bg-primary: '#f9f5f0'
  bg-secondary: '#f0ebe4'
  bg-card: '#ffffff'
  bg-hover: '#f5f0e8'
  bg-product-image: '#c5d8e8'
  bg-header: '#2d4d3f'
  bg-footer: '#2d4d3f'
  bg-mobile-menu: '#f5f3ef'

  # Text
  text-primary: '#1a1a1a'
  text-secondary: '#555555'
  text-muted: '#888888'
  text-inverse: '#ffffff'
  text-on-header: '#ffffff'
  text-dark: '#2B312F'

  # Brand
  brand-green: '#2D5143'
  brand-orange: '#AE3A00'
  hero-text: '#F2F0EB'

  # Accent & CTA
  accent: '#c45c3e'
  accent-hover: '#b05235'
  cta: '#f5c542'
  cta-hover: '#e0b135'
  cta-text: '#1a1a1a'

  # Status
  success: '#5a8a5e'
  error: '#c44040'

  # Borders
  border: '#e0dbd4'
  border-hover: '#ccc6bc'
  border-light: '#ebe7e1'

  # Feature accents
  blue-accent: '#bdd8f1'
  lime: '#d5e955'
  warm-orange: '#e8874a'
  neutral-card: '#e0ddd9'

typography:
  hero-headline:
    fontFamily: Poppins
    fontSize: clamp(12px, 6.3vw, 120px)
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.03em
  hero-subtitle:
    fontFamily: kepler-w03-light-scd-cp
    fontSize: clamp(12px, 3.19vw, 64px)
    fontWeight: 400
    lineHeight: 1.3
  section-title:
    fontFamily: Poppins
    fontSize: clamp(12px, 2.19vw, 45px)
    fontWeight: 600
  page-title:
    fontFamily: Poppins
    fontSize: clamp(32px, 5vw, 48px)
    fontWeight: 600
    lineHeight: 1.1
  banner-heading:
    fontFamily: Poppins
    fontSize: clamp(12px, 3.28vw, 64px)
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.03em
  banner-subtitle:
    fontFamily: kepler-w03-light-scd-cp
    fontSize: clamp(12px, 3.28vw, 64px)
    fontWeight: 400
    lineHeight: 1
  body-base:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 200
    lineHeight: 1.6
  nav-link:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: 500
  button-text:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: 600
  caption:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: 600
  label:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: 600
    letterSpacing: 0.08em
  footer-body:
    fontFamily: din-next-w01-light
    fontSize: 13px
    fontWeight: 400
  logo:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: 600
    letterSpacing: -0.96px

spacing:
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 40px
  5xl: 48px
  6xl: 64px
  page-padding-desktop: 48px
  page-padding-tablet: 24px
  page-padding-mobile: 16px
  section-gap: 64px
  card-gap: 24px
  header-gap: 50px
  section-sides: 25px
  

rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 20px
  full: 9999px

shadows:
  sm: 0 1px 3px rgba(45, 77, 63, 0.06)
  md: 0 4px 12px rgba(45, 77, 63, 0.08)
  lg: 0 12px 32px rgba(45, 77, 63, 0.1)

components:
  product-card:
    backgroundColor: '{colors.bg-card}'
    rounded: '{rounded.lg}'
  product-card-image:
    backgroundColor: '{colors.bg-product-image}'
  product-card-name:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 200
    textColor: '{colors.text-dark}'
  product-card-price:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 200
    textColor: '{colors.text-dark}'
  btn-primary:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.text-inverse}'
    rounded: '{rounded.md}'
  btn-secondary:
    backgroundColor: '{colors.bg-card}'
    textColor: '{colors.text-primary}'
    borderColor: '{colors.border}'
    rounded: '{rounded.md}'
  btn-cta:
    backgroundColor: '{colors.cta}'
    textColor: '{colors.cta-text}'
    rounded: '{rounded.md}'
  btn-ghost:
    backgroundColor: transparent
    textColor: '{colors.text-secondary}'
    borderColor: '{colors.border}'
    rounded: '{rounded.md}'
  site-header-bar:
    backgroundColor: '{colors.brand-orange}'
    rounded: '{rounded.full}'
  category-card:
    backgroundColor: '{colors.neutral-card}'
    rounded: '{rounded.xl}'
  best-seller-badge:
    backgroundColor: '{colors.blue-accent}'
    textColor: '{colors.text-primary}'
  input:
    backgroundColor: '{colors.bg-card}'
    borderColor: '{colors.border}'
    rounded: '{rounded.md}'
  site-footer:
    backgroundColor: '{colors.bg-footer}'
    textColor: '{colors.text-inverse}'

animations:
  fast:
    duration: 150ms
    easing: ease
  base:
    duration: 250ms
    easing: ease
  slow:
    duration: 400ms
    easing: ease
  float-in:
    duration: 700ms
    easing: ease-out
  slide-up:
    duration: 800ms
    easing: ease-out
  cart-flash:
    duration: 400ms
    easing: ease
  mobile-menu:
    duration: 300ms
    easing: ease

rules:
  max-font-weights: 5
  require-contrast-aa: true
---

# Onsko Beauty Design System

## Brand Identity

Onsko is a warm, premium clean beauty brand. The visual language combines **deep forest greens** with **burnt orange** accents, set against **warm cream** backgrounds. The design feels organic, inviting, and modern.

## Color Palette

### Backgrounds
- **Primary** (`#f9f5f0`) — warm cream, main page background
- **Secondary** (`#f0ebe4`) — slightly deeper cream, used for alternating sections and hover states
- **Card** (`#ffffff`) — white, for elevated cards and inputs
- **Product Image** (`#c5d8e8`) — soft blue, product image placeholder backgrounds

### Brand Colors
- **Brand Green** (`#2D5143`) — deep forest green, used in logos, nav, headings, and the footer
- **Brand Orange** (`#AE3A00`) — burnt orange, header bar and active states
- **Accent** (`#c45c3e`) — warm terracotta, primary action color (buttons, links)
- **CTA** (`#f5c542`) — golden yellow, call-to-action buttons

### Feature Accents
- **Blue Accent** (`#bdd8f1`) — soft blue for badges and the "our story" section
- **Lime** (`#d5e955`) — bright lime for the shipping banner and category hover
- **Warm Orange** (`#e8874a`) — category card hover accent

## Typography

Three font families:
1. **Poppins** — primary font for headings, body, navigation, buttons
2. **Kepler W03 Light** — serif accent font for hero subtitles and banner descriptions
3. **DIN Next W01 Light** — small captions in the footer

Font weights in use: **200** (light body), **400** (regular), **500** (nav links), **600** (headings, buttons), **700** (badges, CTA bold).

## Rounded Corners

All corners follow the scale: `6px` (sm) / `8px` (md) / `12px` (lg) / `16px` (xl) / `20px` (2xl, hero/banners) / `9999px` (pill shapes for header bar, badges).

## Shadows

Green-tinted shadows using `rgba(45, 77, 63, opacity)` at three intensities (sm/md/lg) to match the brand palette.

## Animation Guidelines

- **Micro interactions** — 150ms ease (hover states, color transitions)
- **Standard transitions** — 250ms ease (card transforms, border changes)
- **Entrance animations** — 700–800ms ease-out (hero float-in, slide-up reveals)
- **Scroll-linked** — `animation-timeline: view()` for on-scroll reveals (best sellers, banners)
