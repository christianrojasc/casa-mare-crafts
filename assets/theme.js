/* Casa Mare Crafts — theme.js
   Minimal progressive-enhancement behaviors. Sections can attach their own. */
(function () {
  'use strict';

  // Mobile nav toggle
  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('[data-nav-toggle]');
    if (!toggle) return;
    const nav = document.getElementById(toggle.getAttribute('aria-controls'));
    if (!nav) return;
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });

  // Quantity steppers
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-qty-step]');
    if (!btn) return;
    const input = btn.parentElement.querySelector('input[type="number"]');
    if (!input) return;
    const step = parseInt(btn.dataset.qtyStep, 10) || 1;
    const min = parseInt(input.min || '1', 10);
    const next = Math.max(min, (parseInt(input.value, 10) || min) + step);
    input.value = next;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });

  // Product gallery thumbnails
  document.addEventListener('click', function (e) {
    const thumb = e.target.closest('[data-thumb]');
    if (!thumb) return;
    const gallery = thumb.closest('[data-gallery]');
    if (!gallery) return;
    const main = gallery.querySelector('[data-main-image]');
    const src = thumb.dataset.src;
    const alt = thumb.dataset.alt || '';
    if (main && src) {
      main.src = src;
      main.alt = alt;
    }
    gallery.querySelectorAll('[data-thumb]').forEach(function (t) { t.setAttribute('aria-current', 'false'); });
    thumb.setAttribute('aria-current', 'true');
  });
})();
