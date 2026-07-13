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
  bg-story: '#a0c8ff'
  header-transparent: 'rgba(238, 238, 238, 0)'

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
  accent: '#bb5538'
  accent-hover: '#a44c31'
  cta: '#f5c542'
  cta-hover: '#e0b135'
  cta-text: '#1a1a1a'

  # Status
  success: '#437346'
  success-bg: '#e8eee9'
  error: '#b33838'
  error-bg: '#f7ebeb'

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
    letterSpacing: -0.01em
  section-title-sm:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: 600
    letterSpacing: -0.01em
  page-title:
    fontFamily: Poppins
    fontSize: clamp(32px, 5vw, 48px)
    fontWeight: 600
    lineHeight: 1.1
  product-name:
    fontFamily: Poppins
    fontSize: clamp(28px, 4vw, 40px)
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
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
  story-heading:
    fontFamily: Poppins
    fontSize: clamp(12px, 4vw, 64px)
    fontWeight: 600
    letterSpacing: 0.02em
  story-body:
    fontFamily: kepler-w03-light-scd-cp
    fontSize: clamp(12px, 5vw, 90px)
    fontWeight: 400
    lineHeight: 1
  instagram-heading:
    fontFamily: Poppins
    fontSize: clamp(12px, 3vw, 64px)
    fontWeight: 600
  instagram-subtitle:
    fontFamily: kepler-w03-light-scd-cp
    fontSize: clamp(12px, 3vw, 50px)
    fontWeight: 200
  category-label:
    fontFamily: Poppins
    fontSize: clamp(12px, 3.56vw, 64px)
    fontWeight: 600
  marquee:
    fontFamily: Poppins
    fontSize: clamp(12px, 3.28vw, 24px)
    fontWeight: 600
  body-base:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Poppins
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 200
    lineHeight: 1.6
  body-detail:
    fontFamily: Poppins
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.8
  nav-link:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: 500
  mobile-nav:
    fontFamily: Poppins
    fontSize: 22px
    fontWeight: 600
  mobile-logo:
    fontFamily: Poppins
    fontSize: 28px
    fontWeight: 600
    letterSpacing: -0.96px
  button-text:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: 600
  button-text-bold:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: 700
  caption:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: 600
  caption-bold:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: 700
  label:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: 600
    letterSpacing: 0.08em
  micro:
    fontFamily: Poppins
    fontSize: 11px
    fontWeight: 600
  micro-bold:
    fontFamily: Poppins
    fontSize: 11px
    fontWeight: 700
  small:
    fontFamily: Poppins
    fontSize: 13px
    fontWeight: 500
  social-icon:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: 400
  price:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: 700
  price-strikethrough:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: 400
  summary-total:
    fontFamily: Poppins
    fontSize: 22px
    fontWeight: 700
  policy-heading:
    fontFamily: kepler-w03-light-scd-cp
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
  policy-title:
    fontFamily: Poppins
    fontSize: 28px
    fontWeight: 600
  footer-heading:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: 600
    letterSpacing: 0.02em
  footer-body:
    fontFamily: din-next-w01-light
    fontSize: 13px
    fontWeight: 400
  footer-logo:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: 600
  footer-logo-icon:
    fontFamily: Poppins
    fontSize: 52px
    fontWeight: 600
  logo:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: 600
    letterSpacing: -0.96px
  tagline:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 200
    letterSpacing: 0.05em
  empty-state-title:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: 600
  empty-state-icon:
    fontSize: 64px
  filter-title:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 700
  badge-font:
    fontFamily: poppins-extralight, poppins, sans-serif
    fontSize: 12px
    fontWeight: 400
    letterSpacing: 0.02em
  hero-headline-mobile:
    fontFamily: Poppins
    fontSize: clamp(12px, 12.27vw, 92px)
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.03em
  hero-subtitle-mobile:
    fontFamily: kepler-w03-light-scd-cp
    fontSize: clamp(12px, 6.67vw, 50px)
    fontWeight: 400
    lineHeight: 1.3
  section-title-mobile:
    fontFamily: Poppins
    fontSize: clamp(12px, 5vw, 32px)
    fontWeight: 600
  story-heading-mobile:
    fontFamily: Poppins
    fontSize: clamp(12px, 5.27vw, 32px)
    fontWeight: 600
    letterSpacing: 0.02em
  story-body-mobile:
    fontFamily: kepler-w03-light-scd-cp
    fontSize: clamp(12px, 8.23vw, 64px)
    fontWeight: 400
    lineHeight: 1
  filter-section-title:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: 700
    letterSpacing: 0.01em
  empty-state-icon-lg:
    fontSize: 80px
  cta-hero:
    fontFamily: poppins-semibold, Poppins, sans-serif
    fontSize: 20px
    fontWeight: 600
  sku:
    fontFamily: Poppins
    fontSize: 11px
    fontWeight: 400
    letterSpacing: 0.04em

spacing:
  2xs: 2px
  3xs: 3px
  4xs: 4px
  xs: 6px
  sm: 8px
  base: 10px
  md: 12px
  sm-plus: 14px
  lg: 16px
  info-section: 18px
  xl: 20px
  2xl: 24px
  header-gap: 50px
  section-sides: 25px
  lg-plus: 28px
  xl-plus: 29px
  xl-2: 30px
  3xl: 32px
  xl-3: 36px
  4xl: 40px
  5xl: 48px
  6xl: 64px
  7xl: 80px
  8xl: 100px
  page-padding-desktop: 48px
  page-padding-tablet: 24px
  page-padding-mobile: 16px
  section-gap: 64px
  card-gap: 24px

rounded:
  xs: 2px
  sm: 6px
  md: 8px
  md-plus: 10px
  lg: 12px
  xl: 16px
  2xl: 20px
  circle: 50%
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
    textColor: '#ffffff'
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
  smooth:
    duration: 500ms
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
  spin:
    duration: 700ms
    easing: linear
  marquee:
    duration: 20s
    easing: linear

rules:
  max-font-weights: 6
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
- **Story** (`#a0c8ff`) — light blue, "our story" section background

### Brand Colors
- **Brand Green** (`#2D5143`) — deep forest green, used in logos, nav, headings, and the footer
- **Brand Orange** (`#AE3A00`) — burnt orange, header bar and active states
- **Accent** (`#bb5538`) — warm terracotta, primary action color (buttons, links)
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

Font weights in use: **200** (light body, tagline), **400** (regular, serif), **500** (nav links, choice buttons), **600** (headings, buttons), **700** (badges, CTA bold, prices).

## Rounded Corners

All corners follow the scale: `2px` (xs) / `6px` (sm) / `8px` (md) / `10px` (md-plus) / `12px` (lg) / `16px` (xl) / `20px` (2xl, hero/banners) / `50%` (circle, spinners) / `9999px` (pill shapes for header bar, badges).

## Shadows

Green-tinted shadows using `rgba(45, 77, 63, opacity)` at three intensities (sm/md/lg) to match the brand palette.

## Animation Guidelines

- **Micro interactions** — 150ms ease (hover states, color transitions)
- **Standard transitions** — 250ms ease (card transforms, border changes)
- **Entrance animations** — 700–800ms ease-out (hero float-in, slide-up reveals)
- **Scroll-linked** — `animation-timeline: view()` for on-scroll reveals (best sellers, banners)
- **Continuous** — 20s linear for marquee scrolling banners
