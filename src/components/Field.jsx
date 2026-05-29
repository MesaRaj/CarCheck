// Labelled input. Caps label above, white input below.
export default function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full px-[14px] py-[12px] mt-[7px] rounded-[11px] bg-white text-[14px] text-ink border-[0.5px] border-ink/10 focus:border-copper focus:outline-none"
        style={{ fontFamily: "inherit" }}
      />
    </div>
  );
}
