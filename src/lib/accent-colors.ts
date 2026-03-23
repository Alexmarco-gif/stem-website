/**
 * Shared accent-color tokens for the organic glass design system.
 * Use these values wherever a "primary / teal / gold" accent is needed
 * to keep every component visually consistent.
 */

export type AccentKey = "primary" | "teal" | "gold" | "rose";

interface AccentTokens {
  /** Solid accent colour */
  color: string;
  /** Low-opacity fill for icon containers / backgrounds */
  fill: string;
  /** Border colour */
  border: string;
  /** Glow colour (for box-shadow) */
  glow: string;
}

export const accentColors: Record<AccentKey, AccentTokens> = {
  primary: {
    color: "#4D7CFF",
    fill: "rgba(77,124,255,0.12)",
    border: "rgba(77,124,255,0.25)",
    glow: "rgba(77,124,255,0.20)",
  },
  teal: {
    color: "#00D4AA",
    fill: "rgba(0,212,170,0.12)",
    border: "rgba(0,212,170,0.25)",
    glow: "rgba(0,212,170,0.20)",
  },
  gold: {
    color: "#C9A84C",
    fill: "rgba(201,168,76,0.12)",
    border: "rgba(201,168,76,0.25)",
    glow: "rgba(201,168,76,0.20)",
  },
  rose: {
    color: "#F87171",
    fill: "rgba(248,113,113,0.10)",
    border: "rgba(248,113,113,0.22)",
    glow: "rgba(248,113,113,0.18)",
  },
};

/** Helper — returns a CSS linear-gradient string for stat numbers */
export function statGradient(accent: AccentKey): string {
  const gradients: Record<AccentKey, string> = {
    primary: "linear-gradient(135deg,#4D7CFF,#00D4AA)",
    teal: "linear-gradient(135deg,#00D4AA,#80FFDD)",
    gold: "linear-gradient(135deg,#C9A84C,#E8D5A0)",
    rose: "linear-gradient(135deg,#F87171,#FBBF24)",
  };
  return gradients[accent];
}
