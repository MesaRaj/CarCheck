import { Share2, AlertTriangle, ArrowRight } from "lucide-react";
import { StatusBar, BackButton, CTA } from "../components";
import { VIN_REPORT } from "../data";

const COLOR_MAP = {
  green: "#97C459",
  amber: "#F2B544",
  red: "#B12A2A",
  ink: "#FAF7F1",
  muted: "#7A7972",
};

export default function VinReport({ onNav }) {
  const r = VIN_REPORT;
  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("vinScan")} />
          <div className="flex-1">
            <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted">Government records</p>
            <p className="text-[13px] font-medium">{r.vin}</p>
          </div>
          <BackButton icon={<Share2 size={18} />} />
        </div>

        {/* Hero card */}
        <div className="mt-4 bg-ink text-cream rounded-[14px] p-[15px]">
          <p className="text-[10px] uppercase" style={{ color: "rgba(250,247,241,0.5)" }}>
            Verified by VAHAN · NCRB
          </p>
          <p className="ff-d text-[22px] font-semibold mt-[7px]">{r.car}</p>
          <p className="text-[12px]" style={{ color: "rgba(250,247,241,0.65)" }}>
            {r.year} · {r.fuel} · {r.reg}
          </p>
          <div className="mt-[15px] pt-[15px] grid grid-cols-2 gap-[9px] border-t-[0.5px] border-cream/10">
            <SummaryItem field="Status" label={r.summary.status.label} color={r.summary.status.color} />
            <SummaryItem field="Owners" label={r.summary.owners.label} color={r.summary.owners.color} />
            <SummaryItem field="Accidents" label={r.summary.accidents.label} color={r.summary.accidents.color} />
            <SummaryItem field="Theft" label={r.summary.theft.label} color={r.summary.theft.color} />
          </div>
        </div>

        {/* Timeline */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Timeline</p>
        <div className="bg-white rounded-[14px] border-[0.5px] border-ink/10 overflow-hidden">
          {r.timeline.map((t, i) => (
            <div
              key={i}
              className="p-[13px] px-[15px] flex gap-[11px]"
              style={{ borderTop: i > 0 ? "0.5px solid rgba(14,14,12,0.06)" : "none" }}
            >
              <div className="w-[7px] h-[7px] rounded-full mt-[7px]" style={{ background: COLOR_MAP[t.color] || "#7A7972" }} />
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-[13px] font-medium">{t.title}</p>
                  <p className="ff-m text-[10px] uppercase tracking-[0.06em] text-muted">{t.year}</p>
                </div>
                <p className="text-[11px] text-muted mt-[2px]">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="mt-[13px] p-[15px] rounded-[14px] border-[0.5px]" style={{ background: "rgba(242,181,68,0.08)", borderColor: "rgba(242,181,68,0.3)" }}>
          <div className="flex gap-[11px]">
            <AlertTriangle size={22} style={{ color: "#854F0B" }} />
            <div>
              <p className="text-[13px] font-medium">Worth physical check</p>
              <p className="text-[11px] text-muted mt-[3px]">Past accident needs body alignment, paint, chassis verification.</p>
            </div>
          </div>
          <div className="mt-[13px]">
            <CTA onClick={() => onNav("selMech")}>
              Book inspection · ₹899 <ArrowRight size={16} />
            </CTA>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryItem({ field, label, color }) {
  return (
    <div>
      <p className="text-[9px] uppercase" style={{ color: "rgba(250,247,241,0.5)" }}>{field}</p>
      <p className="text-[13px] font-medium mt-[3px]" style={{ color: COLOR_MAP[color] || "#FAF7F1" }}>{label}</p>
    </div>
  );
}
