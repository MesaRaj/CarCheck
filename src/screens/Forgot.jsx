import { useState } from "react";
import { Send, Lock, Info } from "lucide-react";
import { StatusBar, BackButton, Field, CTA } from "../components";

export default function Forgot({ onNav, onToast }) {
  const [identifier, setIdentifier] = useState("");

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-[18px] pt-3 pb-6">
        <BackButton onClick={() => onNav("login")} />
        <div className="w-[50px] h-[50px] rounded-[13px] flex items-center justify-center mt-[22px]" style={{ background: "rgba(212,74,17,0.1)" }}>
          <Lock size={24} className="text-copper" />
        </div>
        <h1 className="ff-d text-[24px] font-semibold mt-[14px]">Reset password</h1>
        <p className="text-[13px] text-muted mt-2">Enter your email or mobile. We will send a reset link.</p>

        <div className="mt-[22px]">
          <Field label="Email or mobile" value={identifier} onChange={setIdentifier} placeholder="arjun@gmail.com or 9876543210" />
        </div>

        <div className="mt-[22px]">
          <CTA onClick={() => { onToast?.("Reset link sent"); setTimeout(() => onNav("login"), 1200); }}>
            Send reset link <Send size={16} />
          </CTA>
        </div>

        <div className="mt-[26px] p-[15px] rounded-[11px]" style={{ background: "rgba(212,74,17,0.06)" }}>
          <div className="flex gap-[10px]">
            <Info size={18} className="text-copper mt-[2px] flex-shrink-0" />
            <div>
              <p className="text-[13px] font-medium">Need help?</p>
              <p className="text-[11px] text-muted mt-[3px]">No email in 5 mins? Check spam, or write to support@carcheck.app</p>
            </div>
          </div>
        </div>

        <p className="text-center mt-[22px] text-[13px] text-muted">
          Remembered?{" "}
          <button onClick={() => onNav("login")} className="text-copper font-medium border-0 bg-transparent cursor-pointer">
            Back to login
          </button>
        </p>
      </div>
    </div>
  );
}
