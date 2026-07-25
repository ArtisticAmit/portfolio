# Live MCQ Design System — image drop-in slots

Drop PNG files into this folder using the exact filenames below. The case study
page (`src/pages/ProjectDetail.jsx`, `'live-design-kit'` entry) references these
paths directly by URL — no code changes needed once a file lands here.

Required (referenced in the page today):

- `cover.png` — hero/cover shot of the design system or a key screen
- `empathize-old-screens.png` — before-state screenshots of the old, inconsistent UI
- `prototype-color-palette.png` — color palette / tonal ramps
- `prototype-typography.png` — typography / text-style specimen (image, not coded)
- `prototype-buttons.png` — button family specimen (image, not coded)
- `test-demo-app.png` — demo Flutter app screenshots, light + dark

Optional (also wired up, safe to leave empty):

- `empathize-audit.png` — component-inconsistency audit board
- `prototype-components.png` — before/after of standardized components
- `prototype-icons.png` — Material Symbols Rounded set in use
- `prototype-spacing.png` — spacing scale
- `prototype-font-eval.png` — font comparison (Balooda / Anek Bangla / Noto Sans)

Until a file exists, the browser shows the image's alt text in its place instead
of a broken build.
