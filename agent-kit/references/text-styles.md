# Onsko Beauty — Text Styles Reference

Extracted from: https://www.wix.com/demone2/onsko

---

## Note on `spx` (Scaled Pixels)

Values listed as `spx` are a Wix-internal responsive unit — not valid CSS. They scale linearly with viewport width based on a 1280px reference, with a minimum floor (typically 12px).

To convert `spx` to standard CSS:

1. **Divide by 1280** to get the `vw` multiplier: `28spx` → `28 / 1280 = 2.1875vw`
2. **Use `clamp()`** for a fluid size with min/max bounds:
   ```css
   font-size: clamp(12px, 2.19vw, 28px);
   ```
3. Or replicate the exact Wix formula:
   ```css
   font-size: max(12px, calc(0.021875 * 100vw));
   ```

Common conversions:

| spx | vw | clamp() |
|-----|-----|---------|
| 18spx | 1.41vw | `clamp(12px, 1.41vw, 18px)` |
| 20spx | 1.56vw | `clamp(12px, 1.56vw, 20px)` |
| 24spx | 1.88vw | `clamp(12px, 1.88vw, 24px)` |
| 28spx | 2.19vw | `clamp(12px, 2.19vw, 28px)` |
| 46.667spx | 3.65vw | `clamp(12px, 3.65vw, 47px)` |
| 50spx | 3.91vw | `clamp(12px, 3.91vw, 50px)` |
| 55spx | 4.30vw | `clamp(12px, 4.30vw, 55px)` |

---

## Fonts Used

| Font Name | Wix Slug | Type | Source |
|-----------|----------|------|--------|
| Poppins SemiBold | `poppins-semibold,poppins,sans-serif` | Sans-serif | Google Fonts (free) |
| Poppins ExtraLight | `poppins-extralight,poppins,sans-serif` | Sans-serif | Google Fonts (free) |
| Kepler W03 Light Scd Cp | `kepler-w03-light-scd-cp,serif` | Serif | Licensed (Monotype/Adobe) |
| DIN Next W01 Light | `din-next-w01-light,sans-serif` | Sans-serif | Licensed (Monotype) |

### Wix-to-Google-Fonts Mapping

Wix registers Poppins weights under custom family names. Here's what they actually are:

| Wix Family Name | Real Font | Google Fonts Weight |
|-----------------|-----------|---------------------|
| `poppins-semibold` | Poppins SemiBold | `wght@600` |
| `poppins-extralight` | Poppins ExtraLight | `wght@200` |
| `poppins` | Poppins Regular / Bold | `wght@400;700` |

### How to Import in CSS

**Poppins** — load from Google Fonts with the weights used on the site:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

Or via CSS `@import`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;0,700;1,400;1,700&display=swap');
```

Then use in CSS matching the Wix slugs:

```css
/* poppins-semibold → Poppins weight 600 */
font-family: 'Poppins', sans-serif;
font-weight: 600;

