import { ChevronRight } from "lucide-react";
import { StatusBar, BackButton, BottomNav } from "../components";
import { PAST_REPORTS } from "../data";

const COLOR_MAP = {
  copper: { fg: "#D44A11", bg: "rgba(212,74,17,0.1)" },
  green: { fg: "#1F6E3A", bg: "rgba(31,110,58,0.1)" },
  red: { fg: "#B12A2A", bg: "rgba(177,42,42,0.1)" },
};

export default function History({ onNav }) {
  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-[92px]">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("home")} />
          <p className="text-[16px] font-medium flex-1">My inspection reports</p>
        </div>

        {/* Year summary */}
        <div className="mt-4 bg-ink text-cream p-[15px] rounded-[14px]">
          <p className="text-[10px]" style={{ color: "rgba(250,247,241,0.65)" }}>THIS YEAR</p>
          <p className="ff-d text-[40px] font-semibold my-[5px]">04</p>
          <p className="text-[12px]" style={{ color: "rgba(250,247,241,0.65)" }}>inspections completed</p>
          <div className="mt-[13px] pt-[13px] border-t-[0.5px] border-cream/10 flex gap-5">
            <SummaryStat label="BOUGHT" value="02" />
            <SummaryStat label="SKIPPED" value="02" />
            <SummaryStat label="SAVED" value="₹1.2L" color="#97C459" />
          </div>
        </div>

        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">All reports</p>
        <div className="flex flex-col gap-[9px]">
          {PAST_REPORTS.map((r) => {
            const c = COLOR_MAP[r.color];
            return (
              <button
                key={r.id}
                onClick={() => onNav("report")}
                className="tap bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10 text-left cursor-pointer"
              >
                <div className="flex gap-[11px]">
                  <div className="w-11 h-11 rounded-[11px] flex items-center justify-center flex-shrink-0" style={{ background: c.bg }}>
                    <p className="ff-d text-[15px] font-semibold" style={{ color: c.fg }}>{r.score}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[7px]">
                      <p className="text-[13px] font-medium">{r.car}</p>
                      {r.live && (
                        <span className="text-[9px] bg-copper text-white px-[6px] py-[2px] rounded font-medium">LIVE</span>
                      )}
                    </div>
                    <p className="text-[11px] text-muted mt-[3px]">{r.id} · {r.date}</p>
                    <p className="text-[11px] font-medium mt-1" style={{ color: c.fg }}>{r.verdict}</p>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <BottomNav active="history" onChange={onNav} />
    </div>
  );
}

function SummaryStat({ label, value, color }) {
  return (
    <div>
      <p className="text-[9px]" style={{ color: "rgba(250,247,241,0.5)" }}>{label}</p>
      <p className="text-[15px] font-medium mt-[3px]" style={{ color: color || "#FAF7F1" }}>{value}</p>
    </div>
  );
}
