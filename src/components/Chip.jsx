// Pill-shaped chip used for filters, day pickers, time slots.
export default function Chip({ label, active, onClick, disabled, style = {} }) {
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className="px-3 py-[6px] rounded-full text-[12px] font-medium whitespace-nowrap border-[0.5px] cursor-pointer tap"
      style={{
        background: active ? "#0E0E0C" : "#FFFFFF",
        color: active ? "#FAF7F1" : "#0E0E0C",
        borderColor: active ? "#0E0E0C" : "rgba(14,14,12,0.1)",
        opacity: disabled ? 0.4 : 1,
        fontFamily: "inherit",
        ...style,
      }}
    >
      {label}
    </button>
  );
}