/* poppins-extralight → Poppins weight 200 */
font-family: 'Poppins', sans-serif;
font-weight: 200;
```

**Kepler W03 Light Scd Cp** — licensed font, not freely available. Wix serves it from its CDN for sites using it. Options:

- Purchase from Monotype/Adobe Fonts
- Or use as a Wix-hosted `@font-face` (only works on Wix domains):
  ```css
  @font-face {
    font-family: 'kepler-w03-light-scd-cp';
    font-style: normal;
    font-weight: 400;
    src: url('https://static.parastorage.com/fonts/v2/19f6e474-15ce-4e6a-baee-1511a65fe78e/v1/kepler-w03-light-scd-cp.woff2') format('woff2');
    font-display: swap;
  }
  ```
- Free alternative: **Libre Baskerville** or **Playfair Display** (similar serif feel)

**DIN Next W01 Light** — licensed font. Options:

- Purchase from Monotype
- Or use as a Wix-hosted `@font-face` (only works on Wix domains):
  ```css
  @font-face {
    font-family: 'din-next-w01-light';
    font-style: normal;
    font-weight: 400;
    src: url('https://static.parastorage.com/fonts/v2/eca8b0cd-45d8-43cf-aee7-ca462bc5497c/v1/din-next-w01-light.woff2') format('woff2');
    font-display: swap;
  }
  ```
- Free alternative: **Inter Light** or **Source Sans 3 Light** (similar clean sans-serif)

---

## Color Palette (Site Theme)

### Core Colors

| Role | RGB | Hex | Usage |
|------|-----|-----|-------|
| White | 255,255,255 | `#FFFFFF` | Backgrounds, light text |
| Off-White / Cream | 242,240,235 | `#F2F0EB` | Section backgrounds, hero text |
| Light Gray | 238,238,238 | `#EEEEEE` | Page background, cards, mobile text |
| Medium Warm Gray | 181,179,175 | `#B5B3AF` | Borders, subtle elements |
| Mid Gray | 128,127,124 | `#807F7C` | Secondary text |
| Dark Gray | 82,84,82 | `#525452` | Body text |
| Near-Black | 43,49,47 | `#2B312F` | Primary text, dark backgrounds |

### Brand Greens

| Role | RGB | Hex | Usage |
|------|-----|-----|-------|
| Olive Green | 98,112,35 | `#627023` | Accent, buttons, links, icons |
| Dark Olive | 84,90,57 | `#545A39` | Hover states |
| Muted Sage | 128,151,142 | `#80978E` | Secondary elements |
| Forest Green | 80,108,97 | `#506C61` | Mid-tone accents |
| Deep Teal | 45,81,67 | `#2D5143` | Headings, emphasis text |
| Dark Teal | 31,69,55 | `#1F4537` | Dark accents |
| Darkest Green | 13,49,36 | `#0D3124` | Deepest accent |

### Accent Colors

| Role | RGB | Hex | Usage |
|------|-----|-----|-------|
| Lime / Yellow-Green | 225,248,97 | `#E1F861` | Highlight accent, hero background |
| Blush / Rose | 221,191,183 | `#DDBFB7` | Card backgrounds, soft accent |
| Burnt Orange | 238,119,52 | `#EE7734` | Accent |
| Deep Orange | 234,87,12 | `#EA570C` | CTA / accent |
| Darker Orange | 210,77,10 | `#D24D0A` | Hover |
| Darkest Orange | 174,58,0 | `#AE3A00` | Active |

---

## Wix Font Presets (font_0 – font_10)

| Preset | Shorthand | Font Family | Size | Line Height | Weight |
|--------|-----------|-------------|------|-------------|--------|
| `font_0` (Title) | Title | Poppins SemiBold | 80px (scaled) | 1em | normal |
| `font_1` (Menu) | Menu | DIN Next W01 Light | 16px | 1.4em | normal |
| `font_2` (Page Title) | Page Title | Poppins SemiBold | 42px (scaled) | 1.1em | normal |
| `font_3` (Heading XL) | Heading XL | Kepler W03 Light Scd Cp | 42px (scaled) | 1em | normal |
| `font_4` (Heading L) | Heading L | Kepler W03 Light Scd Cp | 34px (scaled) | 1.3em | normal |
| `font_5` (Heading M) | Heading M | Poppins SemiBold | 30px | 1.3em | normal |
| `font_6` (Heading S) | Heading S | Poppins SemiBold | 20px | 1.4em | normal |
| `font_7` (Body L) | Body L | Poppins SemiBold | 16px | 1.6em | normal |
| `font_8` (Body M) | Body M | Poppins ExtraLight | 14px | 1.6em | bold |
| `font_9` (Body S) | Body S | Poppins ExtraLight | 14px | 1.6em | bold |
| `font_10` (Body XS) | Body XS | DIN Next W01 Light | 12px | 1.4em | normal |

---

## Text Styles by Element (from homepage CSS)

### Logo — "onsko"

