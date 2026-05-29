import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { StatusBar } from "../components";

// First screen. Logo + tagline fade in, auto-navigates to userType after 3s.
export default function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: "#0E0E0C", color: "#FAF7F1" }}>
      <StatusBar />
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="anim-scale flex items-center gap-3" style={{ animationDelay: "0.1s" }}>
          <div className="w-[52px] h-[52px] bg-copper rounded-[13px] flex items-center justify-center">
            <CheckCircle size={28} />
          </div>
          <span className="ff-d text-[28px] font-semibold">CarCheck</span>
        </div>
        <p className="anim-rise text-[15px] mt-5" style={{ color: "rgba(250,247,241,0.6)", animationDelay: "0.5s" }}>
          Inspect before you invest.
        </p>
      </div>
      <div className="anim-rise flex gap-[7px] justify-center pb-12" style={{ animationDelay: "0.9s" }}>
        <span className="w-[7px] h-[7px] bg-copper rounded-full anim-dot" />
        <span className="w-[7px] h-[7px] bg-copper rounded-full anim-dot" style={{ animationDelay: "0.2s" }} />
        <span className="w-[7px] h-[7px] bg-copper rounded-full anim-dot" style={{ animationDelay: "0.4s" }} />
      </div>
    </div>
  );
}
