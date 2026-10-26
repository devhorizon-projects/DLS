# AI & Vibe Coding Guide for @devhorizon/dls

This guide enables AI coding assistants (Cursor, Windsurf, Claude, ChatGPT, GitHub Copilot, Lovable) to generate 100% compliant, visually stunning DevHorizon applications without hallucinations or style drift.

---

## 1. System Prompt for AI Coding Assistants (Paste into `.cursorrules` or Claude Instructions)

```markdown
You are an expert Frontend Architect specializing in the DevHorizon Design Language System (@devhorizon/dls).
Always adhere to the following strict guidelines when writing or revamping frontend code:

1. BRAND PALETTE:
   - Primary Background: #111315 (Deep luxury obsidian)
   - Surfaces & Cards: #24272B (Elevated dark container)
   - Text & Light Details: #D4D8DE (High-legibility primary text)
   - Shining Silver Accent: #E8EAED (Metallic brushed chrome gradient)
   - Secondary Platinum: #C0C5CC (Muted platinum borders and subtitles)
   - White Sections: #FFFFFF (Architectural contrast zones with #0E1012 typography)

2. COMPONENT USAGE:
   - Always import UI components from `@devhorizon/dls`.
   - Use <DevHorizonButton variant="primary"> (alias: DevHorizonTechButton, DlsButton) for high-priority CTA actions (renders silver metallic finish with dark text).
   - Use <DevHorizonButton variant="secondary"> for dark obsidian actions with silver border.
   - Use <DevHorizonBadge variant="silver"> (alias: DevHorizonTechBadge, DlsBadge) for section overlines (uppercase, 0.18em tracking).
   - Use <DevHorizonServiceCard> inside white contrast sections for services and architectural features.
   - Use <DevHorizonProjectCard> for featured case studies with images and tags.
   - Use <DevHorizonCard> inside dark sections.
   - Use <DevHorizonLogo variant="horizontal"> for navigation headers.
   - Use <DevHorizonStatItem> for key metrics counters.
   - Use <DevHorizonProcessTimeline> for stepped workflows (supports layout="grid", "connected", "vertical").

3. LAYOUT & SPACING:
   - Max width container: `max-w-7xl mx-auto px-6 lg:px-8`.
   - Maintain alternating rhythm: Dark Hero (#111315) -> White Architectural Services (#FFFFFF) -> Dark Case Studies (#111315) -> Dark Footer.
```

---

## 2. Private Artifactory Setup & Publishing

To publish `@devhorizon/dls` to a private package registry (GitHub Packages, AWS CodeArtifact, JFrog Artifactory, or Verdaccio):

### A. Configure `.npmrc`
```ini
# For GitHub Packages:
@devhorizon:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}

# Or for Private Verdaccio / Artifactory:
# @devhorizon:registry=https://artifactory.yourcompany.com/api/npm/npm-private/
```

### B. Increment Version & Publish
```bash
cd packages/dls
npm run build
npm version patch # or minor, major
npm publish
```

### C. Installing in Any Project
```bash
npm install @devhorizon/dls
```

In your project's `main.tsx` or `App.tsx`:
```tsx
import "@devhorizon/dls/style.css";
```

---

## 3. Creating Incremental Components for @devhorizon/dls
When extending the DLS with new components (e.g. Modals, Inputs, Tabs, Tooltips):
1. Place the component in `packages/dls/src/components/<ComponentName>.tsx`.
2. Ensure it imports tokens from `../tokens`.
3. Provide TypeScript interface with JSDoc comments.
4. Export from `packages/dls/src/index.ts`.
5. Update `llms.txt` and `AI_GUIDE.md` with the new component signature so vibe-coding AIs immediately learn the new component!
