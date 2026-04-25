# Casa Mare Crafts — Shopify Theme

A custom Online Store 2.0 Liquid theme for **Casa Mare Crafts**
— handmade coastal pieces for warm, lived-in beach homes.

## Brand System

| Token | Value | Use |
|---|---|---|
| Deep Navy | `#102A43` | Headings, buttons, footer, logo |
| Washed White | `#F7F3EC` | Page background (softer than pure white) |
| Sand Beige | `#D8C3A5` | Sections, product cards, packaging feel |
| Sea Glass Green | `#9DBBAE` | Accent, eyebrow text, italic script lines |
| Driftwood Brown | `#8A6F58` | Body text, muted text |
| Sun-Washed Clay | `#C98F6B` | Sparingly — sale badges, hovers, warmth |

Type stack: **Playfair Display** (headings + italic accents, default) · **Inter** (body). The brand kit's first-choice heading font is Cormorant Garamond — if your Shopify font library includes it, swap via Theme Editor → Typography. Both sit under "boutique serif with soft curves" per the brand kit.

## Folder Structure

```
casa-mare-crafts/
├── assets/             ← theme.css, theme.js, logo-*.png (primary / stacked / stamp / icon / wordmark)
├── brand/              ← brand_kit.md (brand bible for reference)
├── config/             ← settings_schema.json, settings_data.json
├── layout/             ← theme.liquid (document shell)
├── locales/            ← en.default.json
├── sections/           ← hero, header, footer, collection-list, featured-collection, image-with-text, testimonials, newsletter, announcement-bar, main-* templates
├── snippets/           ← product-card, price, meta-tags
└── templates/          ← index, product, collection, cart, page, search, 404, blog, article, list-collections, gift_card, password, robots
```

## Brand assets bundled

All five transparent-background logo PNGs are already in `assets/`:

- `logo-primary.png` — full circular stamp + wordmark (default header logo)
- `logo-stacked.png` — "CASA MARE / CRAFTS" stacked wordmark
- `logo-wordmark.png` — horizontal wordmark alone
- `logo-icon.png` — minimal wave icon mark (good for favicon)
- `logo-stamp.png` — circular stamp "Casa Mare · Handmade Coastal Goods · Est. 2026" (used in footer + password page)

In Theme Settings, you can upload an override for the Primary or Inverse logo. If left empty, the theme falls back to `logo-primary.png`.

## Prerequisites

- Node.js 18+
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install) (`npm i -g @shopify/cli @shopify/theme`)
- A Shopify store (dev store is fine)

## Preview locally

```bash
cd ~/Desktop/casa-mare-crafts
shopify theme dev --store your-store-name.myshopify.com
```

## Push to a store

Upload as an **unpublished** theme (safe to preview before going live):

```bash
shopify theme push --unpublished --store your-store-name.myshopify.com
```

To push updates to an already-uploaded theme:

```bash
shopify theme push --theme <theme-id>
```

## Customize in the Theme Editor

Once uploaded, in Shopify admin → **Online Store → Themes → Customize**:

- **Theme settings → Logo** — upload a different primary / inverse logo, or adjust width
- **Theme settings → Colors** — tweak any of the six palette tokens
- **Theme settings → Favicon** — upload `logo-icon.png` or `logo-stamp.png`
- **Sections** — rearrange/disable hero, collection-list, featured-collection, story, testimonials, newsletter
- **Header / Footer** — edit menu links, newsletter copy, social URLs

## Homepage composition (default)

1. **Hero** — sand background, italic "By the sea" accent + main tagline + two CTAs
2. **Collection list** — three tiles on sand background (Wall & Shelf, Tabletop, Coastal Accents)
3. **Featured collection** — 6 products, View-all button
4. **Image with text** — "Made for homes that feel lived-in" on navy
5. **Testimonials** — 3 customer voices on sand
6. **Newsletter** — navy strip

Change in the editor or edit `templates/index.json`.

## Brand voice reminders

From `brand/brand_kit.md`:

- **Use:** handmade, coastal, natural, warm, lived-in, textured, sun-washed, timeless, artisan-made, by the sea, slow living, soft neutrals
- **Avoid:** nautical, tropical, shell-tastic, beach vibes, mermaid, vacation mode, cute crafts

Never cartoon-beach the theme. Textures and neutrals do the work.

## Known stubs / next steps

- Add collection images for the Shop-by-collection tiles
- Add real product photography to populate the featured collection
- Customer account pages (`templates/customers/*`) not included — enable Shopify's **new customer accounts** (hosted) in admin, which handles login/register without theme templates
- Consider a subtle lifestyle photo (Mediterranean interior, linen + wood) as a hero background
