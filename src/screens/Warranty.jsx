import { Check } from "lucide-react";
import { StatusBar, BackButton } from "../components";

export default function Warranty({ onNav }) {
  const coverage = [
    { title: "Engine failure", amount: "Up to ₹1,00,000" },
    { title: "Transmission issues", amount: "Up to ₹75,000" },
    { title: "Hidden frame damage", amount: "Up to ₹1,50,000" },
    { title: "Title fraud", amount: "Full refund" },
    { title: "Odometer tampering", amount: "Full refund" },
  ];

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("account")} />
          <p className="text-[16px] font-medium">30-day warranty</p>
        </div>

        <div className="mt-4 bg-ink text-cream p-[15px] rounded-[14px]">
          <p className="text-[10px]" style={{ color: "rgba(250,247,241,0.65)" }}>BUYER PROTECTION</p>
          <p className="ff-d text-[26px] font-semibold my-[7px]">Money-back guarantee</p>
          <p className="text-[12px]" style={{ color: "rgba(250,247,241,0.65)" }}>
            If our report missed a defect costing ₹10K+, we will cover it.
          </p>
        </div>

        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">What is covered</p>
        <div className="bg-white rounded-[14px] border-[0.5px] border-ink/10 overflow-hidden">
          {coverage.map((c, i) => (
            <div key={c.title} className="p-[12px] px-[15px] flex justify-between" style={{ borderTop: i > 0 ? "0.5px solid rgba(14,14,12,0.06)" : "none" }}>
              <div className="flex gap-[9px] items-center">
                <Check size={15} className="text-green" />
                <span className="text-[13px]">{c.title}</span>
              </div>
              <span className="text-[12px] font-medium">{c.amount}</span>
            </div>
          ))}
        </div>

        <div className="mt-[13px] p-[15px] rounded-[14px]" style={{ background: "rgba(212,74,17,0.05)" }}>
          <p className="text-[13px] font-medium">How it works</p>
          <p className="text-[11px] text-muted mt-[5px]">
            Every inspection auto-includes this warranty. No extra cost. Found a hidden issue? File a claim, we verify, we pay the repair.
          </p>
        </div>

        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Underwritten by</p>
        <div className="flex gap-[9px]">
          <div className="flex-1 py-[9px] px-[13px] bg-ink text-white rounded-[9px] text-[11px] font-medium text-center">
            ICICI Lombard
          </div>
          <div className="flex-1 py-[9px] px-[13px] bg-ink text-white rounded-[9px] text-[11px] font-medium text-center">
            HDFC Ergo
          </div>
        </div>
      </div>
    </div>
  );
}
