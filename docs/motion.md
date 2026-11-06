# Motion system

Uses the existing Framer Motion dependency; no new packages. Brand assets, colors and copy are retained.

- Hero elements enter at 65 ms intervals, using 600 ms opacity/16 px translate transitions and cubic-bezier(.22, 1, .36, 1).
- `data-reveal` marks one-time viewport entrances. `data-delay` staggers cards in 60 ms steps. Server HTML remains visible without JavaScript.
- Hover/press feedback is 180–240 ms. Hover transforms require a fine pointer; focus indicators and touch press feedback work independently.
- Mobile navigation expands/collapses in 280 ms. Closed content is inert; Escape returns focus to its toggle. Active links expose `aria-current`. Native anchor scrolling accounts for the sticky header.
- Reduced motion disables entrances, transforms, smooth scrolling and menu interpolation, including live preference changes.
- Infinite hero/technology loops are removed. Technologies wrap into a static responsive list; artwork perspective is desktop-only. No scroll listeners drive artwork or parallax.
- The site has one route and no accordions. No artificial page transition or new expandable content is introduced.

## Validation

Run in a runtime copy excluding tracked `node_modules` and `.next` to avoid committing generated artifacts. Use `npm ci`, `npm run lint`, and `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 npm run build` (the environment proxy requires system CA trust for Google Fonts). Run `npm run start` to check the production output.

Browser checks cover 1440, 390 and 320 px Chromium viewports: responsive overflow, mobile keyboard navigation and Escape, anchor offset, active state, reduced motion, runtime errors, and visible content with JavaScript disabled. Real-device Safari/Firefox and frame-rate profiling are not covered.
