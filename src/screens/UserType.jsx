import { ChevronRight, Scan, Wrench } from "lucide-react";
import { StatusBar, BackButton } from "../components";

// Role select. Buyer → signup. Mechanic → dashboard.
// Bottom has login link for existing users.
export default function UserType({ onNav }) {
  return (
    <div className="absolute inset-0 flex flex-col anim-fade" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-[18px] pt-3 pb-6 flex-1 overflow-y-auto no-scrollbar">
        <BackButton onClick={() => onNav("splash")} />
        <h1 className="ff-d text-[24px] font-semibold mt-5 leading-[1.1]">
          Welcome to<br />CarCheck
        </h1>
        <p className="text-[13px] text-muted mt-2">Independent inspection for any used car</p>

        <button
          onClick={() => onNav("signupC")}
          className="tap w-full text-left bg-white rounded-[14px] p-[13px] mt-5 flex gap-3 items-start border-[0.5px] border-ink/10"
        >
          <div className="w-11 h-11 bg-copper/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Scan size={22} className="text-copper" />
          </div>
          <div className="flex-1">
            <p className="text-[15px] font-medium">I am buying a used car</p>
            <p className="text-[13px] text-muted mt-[3px]">Book inspection · get condition report</p>
          </div>
          <ChevronRight size={16} className="text-muted mt-2" />
        </button>

        <button
          onClick={() => onNav("mechDash")}
          className="tap w-full text-left bg-white rounded-[14px] p-[13px] mt-[11px] flex gap-3 items-start border-[0.5px] border-ink/10"
        >
          <div className="w-11 h-11 bg-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Wrench size={22} className="text-green" />
          </div>
          <div className="flex-1">
            <p className="text-[15px] font-medium">I am a mechanic</p>
            <p className="text-[13px] text-muted mt-[3px]">Earn ₹35K-₹80K per month</p>
          </div>
          <ChevronRight size={16} className="text-muted mt-2" />
        </button>

        <div className="mt-6 p-[15px] rounded-[11px]" style={{ background: "rgba(212,74,17,0.05)" }}>
          <p className="text-[11px] font-medium" style={{ color: "#993C1D" }}>
            100% Independent · Founded by Mesa Raj Kumar
          </p>
          <p className="text-[11px] text-muted mt-[5px]">
            We do not sell cars. We just check them. No conflict of interest, only honest reports.
          </p>
        </div>

        <p className="text-center mt-5 text-[13px] text-muted">
          Have an account?{" "}
          <button onClick={() => onNav("login")} className="text-copper font-medium border-0 bg-transparent cursor-pointer">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
