import { useRef } from "react";

// 6-box OTP input. Auto-advances to next box on type, goes back on Backspace.
//
// Props:
//   value — array of 6 strings
//   onChange — called with new array
//   status — null | "ok" (green) | "err" (red shake)
export default function OTPInput({ value, onChange, status }) {
  const refs = useRef([]);

  const handleInput = (i, v) => {
    const digit = v.replace(/\D/g, "").slice(0, 1);
    const next = [...value];
    next[i] = digit;
    onChange(next);
    if (digit && i < 5) refs.current[i + 1]?.focus();
  };

  const handleKey = (i, e) => {
    if (e.key === "Backspace" && !value[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  };

  const borderColor =
    status === "ok" ? "#1F6E3A" : status === "err" ? "#B12A2A" : "rgba(14,14,12,0.18)";
  const bg = status === "ok" ? "rgba(31,110,58,0.05)" : status === "err" ? "rgba(177,42,42,0.05)" : "#FFF";
  const animation = status === "err" ? "ccShake 0.4s" : undefined;

  return (
    <div className="flex gap-[7px] justify-between" style={{ animation }}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          value={value[i] || ""}
          onChange={(e) => handleInput(i, e.target.value)}
          onKeyDown={(e) => handleKey(i, e)}
          maxLength={1}
          inputMode="numeric"
          className="ff-m text-center text-[20px] font-medium text-ink outline-none rounded-[10px]"
          style={{
            width: 42,
            height: 50,
            border: `1px solid ${borderColor}`,
            background: bg,
          }}
        />
      ))}
    </div>
  );
}
