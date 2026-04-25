# Theme CSS Audit

## Findings

- Homepage spacing was split between `assets/theme.css` and inline `style` attributes inside section Liquid files, which made section rhythm harder to tune consistently.
- Repeated section heading patterns appeared in collection, featured products, story, testimonials, and newsletter sections without a shared class.
- Background changes between washed white, sand, and navy were visually correct but abrupt. The theme needed subtle transition treatment while preserving the existing palette.
- Homepage cards, media crops, testimonials, and newsletter copy had one-off layout values that duplicated design decisions already present in the stylesheet.

## Refactor Included

- Added a clean spacing scale in `assets/theme.css` using `--space-*` tokens and a shared `--page-gutter`.
- Introduced reusable section primitives: `.section-header`, `.section-grid`, `.section-actions`, and `.media-cover`.
- Added subtle section transition treatment through sand gradients, dark-section inset dividers, and light-section separators.
- Moved homepage inline styles into dedicated component classes for collection cards, featured grids, image-with-text layouts, testimonials, and newsletter content.
- Added shared alternative hero primitives under `.hero-alt` so the three new hero sections can share the same spacing, typography, and button rhythm.

## Follow-Up Proposal

- Continue migrating remaining product, cart, page, blog, footer, and search inline styles into the same class-based system.
- Keep palette and typography values in Shopify settings, with `assets/theme.css` owning layout scale, components, and responsive behavior.
- Group future CSS by primitive, section component, and page-specific pattern so merchants can change content in the Theme Editor without style drift.
