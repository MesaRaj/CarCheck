import { useState } from "react";
import { Gift, Scan, ArrowRight } from "lucide-react";
import { StatusBar, BackButton, CTA } from "../components";

export default function VinScan({ onNav }) {
  const [vin, setVin] = useState("MA3FAEFKS00123456");

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("home")} />
          <p className="text-[16px] font-medium">Scan VIN</p>
        </div>

        <div className="mt-4 p-[15px] rounded-[13px]" style={{ background: "rgba(31,110,58,0.06)" }}>
          <div className="flex gap-[11px] items-start">
            <Gift size={22} className="text-green flex-shrink-0" />
            <div>
              <p className="text-[13px] font-medium">100% free</p>
              <p className="text-[11px] text-muted mt-[3px]">
                Get the car full government history — owner records, accidents, fines, RC status.
              </p>
            </div>
          </div>
        </div>

        {/* Camera view */}
        <div className="mt-4 relative h-[210px] bg-ink rounded-[13px] overflow-hidden flex items-center justify-center">
          <div className="absolute top-[22px] left-[22px] right-[22px] h-[166px] border-2 border-dashed border-white/40 rounded-[10px]" />
          <div className="absolute top-1/2 left-[22px] right-[22px] h-[2px] bg-copper anim-pulse" style={{ boxShadow: "0 0 12px #D44A11" }} />
          <div className="text-white text-center">
            <Scan size={54} className="text-copper mx-auto" />
            <p className="text-[14px] font-medium mt-[11px]">Scanning for VIN...</p>
            <p className="text-[11px] mt-[3px]" style={{ color: "rgba(255,255,255,0.6)" }}>Point camera at chassis number</p>
          </div>
        </div>

        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Or enter manually</p>
        <input
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          placeholder="17-digit VIN"
          className="w-full px-[14px] py-[12px] rounded-[11px] bg-white text-[14px] border-[0.5px] border-ink/10 focus:border-copper focus:outline-none"
          style={{ fontFamily: "inherit" }}
        />

        <div className="mt-4">
          <CTA onClick={() => onNav("vinReport")}>
            Get free report <ArrowRight size={16} />
          </CTA>
        </div>
      </div>
    </div>
  );
}
