import { useState } from "react";
import { ArrowRight, Eye, MessageSquare } from "lucide-react";
import { StatusBar, BackButton, Field, CTA } from "../components";

// Login with email/password OR continue with OTP.
export default function Login({ onNav, onToast }) {
  const [email, setEmail] = useState("arjun.reddy@gmail.com");

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-[18px] pt-3 pb-6">
        <BackButton onClick={() => onNav("userType")} />
        <h1 className="ff-d text-[24px] font-semibold mt-5">Welcome back</h1>
        <p className="text-[13px] text-muted mt-2">Log in to your CarCheck account</p>

        <div className="mt-[22px]">
          <Field label="Email or mobile" value={email} onChange={setEmail} />
        </div>
        <div className="mt-3">
          <label className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted">Password</label>
          <div className="relative mt-[7px]">
            <input
              type="password"
              defaultValue="********"
              className="w-full px-[14px] py-[12px] rounded-[11px] bg-white text-[14px] border-[0.5px] border-ink/10 focus:border-copper focus:outline-none"
              style={{ paddingRight: 40, fontFamily: "inherit" }}
            />
            <Eye size={18} className="absolute right-[14px] top-1/2 -translate-y-1/2 text-muted cursor-pointer" />
          </div>
        </div>

        <button
          onClick={() => onNav("forgot")}
          className="bg-transparent border-0 text-copper text-[12px] mt-[10px] cursor-pointer font-medium"
          style={{ fontFamily: "inherit" }}
        >
          Forgot password?
        </button>

        <div className="mt-[22px]">
          <CTA onClick={() => { onToast?.("Logging in..."); setTimeout(() => onNav("home"), 800); }}>
            Log in <ArrowRight size={16} />
          </CTA>
        </div>

        <div className="flex items-center gap-[10px] my-5">
          <div className="flex-1 h-px bg-ink/10" />
          <span className="text-[11px] text-muted">OR</span>
          <div className="flex-1 h-px bg-ink/10" />
        </div>

        <CTA variant="ghost" onClick={() => { onToast?.("OTP login"); onNav("signupC"); }}>
          <MessageSquare size={16} /> Continue with OTP
        </CTA>

        <p className="text-center mt-[22px] text-[13px] text-muted">
          New here?{" "}
          <button onClick={() => onNav("signupC")} className="text-copper font-medium border-0 bg-transparent cursor-pointer">
            Create account
          </button>
        </p>
      </div>
    </div>
  );
}
