# UI & Component Layout Rules (Mandatory System Directives)

These rules are strictly enforced to prevent visual regressions, border text clipping, layout squishing, and section overlap errors across all web application components.

## 1. Zero Absolute Positioning Near Rounded Corners
- **NEVER** use `absolute top-X left-Y` or `absolute top-X right-Y` on badges, icons, or text inside rounded cards (`rounded-2xl`, `rounded-[2.5rem]`).
- Rounded corner curves (32px-40px radius) slice inward. Elements placed near corners will be clipped by `overflow-hidden`.
- **ALWAYS** keep all badges, headers, body text, and footers strictly inside normal in-flow flex layout (`flex flex-col gap-4`) with explicit padding.

## 2. Explicit Inline Padding for Custom Component Wrappers
- When using custom React wrapper components (e.g. `<SpotlightCard>`), **DO NOT** rely solely on Tailwind `className="p-8"` which can be overridden or ignored by inner flex containers.
- **ALWAYS** set `style={{ padding: "2.5rem", boxSizing: "border-box" }}` directly on container style objects to guarantee 40px+ of inner space on all four sides.

## 3. Card Width & Flex Wrapping Standards
- Cards containing multi-word badges (`PHASE 01 // LIVE NOW`) and footer metrics MUST have a minimum width of `480px - 560px`.
- **NEVER** constrain cards to compressed widths (`<400px`) that cause text truncation against borders.
- **ALWAYS** use `flex flex-col sm:flex-row items-start sm:items-center justify-between` for header and footer rows to allow responsive wrapping without border cutoffs.

## 4. GSAP ScrollTrigger Viewport Boundary Isolation
- When creating horizontal scroll tracks pinned at `100vh`, place section titles stationary **ABOVE** the scroll track container.
- **ALWAYS** add generous section top padding (`pt-32 sm:pt-44`) so pinned bottom HUD bars unpin cleanly above without overlapping trailing section titles.

## 5. Pill Badge Endcap Padding
- For pill capsules containing icons on the left, **ALWAYS** provide extra right-side padding (`pl-6 pr-12 sm:pr-16`) or use `rounded-2xl`.
- The rightmost text character must have at least 24px of clear visual space before the right border curve.