- **Font**: Poppins, sans-serif
- **Size**: 32px
- **Weight**: 600
- **Color**: `rgb(45, 81, 67)` / `#2D5143`
- **Letter Spacing**: -0.96px

### Navigation Menu — "home", "shop", "about", "blog"

- **Font**: Poppins, sans-serif
- **Size**: 16px (13px on mobile ≤600px)
- **Weight**: 500
- **Color**: `#2D5143` (active: `#AE3A00`)

### Header Actions — "log in", "Search"

- **Font**: Poppins, sans-serif
- **Size**: 16px
- **Weight**: 500
- **Color**: `var(--text-secondary)`

### Hero Headline — "shine on"

- **Font**: Poppins, sans-serif
- **Size**: `clamp(12px, 6.3vw, 120px)`
- **Weight**: 600
- **Line Height**: 1
- **Letter Spacing**: -0.03em
- **Color**: `#F2F0EB`

### Hero Subtitle — "beauty that reflects your spirit"

- **Font**: Kepler W03 Light Scd Cp, serif
- **Size**: `clamp(12px, 3.19vw, 64px)`
- **Weight**: 400
- **Line Height**: 1.3
- **Color**: `#F2F0EB`

### Hero CTA Button — "shop now"

- **Font**: Poppins SemiBold, sans-serif
- **Size**: 20px
- **Weight**: 600
- **Color**: `#F2F0EB`
- **Border**: 2px solid `rgba(255, 255, 255, 0.8)`
- **Background**: transparent

### Section Titles — "best sellers", "shop by category"

- **Font**: Poppins, sans-serif
- **Size**: `clamp(12px, 2.19vw, 45px)` (best sellers) / `clamp(12px, 2.19vw, 64px)` (shop by category)
- **Weight**: 600
- **Color**: `#2D5143`
- **Mobile (≤768px)**: `clamp(26px, 5vw, 32px)` for best sellers

### View More Link

- **Font**: Poppins, sans-serif
- **Size**: 20px (14px on mobile ≤768px)
- **Weight**: 600
- **Color**: `var(--text-primary)`
- **Border**: 2px solid `var(--border)`
- **Border Radius**: 8px

### Best Seller Badge

- **Font**: Poppins ExtraLight, sans-serif
- **Size**: 12px
- **Weight**: 400
- **Letter Spacing**: 0.02em
- **Color**: `var(--text-primary)`
- **Background**: `#bdd8f1`

### Banner Heading — "effortless beauty, timeless charm."

- **Font**: Poppins, sans-serif
- **Size**: `clamp(12px, 3.28vw, 64px)`
- **Weight**: 600
- **Line Height**: 1.1
- **Letter Spacing**: -0.03em
- **Color**: `#2B312F`

### Banner Subheading — "new arrivals now in stock"

- **Font**: Kepler W03 Light Scd Cp, serif
- **Size**: `clamp(12px, 3.28vw, 64px)`
- **Weight**: 400
- **Line Height**: 1
- **Color**: `#2B312F`

### Banner Button — "shop now"

- **Font**: Poppins, sans-serif
- **Size**: 20px
- **Weight**: 600
- **Color**: `#2B312F`
- **Border**: 2px solid `#2B312F`
- **Text Transform**: lowercase
- **Letter Spacing**: 0.02em
- **Background**: transparent

### Shipping Marquee — "free shipping on orders over $50"

- **Font**: Poppins, sans-serif
- **Size**: `clamp(12px, 3.28vw, 24px)`
- **Weight**: 600
- **Color**: `var(--text-primary)`
- **Background**: `#d5e955`

### Category Card Labels — "face", "body", "hair"

- **Font**: Poppins, sans-serif
- **Size**: `clamp(12px, 3.56vw, 64px)`
- **Weight**: 600
- **Color**: `#2D5143`
- **Border**: 2px solid `#2D5143`
- **Border Radius**: `var(--radius-lg)`

### Shop Now Button (secondary) — category section

