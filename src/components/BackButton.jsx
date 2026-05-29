import { ArrowLeft } from "lucide-react";

// Round back button — used at the top of most screens.
export default function BackButton({ onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className="tap w-9 h-9 rounded-full bg-white border-[0.5px] border-ink/10 flex items-center justify-center flex-shrink-0"
    >
      {icon || <ArrowLeft size={18} />}
    </button>
  );
}
