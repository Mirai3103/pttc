---
name: Petrochemical Enterprise System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#43474f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#001f3c'
  on-tertiary: '#ffffff'
  tertiary-container: '#00355f'
  on-tertiary-container: '#589fed'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#a0c9ff'
  on-tertiary-fixed: '#001c37'
  on-tertiary-fixed-variant: '#00497f'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin: 32px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

This design system is engineered for the petrochemical and industrial technology sector, emphasizing authority, precision, and institutional trust. The aesthetic follows a **Corporate/Modern** movement, characterized by a structured layout, generous use of whitespace, and a high-contrast palette that suggests technical rigor. 

The brand personality is that of an "Expert Consultant"—reliable, safe, and technologically advanced. Visual elements avoid unnecessary flourishes, focusing instead on clarity and information density suitable for engineering and business stakeholders. The UI evokes a sense of "digital steel and glass," reflecting the physical environments of the energy industry while maintaining a clean, modern digital interface.

## Colors

The color palette is anchored by **Deep Navy (#003366)**, a color traditionally associated with depth, stability, and corporate expertise. This is complemented by **Slate Gray (#475569)** to provide a sophisticated, technical foundation for secondary UI elements and iconography.

To maintain continuity with the existing brand profile, **#1E73BE** is utilized as a tertiary accent for interactive elements that require high visibility without sacrificing the professional tone. Backgrounds remain a clinical, high-purity white or very light slate to ensure maximum readability and a spacious feel. Functional colors for alerts or data visualization should be used sparingly, ensuring they do not detract from the primary blue-and-gray aesthetic.

## Typography

The typographic hierarchy utilizes a sophisticated serif/sans-serif pairing to balance tradition with modernization. 

**Noto Serif** is used for all primary headlines. Its classic letterforms convey a sense of established expertise and literary quality, grounding the brand in authority. 

**Inter** is the workhorse typeface for body copy, labels, and data. Chosen for its exceptional legibility and neutral, systematic appearance, it ensures that complex technical data and reports are easily digestible. Uppercase labels with slight tracking are used for metadata and technical categorization to provide a clear distinction from narrative text.

## Layout & Spacing

The design system employs a **Fixed Grid** layout for primary web views to maintain a consistent, structured feel that mirrors technical blueprints. A 12-column grid system is used with a maximum container width of 1280px.

Spacing follows a strict 8px linear scale. Large vertical "stacks" (64px+) are used between major content sections to emphasize a high-end, uncluttered corporate feel. Information-dense areas, such as data tables or technical specifications, transition to a tighter 4px/8px rhythm to maximize screen utility without sacrificing alignment.

## Elevation & Depth

Visual hierarchy is established primarily through **Tonal Layers** and **Low-Contrast Outlines** rather than aggressive shadows. This keeps the interface feeling "flat" and architecturally sound.

- **Surface Levels:** The base background is white. Secondary containers (sidebars, card backgrounds) use a very light slate tint to create subtle separation.
- **Outlines:** Use 1px borders in a light gray-blue tint for buttons and input fields to maintain a crisp, engineered look.
- **Shadows:** When necessary for "floating" elements like dropdowns or modals, use extremely soft, diffused shadows with a blue-gray tint (e.g., 0px 4px 20px rgba(0, 51, 102, 0.08)).
- **Interactive Depth:** Buttons use a subtle shift in background saturation rather than physical displacement to signify interaction.

## Shapes

The shape language is "Soft," utilizing minimal corner radii (4px for standard elements). This choice bridges the gap between the harsh 0px corners of traditional industrial software and the overly rounded, consumer-focused trends of modern web design. 

The slight rounding provides a professional finish that feels modern but remains grounded in the geometric precision associated with engineering and petrochemical infrastructure. Buttons, input fields, and cards should all adhere to this consistent radius to maintain a unified visual language.

## Components

### Buttons
- **Primary:** Solid Deep Blue (#003366) with White Inter (Semi-bold). 4px radius.
- **Secondary:** Outline variant with Slate Gray border and text.
- **Ghost:** No border, Slate Gray text, used for tertiary actions.

### Form Inputs
- **Style:** 1px border (#CBD5E1), 4px radius, White background. 
- **States:** Focus state uses a 2px Deep Blue (#003366) border or a subtle blue outer glow. Labels are Inter (Semi-bold, 12px, Uppercase).

### Cards
- **Technical Cards:** Light slate background (#F1F5F9), no shadow, 1px border (#E2E8F0). Used for housing technical data points.
- **Feature Cards:** White background with a very subtle shadow to draw attention to high-level service offerings.

### Chips & Tags
- Used for status indicators (e.g., "In Production," "Pending Review"). 
- Small, uppercase Inter font. Backgrounds should be low-saturation tints of the status color (e.g., soft green for success) to avoid a "neon" or "playful" appearance.

### Data Tables
- Clean, horizontal lines only. 
- Header rows in light slate with Deep Blue text. 
- Row hover states use an extremely faint blue tint to aid readability in large datasets.

### Relevant Additions
- **Process Indicators:** Step-by-step progress bars for industrial workflows.
- **PDF Export Components:** Styled buttons specifically for technical documentation downloads.