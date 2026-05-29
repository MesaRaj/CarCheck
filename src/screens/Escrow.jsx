import { ShieldCheck } from "lucide-react";
import { StatusBar, BackButton, CTA } from "../components";

export default function Escrow({ onNav, onToast }) {
  const steps = [
    { num: "01", title: "Deposit money in escrow", sub: "Held by IDFC First Bank" },
    { num: "02", title: "Seller hands over the car", sub: "You verify all docs" },
    { num: "03", title: "RC transfer initiated", sub: "We file Form 29/30" },
    { num: "04", title: "Money released to seller", sub: "After you confirm receipt" },
  ];

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("account")} />
          <p className="text-[16px] font-medium">Escrow payment</p>
        </div>

        <div className="mt-4 bg-ink text-cream p-[15px] rounded-[14px]">
          <div className="flex gap-[11px] items-center mb-[11px]">
            <ShieldCheck size={24} style={{ color: "#97C459" }} />
            <p className="text-[14px] font-medium">Safe car payment service</p>
          </div>
          <p className="text-[11px] leading-[1.5]" style={{ color: "rgba(250,247,241,0.65)" }}>
            For final car purchase, use our escrow service. Your money sits safe in a regulated account until you receive the car.
          </p>
        </div>

        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">How it works</p>
        <div className="bg-white rounded-[14px] border-[0.5px] border-ink/10 overflow-hidden">
          {steps.map((s, i) => (
            <div key={s.num} className="p-[13px] px-[15px] flex gap-[13px]" style={{ borderTop: i > 0 ? "0.5px solid rgba(14,14,12,0.06)" : "none" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,74,17,0.1)" }}>
                <span className="ff-m text-[11px] text-copper font-medium">{s.num}</span>
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-medium">{s.title}</p>
                <p className="text-[11px] text-muted">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[13px] bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10">
          <div className="flex justify-between">
            <p className="text-[13px] font-medium">Charges</p>
            <p className="ff-d text-[15px] font-semibold">₹999</p>
          </div>
          <p className="text-[11px] text-muted mt-[5px]">
            0.21% of transaction · Fully refundable if deal cancels in 48h
          </p>
        </div>

        <div className="mt-4">
          <button
            onClick={() => onToast?.("Escrow flow — coming in V2")}
            className="tap w-full py-[14px] rounded-[11px] bg-transparent border-[0.5px] border-ink/15 text-[13px] cursor-pointer"
            style={{ fontFamily: "inherit" }}
          >
            Activate escrow for a deal
          </button>
        </div>
      </div>
    </div>
  );
}
