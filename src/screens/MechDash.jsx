import { BadgeCheck, MapPin, Home, Coins, History as HistoryIcon, User, Camera, GraduationCap, Wallet, Trophy } from "lucide-react";
import { StatusBar } from "../components";

export default function MechDash({ onNav, onToast }) {
  const jobs = [
    { car: "Hyundai Creta 2020", loc: "Banjara Hills", time: "15 min away", price: 899, match: "Match: Maruti & Hyundai expert" },
    { car: "Tata Nexon 2021", loc: "Madhapur", time: "22 min away", price: 749, match: "4.2km" },
  ];

  const tools = [
    { Icon: Camera, title: "Inspection app", sub: "140-point checklist" },
    { Icon: GraduationCap, title: "Training", sub: "Earn certifications" },
    { Icon: Wallet, title: "Instant payout", sub: "To bank in 5 min" },
    { Icon: Trophy, title: "Leaderboard", sub: "Rank #4 this week" },
  ];

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-[92px]">
        {/* Header */}
        <div className="flex items-center gap-[11px]">
          <div className="w-[38px] h-[38px] bg-green text-cream rounded-full flex items-center justify-center text-[13px] font-medium">
            RK
          </div>
          <div className="flex-1">
            <p className="text-[9px] uppercase text-muted">Welcome back</p>
            <p className="text-[14px] font-medium mt-[3px] flex items-center gap-1">
              Ravi Teja <BadgeCheck size={13} className="text-copper" />
            </p>
          </div>
          <div className="bg-green text-white px-[13px] py-[6px] rounded-full text-[11px] font-medium flex items-center gap-[7px]">
            <span className="w-[6px] h-[6px] rounded-full" style={{ background: "#97C459" }} />
            Online
          </div>
        </div>

        {/* Earnings card */}
        <div className="mt-4 bg-ink text-cream p-[15px] rounded-[14px]">
          <p className="text-[10px]" style={{ color: "rgba(250,247,241,0.65)" }}>TODAY EARNINGS</p>
          <p className="ff-d text-[36px] font-semibold my-[7px]">₹3,840</p>
          <div className="flex gap-[18px] mt-[11px] pt-[11px] border-t-[0.5px] border-cream/10">
            <EarningStat label="JOBS" value="4 done" />
            <EarningStat label="THIS MONTH" value="₹62,400" />
            <EarningStat label="RATING" value="4.9 ★" />
          </div>
        </div>

        {/* Jobs */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">New requests · 2 waiting</p>
        <div className="flex flex-col gap-[9px]">
          {jobs.map((j, i) => (
            <div key={i} className="bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[13px] font-medium">{j.car}</p>
                  <p className="text-[11px] text-muted">
                    <MapPin size={11} className="inline" /> {j.loc} · {j.time}
                  </p>
                  <span className="inline-block mt-[7px] text-[9px] px-[7px] py-[3px] rounded font-medium text-green" style={{ background: "rgba(31,110,58,0.1)" }}>
                    {j.match}
                  </span>
                </div>
                <p className="ff-d text-[15px] font-semibold">+₹{j.price}</p>
              </div>
              <div className="flex gap-[7px] mt-[11px]">
                <button onClick={() => onToast?.("Job declined")} className="tap flex-1 bg-white border-[0.5px] border-ink/15 py-[9px] rounded-[9px] text-[12px] cursor-pointer" style={{ fontFamily: "inherit" }}>
                  Decline
                </button>
                <button onClick={() => onToast?.("Job accepted!")} className="tap py-[9px] rounded-[9px] text-[12px] font-medium cursor-pointer border-0 text-white" style={{ flex: 1.5, background: "#1F6E3A", fontFamily: "inherit" }}>
                  Accept · {i === 0 ? "12s" : "28s"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pro tools */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Pro tools</p>
        <div className="grid grid-cols-2 gap-[7px]">
          {tools.map(({ Icon, title, sub }) => (
            <div key={title} className="bg-white p-[11px] rounded-[14px] border-[0.5px] border-ink/10">
              <Icon size={19} className="text-copper" />
              <p className="text-[12px] font-medium mt-[7px]">{title}</p>
              <p className="text-[10px] text-muted">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mechanic-side bottom nav */}
      <div className="absolute bottom-[10px] left-[10px] right-[10px] bg-ink rounded-[20px] p-[7px] flex gap-1 z-10">
        <NavBtn Icon={Home} label="Jobs" active />
        <NavBtn Icon={Coins} label="Earnings" onClick={() => onToast?.("Earnings — coming in V2")} />
        <NavBtn Icon={HistoryIcon} label="History" onClick={() => onToast?.("History — coming in V2")} />
        <NavBtn Icon={User} label="Profile" onClick={() => onToast?.("Profile — coming in V2")} />
      </div>
    </div>
  );
}

function EarningStat({ label, value }) {
  return (
    <div>
      <p className="text-[9px]" style={{ color: "rgba(250,247,241,0.5)" }}>{label}</p>
      <p className="text-[15px] font-medium mt-[3px]">{value}</p>
    </div>
  );
}

function NavBtn({ Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="tap flex-1 flex flex-col items-center gap-[2px] py-2 px-1 rounded-[13px] cursor-pointer border-0"
      style={{
        background: active ? "#D44A11" : "transparent",
        color: active ? "#FAF7F1" : "rgba(250,247,241,0.55)",
        fontFamily: "inherit",
      }}
    >
      <Icon size={16} />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
