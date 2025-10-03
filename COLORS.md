# Ascenity Color System Documentation

## Brand Color Palette

### Primary Colors

| Color Name | Hex Code | RGB Value | Usage |
|------------|----------|-----------|--------|
| **Honolulu** | `#027bce` | `rgb(2, 123, 206)` | Primary brand color, CTAs, links |
| **Robin** | `#1ccad8` | `rgb(28, 202, 216)` | Secondary brand color, accents |
| **Phthalo** | `#0f4c81` | `rgb(15, 76, 129)` | Tertiary brand color, depth |
| **Oxford** | `#0a2239` | `rgb(10, 34, 57)` | Dark navy, primary text, dark sections |
| **Snow** | `#fffafa` | `rgb(255, 250, 250)` | Light background, cards |
| **Emerald** | `#10b981` | `rgb(16, 185, 129)` | Success states, positive indicators |
| **White** | `#ffffff` | `rgb(255, 255, 255)` | Pure white, overlays, text on dark |

---

## Two-Color Gradients

### Flywheel Stage Gradients

| Stage | Gradient Name | From | To | RGB Range | Usage |
|-------|---------------|------|----|-----------| -------|
| **Log** | Honolulu → Robin | `#027bce` | `#1ccad8` | `rgb(2,123,206) → rgb(28,202,216)` | First stage card |
| **Reflect** | Robin → Phthalo | `#1ccad8` | `#0f4c81` | `rgb(28,202,216) → rgb(15,76,129)` | Second stage card |
| **Analyze** | Phthalo → Oxford | `#0f4c81` | `#0a2239` | `rgb(15,76,129) → rgb(10,34,57)` | Third stage card |
| **Adapt** | Oxford → Honolulu | `#0a2239` | `#027bce` | `rgb(10,34,57) → rgb(2,123,206)` | Fourth stage card |

### Other Two-Color Gradients

| Gradient Name | From | To | RGB Range | Usage |
|---------------|------|----|-----------| -------|
| **Phthalo → Honolulu** | `#0f4c81` | `#027bce` | `rgb(15,76,129) → rgb(2,123,206)` | Various UI elements |

---

## Three-Color Gradients

### Scroll Progress & Decorative

| Gradient Name | From | Via | To | RGB Range | Usage |
|---------------|------|-----|----|-----------| -------|
| **Honolulu → Robin → Phthalo** | `#027bce` | `#1ccad8` | `#0f4c81` | `rgb(2,123,206) → rgb(28,202,216) → rgb(15,76,129)` | Scroll progress bar |

### Subtle Card Backgrounds

| Gradient Name | From | Via | To | RGB Range | Usage |
|---------------|------|-----|----|-----------| -------|
| **White → White → Honolulu** | `#ffffff` | `#ffffff` | `#027bce` | `rgb(255,255,255) → rgb(255,255,255) → rgb(2,123,206)` | Card with blue tint |
| **White → White → Robin** | `#ffffff` | `#ffffff` | `#1ccad8` | `rgb(255,255,255) → rgb(255,255,255) → rgb(28,202,216)` | Card with cyan tint |
| **White → White → Phthalo** | `#ffffff` | `#ffffff` | `#0f4c81` | `rgb(255,255,255) → rgb(255,255,255) → rgb(15,76,129)` | Card with deep blue tint |
| **White → White → Oxford** | `#ffffff` | `#ffffff` | `#0a2239` | `rgb(255,255,255) → rgb(255,255,255) → rgb(10,34,57)` | Card with navy tint |

---

## SVG Gradient Definitions

Used in flywheel visualization and decorative elements:

| ID | Type | Colors | RGB Values | Usage |
|----|------|--------|------------|--------|
| **lineGradient** | Linear | `#027bce` → `#1ccad8` → `#027bce` | `rgb(2,123,206) → rgb(28,202,216) → rgb(2,123,206)` | Connecting lines in flywheel |
| **circleGradient** | Linear | `#027bce` → `#1ccad8` → `#027bce` | `rgb(2,123,206) → rgb(28,202,216) → rgb(2,123,206)` | Circular elements |
| **pulseGradient** | Linear | `#027bce` → `#1ccad8` → `#027bce` | `rgb(2,123,206) → rgb(28,202,216) → rgb(2,123,206)` | Pulsing animations |

---

## Color Usage by Context

### Backgrounds

| Context | Color | Hex/RGB | Opacity Variations |
|---------|-------|---------|-------------------|
| Main light sections | Snow | `#fffafa` / `rgb(255, 250, 250)` | - |
| Dark sections | Oxford | `#0a2239` / `rgb(10, 34, 57)` | - |
| Cards & overlays | White | `#ffffff` / `rgb(255, 255, 255)` | `/70` (70% opacity) |
| Decorative orbs | Robin, Phthalo, Oxford | Various | `/20`, `/10` with blur |

### Text Colors

