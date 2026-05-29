// Renders a toast notification — only shown when `message` is set.
// Used together with the useToast hook.
export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div
      className="absolute top-[44px] left-[14px] right-[14px] bg-ink text-cream px-[14px] py-[11px] rounded-xl text-[13px] z-50 shadow-[0_8px_24px_-8px_rgba(14,14,12,0.4)]"
      style={{ animation: "ccRise 0.3s ease both" }}
    >
      {message}
    </div>
  );
}
