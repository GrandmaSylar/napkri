# Nakpri Laptops and Accessories — Design System

Layout and component language: clean, modern hardware aesthetic with rounded cards, pill controls, bold Space Grotesk display typography over Inter, and a deep carbon navy, titanium slate, and electric cyan color palette.

## Tokens (app/globals.css)

| Token | Value | Use |
|---|---|---|
| `ink` | #0A0F1D | Midnight tech black body text |
| `brand` | #0F2338 | Deep carbon navy: primary buttons, dark panels, navbar |
| `brand-soft` | #1B3654 | Navy hover state |
| `cream` | #F6F8FB | Page background (clean tech slate-tinted white) |
| `ice` | #EAF0F6 | Image wells, secondary hardware surfaces |
| `mist` | #EFF4F9 | Inputs, search, muted surfaces |
| `line` | #DBE4EE | Crisp hardware borders |
| `slate` | #52667A | Secondary text & specs |
| `mint` | #38BDF8 | Electric cyan: accent surfaces, badges, cart count |
| `mint-deep` | #0284C7 | Cobalt/cyan text and icons on light surfaces |
| `sand` | #CBD5E1 | Titanium silver accent text on dark navy |
| `gold` | #F59E0B | Amber gold: "New" and "Bestseller" badges |
| `coral` | #E11D48 | Deals link, low stock badge |
| `coral-deep` | #BE123C | Sale text on tinted pills |
| Footer | #0A121E | Midnight carbon footer |

## Typography
- Display: Space Grotesk 700, tracking -0.025em, uppercase for hero statements and section titles.
- UI and body: Inter 400/500/600. Uppercase micro-labels at 11px, 600 weight.
- Prices use the display face with tabular numerals, e.g. `GH₵14,500`, with the struck-through original price beside it.

## Shape and Depth
- Cards: radius 1.25rem, 1px `line` border, white, p-3; inner image well uses rounded-2xl on `ice`.
- Panels (deals, newsletter): radius 2rem, deep carbon navy with subtle radial glow.
- Controls: pills (rounded-full). Carbon navy fill with white text for primary; white with line border for secondary.

## Motion
- Press: scale(.97), 160ms, ease-out `cubic-bezier(.23,1,.32,1)`.
- Drawer: 420ms `cubic-bezier(.32,.72,0,1)`. Modal: 220ms scale .96 → 1 plus opacity.
