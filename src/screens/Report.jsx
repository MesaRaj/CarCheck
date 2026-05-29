import { Download, AlertTriangle, Lightbulb, Car, Disc } from "lucide-react";
import { StatusBar, BackButton, CTA } from "../components";
import { REPORT } from "../data";
import { scoreColor, SEVERITY } from "../utils";

const FINDING_ICONS = {
  AlertTriangle, Paintbrush: AlertTriangle, Scissors: AlertTriangle, Disc, Car,
};

// Full 8-section inspection report.
// Covers scratches → engine → ownership → fines, exactly as user requested.
export default function Report({ onNav, onToast }) {
  const r = REPORT;
  const c = scoreColor(r.score);
  const overpriced = r.asking - r.priceMax;

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("home")} />
          <div className="flex-1">
            <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted">Inspection report</p>
            <p className="text-[13px] font-medium">{r.car}</p>
          </div>
          <BackButton icon={<Download size={18} />} onClick={() => onToast?.("Downloading PDF...")} />
        </div>

        {/* Score ring */}
        <div className="mt-4 bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10">
          <div className="flex gap-[15px] items-start">
            <div className="relative w-[84px] h-[84px]">
              <svg width="84" height="84" viewBox="0 0 84 84" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="42" cy="42" r="34" fill="none" stroke="rgba(14,14,12,0.08)" strokeWidth="6" />
                <circle
                  cx="42" cy="42" r="34" fill="none" stroke={c} strokeWidth="6"
                  strokeLinecap="round" strokeDasharray={`${(r.score / 100) * 213} 213`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="ff-d text-[24px] font-semibold leading-none">{r.score}</p>
                <p className="ff-m text-[9px] text-muted">/ 100</p>
              </div>
            </div>
            <div className="flex-1">
              <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted">Verdict</p>
              <p className="ff-d text-[20px] font-semibold mt-[3px]" style={{ color: c }}>{r.verdict}</p>
              <p className="text-[11px] text-muted">By {r.inspectedBy} · 140-point check</p>
            </div>
          </div>
        </div>

        {/* Price recommendation */}
        <div className="mt-[11px] bg-ink text-cream p-[15px] rounded-[14px]">
          <p className="text-[10px] uppercase" style={{ color: "rgba(250,247,241,0.65)" }}>Recommended price range</p>
          <p className="ff-d text-[26px] font-semibold mt-[7px]">
            ₹{(r.priceMin / 100000).toFixed(2)}L – ₹{(r.priceMax / 100000).toFixed(2)}L
          </p>
          <p className="text-[11px]" style={{ color: "rgba(250,247,241,0.65)" }}>
            Based on 1,840 similar cars sold in last 90 days
          </p>
          <div className="mt-[13px] pt-[13px] border-t-[0.5px] border-cream/10 flex justify-between">
            <div>
              <p className="text-[11px]" style={{ color: "rgba(250,247,241,0.5)" }}>Seller asks</p>
              <p className="text-[15px] font-medium">₹{(r.asking / 100000).toFixed(2)}L</p>
            </div>
            <div className="text-right">
              <p className="text-[11px]" style={{ color: "rgba(250,247,241,0.5)" }}>Overpriced by</p>
              <p className="text-[15px] font-medium" style={{ color: "#F7C1C1" }}>₹{overpriced.toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>

        {/* 8 section scores */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Section scores</p>
        <div className="bg-white rounded-[14px] border-[0.5px] border-ink/10 overflow-hidden">
          {r.sections.map((s, i) => (
            <div
              key={s.name}
              className="p-[12px] px-[15px]"
              style={{ borderTop: i > 0 ? "0.5px solid rgba(14,14,12,0.06)" : "none" }}
            >
              <div className="flex justify-between mb-[6px]">
                <p className="text-[13px] font-medium">{s.name}</p>
                <span className="ff-m text-[12px] font-medium">{s.score}</span>
              </div>
              <div className="h-[5px] bg-bg rounded-full overflow-hidden mb-[5px]">
                <div className="h-full rounded-full" style={{ width: `${s.score}%`, background: scoreColor(s.score) }} />
              </div>
              <p className="text-[11px] text-muted">{s.status}</p>
            </div>
          ))}
        </div>

        {/* Key findings */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Key findings</p>
        <div className="flex flex-col gap-[9px]">
          {r.findings.map((f, i) => {
            const sev = SEVERITY[f.severity];
            const Icon = FINDING_ICONS[f.icon] || AlertTriangle;
            return (
              <div key={i} className="bg-white p-[12px] rounded-[14px] border-[0.5px] border-ink/10 flex gap-[11px]">
                <div className="w-8 h-8 rounded-[9px] flex items-center justify-center flex-shrink-0" style={{ background: sev.bg }}>
                  <Icon size={15} style={{ color: sev.fg }} />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-medium">{f.title}</p>
                  <p className="text-[11px] text-muted mt-[3px]">{f.cost}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Our recommendation */}
        <div className="mt-[13px] p-[15px] rounded-[14px] border-[0.5px]" style={{ background: "rgba(31,110,58,0.05)", borderColor: "rgba(31,110,58,0.2)" }}>
          <div className="flex gap-[11px]">
            <Lightbulb size={22} className="text-green flex-shrink-0" />
            <div>
              <p className="text-[13px] font-medium">Our recommendation</p>
              <p className="text-[11px] text-muted mt-[3px]">{r.recommendation}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-[9px] mt-4">
          <button onClick={() => onToast?.("Sharing report...")} className="tap flex-1 py-[14px] rounded-[11px] bg-transparent border-[0.5px] border-ink/15 text-[13px] cursor-pointer" style={{ fontFamily: "inherit" }}>
            Share with seller
          </button>
          <CTA onClick={() => onToast?.("Downloading PDF...")} style={{ flex: 1 }}>
            Download PDF
          </CTA>
        </div>
      </div>
    </div>
  );
}
