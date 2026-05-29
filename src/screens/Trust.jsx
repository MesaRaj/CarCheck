import { StatusBar, BackButton } from "../components";
import { USER } from "../data";

export default function Trust({ onNav }) {
  const factors = [
    { name: "Identity verified", points: 25, max: 25, sub: "Aadhaar + PAN linked" },
    { name: "Communication", points: 18, max: 20, sub: "Responds in 2 hours" },
    { name: "Past inspections", points: 20, max: 25, sub: "3 completed" },
    { name: "Payment reliability", points: 15, max: 15, sub: "No defaults" },
    { name: "Community feedback", points: 9, max: 15, sub: "4 mechanics rated 5★" },
  ];

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("account")} />
          <p className="text-[16px] font-medium">Trust Score</p>
        </div>

        <div className="mt-4 bg-ink text-cream p-[15px] rounded-[14px] text-center">
          <p className="text-[10px]" style={{ color: "rgba(250,247,241,0.65)" }}>YOUR SCORE</p>
          <p className="ff-d text-[54px] font-semibold my-[9px]">
            {USER.trustScore}<span className="text-[18px]" style={{ color: "rgba(250,247,241,0.4)" }}>/100</span>
          </p>
          <p className="text-[13px] font-medium" style={{ color: "#97C459" }}>Top 12% of buyers in Hyderabad</p>
        </div>

        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Calculation</p>
        <div className="bg-white rounded-[14px] border-[0.5px] border-ink/10 overflow-hidden">
          {factors.map((r, i) => (
            <div key={r.name} className="p-[12px] px-[15px]" style={{ borderBottom: i < factors.length - 1 ? "0.5px solid rgba(14,14,12,0.06)" : "none" }}>
              <div className="flex justify-between mb-[6px]">
                <p className="text-[13px] font-medium">{r.name}</p>
                <span className="ff-m text-[12px]">{r.points}/{r.max}</span>
              </div>
              <div className="h-[5px] bg-bg rounded-full overflow-hidden mb-[5px]">
                <div className="h-full bg-green rounded-full" style={{ width: `${(r.points / r.max) * 100}%` }} />
              </div>
              <p className="text-[11px] text-muted">{r.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-[13px] bg-white p-[15px] rounded-[14px] border-[0.5px] border-ink/10">
          <p className="text-[13px] font-medium">Why this matters</p>
          <p className="text-[11px] text-muted mt-[3px]">
            Higher score = better mechanics assigned first · faster booking · partner discounts.
          </p>
        </div>
      </div>
    </div>
  );
}
