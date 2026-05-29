import { StatusBar, BackButton } from "../components";
import { PITCH } from "../data";

export default function Pitch({ onNav }) {
  const p = PITCH;
  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("account")} />
          <p className="text-[16px] font-medium">Why CarCheck</p>
        </div>

        {/* Problem */}
        <div className="mt-4 bg-ink text-cream p-[15px] rounded-[14px]">
          <p className="text-[10px]" style={{ color: "rgba(250,247,241,0.65)" }}>THE PROBLEM</p>
          <p className="ff-d text-[20px] font-semibold my-[7px] leading-[1.3]">{p.problem.headline}</p>
          <p className="text-[12px]" style={{ color: "rgba(250,247,241,0.65)" }}>{p.problem.detail}</p>
        </div>

        {/* Market */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">The market</p>
        <div className="bg-white p-[15px] rounded-[14px] border-[0.5px] border-ink/10">
          <p className="ff-d text-[28px] font-semibold">{p.market.size}</p>
          <p className="text-[11px] text-muted">{p.market.detail}</p>
        </div>

        {/* Solution */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Our solution</p>
        <div className="bg-green text-white p-[15px] rounded-[14px]">
          <p className="text-[14px] font-medium">{p.solution.title}</p>
          <p className="text-[11px] mt-[5px]" style={{ color: "rgba(255,255,255,0.8)" }}>{p.solution.detail}</p>
        </div>

        {/* Revenue streams */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Revenue streams</p>
        <div className="bg-white rounded-[14px] border-[0.5px] border-ink/10 overflow-hidden">
          {p.revenue.map((r, i) => (
            <div
              key={r.name}
              className="p-[12px] px-[15px] flex items-center gap-[11px]"
              style={{ borderTop: i > 0 ? "0.5px solid rgba(14,14,12,0.06)" : "none" }}
            >
              <div className="flex-1">
                <p className="text-[13px] font-medium">{r.name}</p>
                <p className="text-[10px] text-muted">{r.basis}</p>
              </div>
              <p className="ff-d text-[14px] font-semibold">{r.value}</p>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-[11px] bg-ink text-cream p-[15px] rounded-[14px]">
          <p className="text-[10px]" style={{ color: "rgba(250,247,241,0.65)" }}>TOTAL AT SCALE</p>
          <p className="ff-d text-[26px] font-semibold my-[5px]">{p.totalMRR}</p>
          <p className="text-[11px]" style={{ color: "#97C459" }}>{p.totalARR}</p>
        </div>

        {/* Moats */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Why we win</p>
        <div className="flex flex-col gap-[7px]">
          {p.moats.map((m) => (
            <div key={m.num} className="bg-white p-[12px] rounded-[14px] border-[0.5px] border-ink/10 flex gap-[11px]">
              <span className="ff-m text-[11px] text-copper font-medium">{m.num}</span>
              <div>
                <p className="text-[13px] font-medium">{m.title}</p>
                <p className="text-[11px] text-muted">{m.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder */}
        <div className="mt-[13px] p-[15px] rounded-[14px] border-[0.5px]" style={{ background: "rgba(212,74,17,0.05)", borderColor: "rgba(212,74,17,0.2)" }}>
          <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted">Founder</p>
          <p className="ff-d text-[16px] font-semibold mt-[5px]">{p.founder.name}</p>
          <p className="text-[11px] text-muted">{p.founder.tagline}</p>
        </div>
      </div>
    </div>
  );
}
