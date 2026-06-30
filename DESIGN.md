---
name: Lumina Engineering Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#c2c1ff'
  on-secondary: '#1c0b9f'
  secondary-container: '#3834b6'
  on-secondary-container: '#b2b1ff'
  tertiary: '#ffb595'
  on-tertiary: '#571e00'
  tertiary-container: '#ef6719'
  on-tertiary-container: '#4c1a00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c2c1ff'
  on-secondary-fixed: '#0c006a'
  on-secondary-fixed-variant: '#3631b4'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb595'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7c2e00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  stack-lg: 80px
  stack-md: 48px
  stack-sm: 24px
---

## Brand & Style

This design system is engineered to evoke the precision of a high-performance developer tool while maintaining the aesthetic polish of a premium consumer brand. The target audience includes technical recruiters, engineering leads at top-tier tech firms, and potential venture collaborators who value craftsmanship as much as code.

The visual direction blends **Minimalism** with **Glassmorphism**. It utilizes a "Dark Mode First" philosophy, leaning on deep obsidian backgrounds and high-end SaaS conventions popularized by industry leaders like Linear and Vercel. The emotional response is one of trust, technical mastery, and meticulous attention to detail. Key characteristics include:
- **Optical Precision:** Hairline borders and micro-interactions.
- **Atmospheric Depth:** Subtle glows and layering to define hierarchy.
- **Content-First:** Typography and imagery are given immense breathing room.

## Colors

The palette is anchored in absolute black (`#000000`) to provide infinite contrast for typography and UI elements. 

- **Primary (Electric Blue):** Used for primary actions, active states, and focal points.
- **Secondary (Deep Purple):** Used for accents, secondary gradients, and subtle categorizations.
- **Surfaces:** Elevated containers use a layered gray scale (`#0A0A0A` for base cards, `#111111` for nested elements) to create a sense of physical stacking.
- **Gradients:** Use a 45-degree linear gradient from Primary to Secondary for high-impact visual moments like feature highlights or button hovers.

## Typography

The typography system relies on **Geist** for its technical, developer-centric DNA and **Inter** for its unparalleled legibility in body text. 

- **Hierarchy:** Use tight letter spacing on larger headings to create a compact, "designed" feel. 
- **Contrast:** Utilize `label-sm` in secondary grays for metadata to ensure the core message (headlines/body) remains the focus.
- **Scaling:** On mobile, reduce display sizes significantly to avoid awkward word breaks while maintaining the bold font weights.

## Layout & Spacing

The layout follows a 12-column fluid grid for desktop and a single-column layout for mobile. 

- **Rhythm:** A 4px baseline grid ensures consistent vertical rhythm. 
- **Section Spacing:** Use `stack-lg` (80px) between major sections to maintain the "Apple-esque" sense of space and focus.
- **Alignment:** Content is centered in a `1200px` max-width container. For project grids, use a 2-column layout on desktop to allow the "Premium Project Cards" enough horizontal width to showcase detail.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Subtle Glassmorphism** rather than traditional heavy shadows.

- **Micro-Borders:** All cards and interactive elements must have a `1px` solid border using `rgba(255, 255, 255, 0.08)`. This creates a crisp definition against the black background.
- **Backdrop Blurs:** Floating elements (like the navigation bar) should use a `blur(12px)` and a semi-transparent background (`rgba(0, 0, 0, 0.7)`).
- **Ambient Glows:** Use low-opacity radial gradients (Primary or Secondary color at 5-10% opacity) positioned behind cards to create a "soft lighting" effect, simulating light emanating from the screen.

## Shapes

The design system utilizes **Rounded** shapes to soften the technical aesthetic.

- **Standard Elements:** Buttons, inputs, and small cards use `0.5rem` (8px).
- **Large Containers:** Project cards and featured sections use `rounded-xl` (1.5rem / 24px) to create a distinct, modern silhouette.
- **Interactive States:** When hovered, elements should not change their border-radius, but may increase their border-opacity to `0.2`.

## Components

### Buttons
- **Primary:** Solid Primary color or Gradient. Text is white. No shadow, but a subtle inner-glow (1px white top-border at 10% opacity).
- **Secondary:** Transparent background, `1px` white border at 10% opacity. 

### Premium Project Cards
- **Structure:** Large image/video container on top, metadata below.
- **Visuals:** On hover, the micro-border should transition to the Primary color. Background uses a subtle gradient from `#0A0A0A` to `#000000`.

### Animated Vertical Timeline
- **Indicator:** A 2px vertical track in `#111111`. The "active" segment of the track glows in the Primary color as the user scrolls.
- **Nodes:** Small circular nodes that expand slightly when they enter the viewport.

### Tech Stack Grid
- **Items:** Small, `rounded-lg` cards with a mono-color icon and a label. 
- **Interactivity:** On hover, the icon takes on its brand color (e.g., React Blue, Node Green), and the card background lifts to `#111111`.

### Input Fields
- **Style:** Background `#0A0A0A`, micro-border. Focus state uses a `1px` Primary color border and a very soft Primary outer glow (4px blur).

### Navigation Bar
- **Style:** Floating pill shape or full-width top bar. Glassmorphism is mandatory here. Keep links minimal, using `label-sm` typography.