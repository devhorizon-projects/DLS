/**
 * DevHorizon Design Language System (DLS) - Tokens
 * Core design tokens derived from brand guidelines & luxury tech aesthetic.
 */

export const colors = {
  // Core Brand Palette
  primaryBackground: "#111315",
  surfaceCard: "#24272B",
  surfaceCardHover: "#2A2E33",
  surfaceElevated: "#1A1C1F",
  
  // Text & Accents
  textLight: "#D4D8DE",
  textMuted: "#8E95A0",
  textSubtle: "#626873",
  
  // Metallic Accents
  shiningSilver: "#E8EAED",
  secondaryPlatinum: "#C0C5CC",
  brightWhite: "#FFFFFF",
  
  // Light Mode / High-Contrast White Sections
  whiteSectionBg: "#FFFFFF",
  whiteSectionSurface: "#F8F9FA",
  whiteSectionBorder: "rgba(0, 0, 0, 0.08)",
  whiteSectionText: "#0E1012",
  whiteSectionTextMuted: "#5F6672",
  
  // Borders & Dividers
  borderDark: "rgba(255, 255, 255, 0.08)",
  borderDarkHover: "rgba(232, 234, 237, 0.25)",
  borderSilverSubtle: "rgba(192, 197, 204, 0.18)",
  
  // Status & Utility
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
} as const;

export const gradients = {
  // Metallic Silver Primary Button & Accent
  silverMetallic: "linear-gradient(180deg, #FFFFFF 0%, #E8EAED 45%, #C0C5CC 100%)",
  silverMetallicHover: "linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 50%, #D4D8DE 100%)",
  silverMetallicActive: "linear-gradient(180deg, #E8EAED 0%, #D4D8DE 50%, #C0C5CC 100%)",
  
  // Dark Surfaces
  surfaceGradient: "linear-gradient(180deg, #24272B 0%, #1D1F23 100%)",
  surfaceHoverGradient: "linear-gradient(180deg, #2B2F34 0%, #22252A 100%)",
  
  // Borders
  silverBorderGradient: "linear-gradient(135deg, rgba(232, 234, 237, 0.35) 0%, rgba(192, 197, 204, 0.08) 50%, rgba(255, 255, 255, 0.15) 100%)",
  
  // Text Gradient
  silverTextGradient: "linear-gradient(180deg, #FFFFFF 0%, #E8EAED 60%, #C0C5CC 100%)",
} as const;

export const typography = {
  fontFamilies: {
    sans: "Inter, Manrope, system-ui, -apple-system, sans-serif",
    heading: "Manrope, Inter, sans-serif",
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  letterSpacing: {
    tighter: "-0.03em",
    tight: "-0.015em",
    normal: "0em",
    wide: "0.025em",
    eyebrow: "0.18em",
  },
} as const;

export const shadows = {
  soft: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
  metallicGlow: "0 0 25px rgba(232, 234, 237, 0.18)",
  cardGlow: "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
  buttonGlow: "0 2px 14px rgba(232, 234, 237, 0.28)",
  whiteCardShadow: "0 1px 3px rgba(0, 0, 0, 0.04), 0 6px 16px rgba(0, 0, 0, 0.03)",
} as const;

export const radii = {
  sm: "6px",
  md: "10px",
  lg: "14px",
  xl: "18px",
  "2xl": "24px",
  pill: "9999px",
} as const;

export const dlsTokens = {
  colors,
  gradients,
  typography,
  shadows,
  radii,
};

export default dlsTokens;
