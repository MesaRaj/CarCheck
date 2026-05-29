// Color tokens — match Tailwind config and CSS vars in index.css.
// Use these in inline style props (e.g. for SVG strokes or dynamic colors).
export const COLORS = {
  bg: "#F1EDE4",
  cream: "#FAF7F1",
  ink: "#0E0E0C",
  muted: "#7A7972",
  copper: "#D44A11",
  green: "#1F6E3A",
  amber: "#F2B544",
  red: "#B12A2A",
};

// Score-to-color helper for inspection reports.
// 80+ = green (good), 65-79 = copper (fair), <65 = red (risky)
export function scoreColor(score) {
  if (score >= 80) return COLORS.green;
  if (score >= 65) return COLORS.copper;
  return COLORS.red;
}

// Severity colors for report findings
export const SEVERITY = {
  high: { bg: "rgba(177,42,42,0.1)", fg: COLORS.red },
  med: { bg: "rgba(212,74,17,0.1)", fg: COLORS.copper },
  low: { bg: "rgba(242,181,68,0.15)", fg: COLORS.amber },
};
