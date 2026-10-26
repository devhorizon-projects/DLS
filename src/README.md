# DevHorizon Design Language System (DLS)

The unified Design Language System for DevHorizon and its product ecosystem.

## 1. Brand Tokens

### Color Palette
- **Primary Background**: `#111315` (Deep luxury charcoal obsidian)
- **Cards & Surfaces**: `#24272B` (Refined dark slate container)
- **Text & Light Details**: `#D4D8DE` (Crisp readable light silver)
- **Primary Accent (Shining Silver)**: `#E8EAED` (Metallic brushed silver gradient)
- **Secondary Accent (Platinum)**: `#C0C5CC` (Muted platinum border & detail)
- **White Contrast Sections**: `#FFFFFF` (Clean, architectural high-impact sections)

### Typography
- Primary Sans: `Inter`, `Manrope`, system-ui, sans-serif
- Headings: `Manrope`, `Inter`, sans-serif
- Font Weights: Regular (400), Medium (500), Semibold (600), Bold (700)

## 2. Core Components Specification

### Buttons
1. **Primary Button (`variant="primary"`)**:
   - Background: `linear-gradient(180deg, #FFFFFF 0%, #E8EAED 45%, #C0C5CC 100%)`
   - Text color: `#111315` (high-contrast dark charcoal)
   - Border: `1px solid rgba(255, 255, 255, 0.6)`
   - Hover: Elevated subtle glow + slight lift
2. **Secondary Button (`variant="secondary"`)**:
   - Background: `#111315`
   - Text color: `#D4D8DE`
   - Border: `1px solid rgba(255, 255, 255, 0.16)`
   - Hover: Background `#24272B`, border `#E8EAED`

### Cards
1. **Dark Card (`DarkSurfaceCard`)**:
   - Background: `#24272B`
   - Border: `1px solid rgba(255, 255, 255, 0.08)`
   - Hover: Subtle silver border glow & translateY(-3px)
2. **White Service Card (`WhiteServiceCard`)**:
   - Background: `#FFFFFF`
   - Border: `1px solid rgba(0, 0, 0, 0.07)`
   - Padding: 2rem
   - Shadow: Soft architectural lift
