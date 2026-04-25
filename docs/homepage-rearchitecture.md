# Casa Mare Homepage Rearchitecture

This homepage is rebuilt as a slow editorial sequence rather than a stacked commerce landing page. The direction follows the brand kit: warm, natural, premium, and coastal without falling into literal seaside motifs or souvenir-like cues.

## Architecture

1. **Lookbook hero**  
   Opens with a full-bleed image, one italic line, an oversized Playfair headline, and a small scroll cue. There are no calls to action because the first job is atmosphere: Casa Mare should feel collected before it asks for a click.

2. **Mosaic grid**  
   Replaces the conventional collection row with an asymmetric five-tile layout. It gives the merchant a shoppable surface while preserving the feeling of an editorial contents page.

3. **Editorial spread**  
   Adds a magazine-style pause: pull quote, portrait image, and caption. This section translates brand values into a visual rhythm before product appears.

4. **Horizontal scroll shelf**  
   Uses native CSS scroll-snap to show styled vignettes without JavaScript carousel behavior. The scroll interaction feels like browsing a shelf or tabletop, not advancing a slider.

5. **Process strip**  
   A restrained three-column craft statement: sourced, shaped, sun-cured. It earns trust without overexplaining or using decorative icons.

6. **Featured collection**  
   The existing product section remains, but it now arrives after the editorial setup. Products feel like the result of the brand world rather than the first thing on the page.

7. **Marquee mark**  
   A typographic transition using oversized italic Playfair words. It is intentionally simple, palette-bound, and pure CSS, with hover pause and reduced-motion support.

8. **Second editorial spread**  
   Repeats the magazine spread in reverse to slow the page after commerce and keep the experience from collapsing into a standard store grid.

9. **Founder note**  
   Replaces the newsletter-style strip with a small portrait, italic note, and signature. It gives the brand a human voice while staying intimate and restrained.

10. **Featured journal**  
    Ends with one story instead of a three-up feed. This keeps the page editorial and encourages deeper reading without adding visual clutter.

## Implementation Notes

- All new sections are Shopify Liquid with valid `{% schema %}` blocks and merchant-editable settings.
- Default section copy uses `{% render 'i18n-default' %}` so English defaults can fall back to locale entries when the merchant has not customized them.
- CSS additions are isolated to the new editorial homepage classes in `assets/theme.css`.
- The palette stays within the approved Casa Mare colors: deep navy, sand, washed white, sea glass, driftwood, and clay.
- Typography continues to use the theme font settings for Playfair Display and Inter through Shopify `font_face`.
- Images use sand or washed white containers, with optional 1px navy-toned borders instead of shadows.
- Motion is limited to CSS scroll reveal and the required pure CSS marquee, with reduced-motion handling.
