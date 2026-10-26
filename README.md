# DevHorizon Design Language System (DLS)

> The official enterprise design system and React UI component library for DevHorizon Technologies and ecosystem products.

![DevHorizon DLS](https://img.shields.io/badge/DevHorizon-DLS%20v1.0.0-E8EAED?style=for-the-badge&logoColor=111315)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 📖 Overview

The **DevHorizon Design Language System (@devhorizon/dls)** is built to deliver a unified, high-performance, and luxury enterprise aesthetic inspired by top technology design systems (WellSky Atlas, Linear, Apple, and Stripe).

It is built from the ground up to support:
1. **Architectural Contrast**: Deep obsidian dark backgrounds (`#111315`) paired with pure white high-impact service sections (`#FFFFFF`).
2. **Metallic Silver Elegance**: Primary CTAs and brand marks finished with aerospace-grade brushed chrome gradients (`#E8EAED`).
3. **Multi-Project Reusability**: Standalone, typed, and decoupled for seamless distribution across all DevHorizon web and client applications.
4. **Vibe Coding & AI-Readiness**: Includes built-in `llms.txt` and `.cursorrules` guidelines so AI coding assistants (Cursor, Windsurf, Claude, Lovable, Copilot) write 100% compliant code with zero hallucinations.

---

## 🎨 Brand Tokens & Color Palette

| Token Name | Hex Code | Role | Description |
|---|---|---|---|
| **Primary Background** | `#111315` | Canvas | Deep luxury charcoal obsidian viewport canvas |
| **Surface / Cards** | `#24272B` | Dark Surfaces | Elevated container panels, cards, and modal dialogs |
| **Surface Hover** | `#2B2F35` | Interactive | Hover state for dark surfaces |
| **Text & Light Details** | `#D4D8DE` | Primary Text | High-legibility crisp light silver body & headings |
| **Text Muted** | `#8E95A0` | Secondary Text | Subtitles, labels, and secondary copy |
| **Shining Silver** | `#E8EAED` | Primary Accent | Metallic chrome button gradient and glow highlights |
| **Secondary Platinum** | `#C0C5CC` | Secondary Accent | Platinum borders, overlines, and badge rings |
| **White Sections** | `#FFFFFF` | Contrast Zone | Pure white background for architectural service sections |

### Gradients
- **Silver Metallic**: `linear-gradient(180deg, #FFFFFF 0%, #E8EAED 45%, #C0C5CC 100%)`
- **Silver Border**: `linear-gradient(135deg, rgba(232, 234, 237, 0.35) 0%, rgba(192, 197, 204, 0.08) 50%, rgba(255, 255, 255, 0.15) 100%)`

### Typography
- Primary Sans: `Inter, Manrope, system-ui, sans-serif`
- Headings: `Manrope, Inter, sans-serif`

---

## 📦 Installation

### From Private Registry (GitHub Packages / Artifactory)
Configure your `.npmrc`:
```ini
@devhorizon:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Then install:
```bash
npm install @devhorizon/dls
# or
pnpm add @devhorizon/dls
# or
yarn add @devhorizon/dls
```

### Direct Git Repository Installation
```bash
npm install git+https://github.com/devhorizontechnologiespvtltd/DLS.git
```

---

## 🚀 Quickstart

Import the core stylesheet in your application's entry file (`main.tsx` or `App.tsx`):

```tsx
import "@devhorizon/dls/style.css";
```

Use DLS components anywhere in your React application:

```tsx
import React from "react";
import {
  DevHorizonButton,
  DevHorizonTechButton,
  DevHorizonBadge,
  DevHorizonCard,
  DevHorizonServiceCard,
  DevHorizonProjectCard,
  DevHorizonLogo,
  DevHorizonStatItem,
  DevHorizonProcessTimeline,
} from "@devhorizon/dls";
import { Code2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-[#111315] text-[#D4D8DE] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <DevHorizonBadge variant="silver" showDot className="mb-4">
          TECHNOLOGY • PEOPLE • IMPACT
        </DevHorizonBadge>

        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">
          Build Beyond Today.
        </h1>

        <div className="flex items-center gap-4">
          <DevHorizonButton variant="primary" size="lg" showArrow>
            Explore Our Services
          </DevHorizonButton>
          <DevHorizonButton variant="secondary" size="lg">
            Talk to Our Team
          </DevHorizonButton>
        </div>
      </div>
    </section>
  );
}
```

---

## 🧩 Component Catalog

### 1. `DevHorizonButton` (aliases: `DevHorizonTechButton`, `DlsButton`)
The primary interactive CTA component.

```tsx
// Primary Brushed Chrome Pill
<DevHorizonButton variant="primary" size="lg" showArrow>
  Explore Our Services
</DevHorizonButton>

// Secondary Obsidian Action
<DevHorizonButton variant="secondary" size="md" showArrow>
  Talk to Our Team
</DevHorizonButton>

// Inverted (for #FFFFFF white sections)
<DevHorizonButton variant="inverted" size="md">
  Get Started
</DevHorizonButton>
```


| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'inverted' \| 'ghost'` | `'primary'` | Visual button finish |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size padding and font scale |
| `shape` | `'pill' \| 'rounded'` | `'pill'` | Pill (`rounded-full`) or rounded-xl |
| `showArrow` | `boolean` | `false` | Renders animated right chevron |
| `icon` | `React.ReactNode` | `undefined` | Optional icon element |
| `iconPosition` | `'left' \| 'right'` | `'right'` | Position of the custom icon |

---

### 2. `DlsBadge`
Eyebrow overlines and status pills.

```tsx
<DlsBadge variant="silver" showDot>
  TECHNOLOGY • PEOPLE • IMPACT
</DlsBadge>

<DlsBadge variant="light">
  OUR SERVICES
</DlsBadge>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'silver' \| 'dark' \| 'light' \| 'outline'` | `'silver'` | Color variant |
| `showDot` | `boolean` | `false` | Animated pulsing activity dot |

---

### 3. `WhiteServiceCard`
Architectural pure white card (`#FFFFFF`) with dark typography and stroke icon.

```tsx
import { Code2 } from "lucide-react";

<WhiteServiceCard
  icon={<Code2 className="w-5 h-5" />}
  title="Custom Software Development"
  description="Tailored digital solutions built from the ground up for your specific business goals."
  linkText="Learn More"
  onLinkClick={() => navigate("/services/custom-software")}
/>
```

---

### 4. `DarkSurfaceCard`
Obsidian container card (`#24272B`) with 1px silver border gradient and hover elevation.

```tsx
<DarkSurfaceCard hoverEffect={true}>
  <h3 className="text-lg font-bold text-white mb-2">Cloud Infrastructure</h3>
  <p className="text-sm text-[#8E95A0]">High-availability microservices.</p>
</DarkSurfaceCard>
```

---

### 5. `StatItem`
High-impact metric counters.

```tsx
<StatItem
  value="21+"
  label="Team Members"
  subtext="Driven by technical expertise"
/>
```

---

### 6. `ProcessTimeline`
Architectural 4-step delivery roadmap.

```tsx
<ProcessTimeline
  steps={[
    { number: "01", title: "Discover", description: "Understand goals and specifications." },
    { number: "02", title: "Design", description: "Create scalable, user-centric wireframes." },
    { number: "03", title: "Develop", description: "Build with precision engineering." },
    { number: "04", title: "Deliver", description: "Launch with zero downtime and growth support." },
  ]}
/>
```

---

### 7. `DlsLogo`
Official 3D metallic brushed chrome emblem and lockup.

```tsx
<DlsLogo size="md" variant="horizontal" asLink={true} to="/" />
```

---

## 🤖 AI & Vibe Coding Support

This package includes first-class support for AI coding tools:
- **`llms.txt`**: Standard machine context file located in the root of this package.
- **`AI_GUIDE.md`**: Master system prompts and rules for `.cursorrules`, Windsurf, Claude Projects, and ChatGPT.

To enable in Cursor or Windsurf, copy the prompt from [`AI_GUIDE.md`](./AI_GUIDE.md) into your root `.cursorrules`.

---

## 🛠️ Incremental Development & Building

To build the library:
```bash
npm run build
```

Emits:
- `dist/index.js` (ESM)
- `dist/index.cjs` (CJS)
- `dist/index.d.ts` (TypeScript types)
- `dist/style.css` (CSS tokens and utility classes)

---

## 📄 License
© 2026 DevHorizon Technologies Private Limited. All rights reserved.
