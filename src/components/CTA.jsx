// Primary call-to-action button. Used at the bottom of forms and pages.
//
// Props:
//   children — button content (label + icon)
//   onClick
//   variant — "copper" (default) | "green" | "ghost" | "dark"
//   disabled
//   style — extra inline styles (margin, etc.)
export default function CTA({ children, onClick, variant = "copper", disabled, style = {} }) {
  const variants = {
    copper: { background: "#D44A11", color: "#FAF7F1" },
    green: { background: "#1F6E3A", color: "#FAF7F1" },
    ghost: { background: "transparent", color: "#0E0E0C", border: "0.5px solid rgba(14,14,12,0.15)" },
    dark: { background: "#0E0E0C", color: "#FAF7F1" },
  };
  const v = disabled
    ? { background: "rgba(14,14,12,0.1)", color: "#7A7972" }
    : variants[variant];
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="tap w-full py-[14px] rounded-xl text-[14px] font-medium flex items-center justify-center gap-[6px] border-0 cursor-pointer"
      style={{ ...v, ...style, fontFamily: "inherit" }}
    >
      {children}
    </button>
  );
}