- **Font**: Poppins, sans-serif
- **Size**: 16px
- **Weight**: 200
- **Color**: `#2B312F`
- **Border**: 2px solid `#2B312F`
- **Text Transform**: lowercase
- **Letter Spacing**: 0.02em
- **Background**: transparent

### Our Story Heading — "our story"

- **Font**: Poppins, sans-serif
- **Size**: `clamp(12px, 4vw, 64px)`
- **Weight**: 600
- **Text Transform**: lowercase
- **Letter Spacing**: 0.02em
- **Color**: `#2D5143`

### Our Story Description — "born from a passion for beauty rituals…"

- **Font**: Kepler W03 Light Scd Cp, serif
- **Size**: `clamp(12px, 5vw, 90px)`
- **Weight**: 400
- **Line Height**: 1
- **Color**: `#2D5143`

### Our Story Tagline — "for every body, anywhere"

- **Font**: Poppins, sans-serif
- **Size**: 14px
- **Weight**: 200
- **Letter Spacing**: 0.05em
- **Color**: `#2D5143`

### Instagram Heading — "Follow Us on Instagram"

- **Font**: Poppins, sans-serif
- **Size**: `clamp(12px, 3vw, 64px)`
- **Weight**: 600
- **Color**: `#2D5143`

### Instagram Subtitle — "#onsko_beauty"

- **Font**: Kepler W03 Light Scd Cp, serif
- **Size**: `clamp(12px, 3vw, 50px)`
- **Weight**: 200
- **Color**: `var(--text-secondary)`

### Cart Badge

- **Font**: Poppins, sans-serif
- **Size**: 12px
- **Weight**: 700
- **Color**: `#fff`
- **Background**: `var(--success)`

---

## Letter Spacing Values Used

| Value | Context |
|-------|---------|
| `-0.96px` | Logo |
| `-0.03em` | Hero headline, banner heading |
| `0.02em` | Buttons, badges, section headings |
| `0.05em` | Our story tagline |

---

## Summary of Key Pairings

| Context | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Logo | Poppins | 32px | 600 | `#2D5143` |
| Hero headline | Poppins | clamp 6.3vw (max 120px) | 600 | `#F2F0EB` |
| Hero subtitle | Kepler (serif) | clamp 3.19vw (max 64px) | 400 | `#F2F0EB` |
| Hero CTA | Poppins SemiBold | 20px | 600 | `#F2F0EB` |
| Section title | Poppins | clamp 2.19vw (max 45–64px) | 600 | `#2D5143` |
| Banner heading | Poppins | clamp 3.28vw (max 64px) | 600 | `#2B312F` |
| Banner subheading | Kepler (serif) | clamp 3.28vw (max 64px) | 400 | `#2B312F` |
| Banner/hero button | Poppins | 20px | 600 | on-context, transparent bg |
| Shipping marquee | Poppins | clamp 3.28vw (max 24px) | 600 | `var(--text-primary)` |
| Category labels | Poppins | clamp 3.56vw (max 64px) | 600 | `#2D5143` |
| Our Story heading | Poppins | clamp 4vw (max 64px) | 600 | `#2D5143` |
| Our Story body | Kepler (serif) | clamp 5vw (max 90px) | 400 | `#2D5143` |
| Our Story tagline | Poppins | 14px | 200 | `#2D5143` |
| Instagram heading | Poppins | clamp 3vw (max 64px) | 600 | `#2D5143` |
| Instagram subtitle | Kepler (serif) | clamp 3vw (max 50px) | 200 | `var(--text-secondary)` |
| Nav links | Poppins | 16px | 500 | `#2D5143` |
| Secondary button | Poppins | 16px | 200 | `#2B312F` |
| View more | Poppins | 20px | 600 | `var(--text-primary)` |
| Badge | Poppins ExtraLight | 12px | 400 | `var(--text-primary)` |
| Header actions | Poppins | 16px | 500 | `var(--text-secondary)` |