| Context | Color | Hex/RGB | Opacity Variations |
|---------|-------|---------|-------------------|
| Primary text (light bg) | Oxford | `#0a2239` / `rgb(10, 34, 57)` | Base, `/80`, `/70`, `/60` |
| Text on dark backgrounds | Snow | `#fffafa` / `rgb(255, 250, 250)` | Base, `/90`, `/80`, `/70`, `/60` |
| Accent text | Honolulu | `#027bce` / `rgb(2, 123, 206)` | Base |
| Secondary accent | Robin | `#1ccad8` / `rgb(28, 202, 216)` | Base |
| Tertiary accent | Phthalo | `#0f4c81` / `rgb(15, 76, 129)` | Base |
| Success/positive | Emerald | `#10b981` / `rgb(16, 185, 129)` | Base |

### Interactive Elements

| Element | Gradient/Color | RGB Values | Usage |
|---------|---------------|------------|--------|
| Primary CTA | Honolulu → Robin | `rgb(2,123,206) → rgb(28,202,216)` | Main action buttons |
| Stage cards (hover) | Respective gradient | See "Flywheel Stage Gradients" | Card hover states |
| Navigation hover | Oxford | `rgb(10, 34, 57)` | `/5` opacity background |
| Link hover | Oxford | `rgb(10, 34, 57)` | Base color |

### Borders & Dividers

| Element | Color | Opacity | Usage |
|---------|-------|---------|--------|
| Card borders | Oxford | `/10` | Light sections |
| Card borders (dark) | White | `/10` | Dark sections |
| Colored borders | Honolulu, Robin, Phthalo | `/20`, `/10` | Accent borders |

---

## Opacity Scale Reference

Common opacity values used throughout the design:

| Opacity | Decimal | Usage Context |
|---------|---------|---------------|
| `/5` | 0.05 | Very subtle backgrounds |
| `/10` | 0.10 | Subtle overlays, borders |
| `/15` | 0.15 | Light decorative elements |
| `/20` | 0.20 | Icon backgrounds, subtle accents |
| `/30` | 0.30 | Tags, badges |
| `/60` | 0.60 | Secondary text |
| `/70` | 0.70 | Body text, card backgrounds |
| `/80` | 0.80 | Primary text on colored backgrounds |
| `/90` | 0.90 | High-emphasis text |

---

## Color Psychology & Rationale

### Honolulu Blue (`#027bce`)
- **Meaning**: Trust, clarity, intelligence
- **Usage**: Primary brand color, represents the clarity and insight Ascenity provides
- **Context**: CTAs, primary accents, first flywheel stage

### Robin Cyan (`#1ccad8`)
- **Meaning**: Calm, balance, emotional awareness
- **Usage**: Secondary brand color, represents emotional flow and awareness
- **Context**: Gradients, secondary accents, second flywheel stage

### Phthalo Blue (`#0f4c81`)
- **Meaning**: Depth, stability, analysis
- **Usage**: Tertiary brand color, represents deeper emotional understanding
- **Context**: Third flywheel stage, analytical features

### Oxford Navy (`#0a2239`)
- **Meaning**: Professionalism, security, grounding
- **Usage**: Primary text and dark sections, represents stability and trust
- **Context**: Text, dark backgrounds, fourth flywheel stage

### Snow (`#fffafa`)
- **Meaning**: Clarity, openness, peace
- **Usage**: Light backgrounds, represents clean slate and new beginnings
- **Context**: Main backgrounds, cards

### Emerald Green (`#10b981`)
- **Meaning**: Growth, success, positive change
- **Usage**: Success states and positive indicators
- **Context**: Success messages, positive emotions

---

## Accessibility Notes

### Contrast Ratios

All text color combinations meet WCAG AA standards:

- Oxford text on Snow background: **15.7:1** (AAA)
- Snow text on Oxford background: **15.7:1** (AAA)
- Honolulu on Snow: **4.9:1** (AA)
- White on Honolulu: **4.5:1** (AA)
- White on Oxford: **15.7:1** (AAA)

### Color Blindness Considerations

- Blue-cyan gradient system works well for most types of color blindness
- Sufficient contrast maintained even in grayscale
- Text never relies solely on color to convey meaning

---

## Implementation in Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        honolulu: '#027bce',
        robin: '#1ccad8',
        phthalo: '#0f4c81',
        oxford: '#0a2239',
        snow: '#fffafa',
        emerald: '#10b981',
      },
    },
  },
}
```

---

## Quick Reference: Color Combinations

### High-Impact Combinations
1. **Honolulu → Robin gradient** on white: Primary CTAs
2. **Oxford text** on Snow background: Primary content
3. **Snow text** on Oxford background: Dark sections
4. **Emerald accent** on white: Success states

### Subtle Combinations
1. **Oxford/10** border on white: Card borders
2. **Honolulu/5** background: Subtle highlights
3. **White/10** overlay on Oxford: Dark section cards
4. **Robin/20** with blur: Decorative backgrounds

---

*Last updated: October 3, 2025*
*Ascenity Design System v1.0*
