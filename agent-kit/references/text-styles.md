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

## Text Styles by Element

### Hero Section — "shine on"

- **Font**: Poppins SemiBold
- **Size**: 55spx (desktop), 50spx (tablet) — roughly 55px / 50px at default scale
- **Line Height**: inherited
- **Color**: `#F2F0EB` (cream, `--color_16`)
- **Text Decoration**: none
- **Text Shadow**: none

### Hero Subtitle — "beauty that reflects your spirit"

- **Font**: Poppins SemiBold
- **Size**: 28spx (desktop), 27spx (tablet)
- **Line Height**: inherited
- **Color**: `#F2F0EB` (cream, `--color_16`)

### Page Heading — "effortless beauty,"

- **Element**: `<h2 class="font_2">`
- **Font**: Poppins SemiBold
- **Size**: 42px (scaled via `--theme-spx-ratio`)
- **Line Height**: 1.1em
- **Color**: `#2B312F` (near-black, `--color_15`) — switches to `#EEEEEE` on mobile

### Page Subheading — "new arrivals now in stock"

- **Element**: `<h3 class="font_3">`
- **Font**: Kepler W03 Light Scd Cp (serif)
- **Size**: 42px (scaled via `--theme-spx-ratio`)
- **Line Height**: 1em
- **Color**: `#2B312F` (near-black, `--color_15`) — switches to `#EEEEEE` on mobile

### Section Headers — "best sellers", "shop by category", "our story"

- **Font**: Poppins SemiBold
- **Size**: ~28spx (desktop), responsive-scaled on smaller viewports
- **Line Height**: 1.3em
- **Color**: `#2D5143` (deep teal, `--color_33`)

### Navigation Menu Items — "home", "shop", "about", "blog"

- **Font**: Poppins SemiBold
- **Size**: varies per component — typically matches `font_5` (30px) or `font_7` (16px)
- **Line Height**: 1.3em
- **Color**: `#2D5143` (deep teal, `--color_33`)
- **Letter Spacing**: 0em
- **Text Transform**: none
- **Separator between items**: 61.8% width line

### Category Navigation — "body", "face", "hair"

- **Font**: Poppins SemiBold
- **Size**: 18spx–20spx
- **Color**: `#2D5143` (deep teal)

### Product Names — "radiant renewal serum", etc.

- **Element**: `<p>` with typography class `runningText`, priority `primary`
- **Font**: Poppins ExtraLight (via `--font_8` / Body M)
- **Size**: 14px
- **Line Height**: 1.6em
- **Weight**: bold
- **Color**: `#2B312F` (near-black, `--color_15`)

### Product Prices — "$27.00", "$25.00", etc.

- **Font**: Poppins ExtraLight
- **Size**: 14px
- **Line Height**: 1.6em
- **Weight**: bold
- **Color**: `#2B312F` (near-black, `--color_15`)

### Buttons — "shop now", "view more", "subscribe"

- **Font**: Poppins ExtraLight
- **Size**: 16px
- **Line Height**: 16px
- **Weight**: normal
- **Color (text)**: `#EEEEEE` (light, `--color_50` / `--color_11`) on primary buttons
- **Background (primary)**: `#627023` (olive green, `--color_48`)
- **Background (primary hover)**: `#627023` (same, `--color_51`)
- **Background (secondary)**: `#EEEEEE` (`--color_57`)
- **Border (primary)**: `#627023` (`--color_49`)
- **Text Decoration**: none

### Promotional Banner — "free shipping on orders over $50"

- **Font**: Poppins ExtraLight
- **Size**: ~14px
- **Weight**: bold
- **Line Height**: 1.6em
- **Color**: dark on light background

### Body / Description Text — "born from a passion for beauty rituals…"

- **Font**: Poppins ExtraLight
- **Size**: 14px
- **Line Height**: 1.6em
- **Weight**: bold
- **Color**: `#2D5143` (deep teal) or `#2B312F` (near-black)

### Footer Text — "© 2035 by onsko", address, links

- **Font**: Poppins ExtraLight or DIN Next W01 Light
- **Size**: 12px–14px
- **Line Height**: 1.4em–1.6em
- **Color**: varies by section background

### Newsletter Section — "subscribe to our newsletter"

- **Font**: Poppins SemiBold (heading) / Poppins ExtraLight (body)
- **Color**: `#2D5143` (deep teal)

---

## Letter Spacing Values Used

| Value | Context |
|-------|---------|
| `0em` / `0px` | Default for most text |
| `-0.03em` | Tight headings |
| `-0.04em` | Extra-tight display |
| `1px` | Gallery social elements |
| `5px` | Spaced-out labels (rare) |

---

## Summary of Key Pairings

| Context | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Hero headline | Poppins SemiBold | 50–55px | normal | `#F2F0EB` cream |
| Hero subtitle | Poppins SemiBold | 27–28px | normal | `#F2F0EB` cream |
| Page heading (h2) | Poppins SemiBold | 42px | normal | `#2B312F` / `#EEEEEE` mobile |
| Page subheading (h3) | Kepler Light (serif) | 42px | normal | `#2B312F` / `#EEEEEE` mobile |
| Section header | Poppins SemiBold | 28px | normal | `#2D5143` deep teal |
| Heading small | Poppins SemiBold | 20px | normal | `#2D5143` deep teal |
| Nav menu | Poppins SemiBold | 16–30px | normal | `#2D5143` deep teal |
| Body text | Poppins ExtraLight | 14px | bold | `#2B312F` or `#2D5143` |
| Product name | Poppins ExtraLight | 14px | bold | `#2B312F` |
| Product price | Poppins ExtraLight | 14px | bold | `#2B312F` |
| Button label | Poppins ExtraLight | 16px | normal | `#EEEEEE` on `#627023` bg |
| Small text / captions | DIN Next Light | 12px | normal | varies |
| Menu items | DIN Next Light | 16px | normal | `#2B312F` |
