import { BadgeCheck, ChevronRight, LogOut, ShieldCheck, History as HistoryIcon, Shield, Gift, Lock, PresentationIcon } from "lucide-react";
import { StatusBar, BottomNav, BackButton } from "../components";
import { USER } from "../data";

export default function Account({ onNav }) {
  const items = [
    { icon: ShieldCheck, title: "Trust Score", sub: `${USER.trustScore}/100 · Top 12%`, link: "trust" },
    { icon: HistoryIcon, title: "My reports", sub: "04 inspections", link: "history" },
    { icon: Shield, title: "30-day warranty", sub: "Buyer protection", link: "warranty" },
    { icon: Gift, title: "Refer & earn", sub: "₹2,000 earned", link: "referral" },
    { icon: Lock, title: "Escrow", sub: "For safe payments", link: "escrow" },
    { icon: PresentationIcon, title: "Investor pitch", sub: "Mesa Raj Kumar founder", link: "pitch" },
  ];

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-[92px]">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("home")} />
          <p className="text-[16px] font-medium">My account</p>
        </div>

        {/* User card */}
        <div className="mt-4 bg-ink text-cream rounded-[14px] p-[15px]">
          <div className="flex gap-[15px] items-center">
            <div className="w-[60px] h-[60px] bg-copper rounded-[15px] flex items-center justify-center text-[22px] font-medium">
              {USER.initials}
            </div>
            <div>
              <p className="ff-d text-[18px] font-semibold">{USER.name}</p>
              <p className="text-[11px] mt-[3px]" style={{ color: "rgba(250,247,241,0.65)" }}>{USER.email}</p>
              <p className="ff-m text-[11px]" style={{ color: "rgba(250,247,241,0.65)" }}>+91 {USER.mobile}</p>
            </div>
          </div>
          <div className="mt-[13px] pt-[13px] border-t-[0.5px] border-cream/10 flex gap-[9px] items-center">
            <BadgeCheck size={16} className="text-amber" />
            <span className="text-[11px]">Email & mobile verified · Trust Score {USER.trustScore}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-[7px] mt-[11px]">
          <Stat n="04" label="Inspections" />
          <Stat n="₹1.2L" label="Saved" color="text-green" />
          <Stat n="4.9" label="Rating" />
        </div>

        {/* Quick access */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[9px]">Quick access</p>
        <div className="bg-white rounded-[14px] border-[0.5px] border-ink/10 overflow-hidden">
          {items.map(({ icon: Icon, title, sub, link }, idx) => (
            <button
              key={link}
              onClick={() => onNav(link)}
              className="tap w-full p-[13px] px-[15px] flex items-center gap-[11px] bg-transparent border-0 cursor-pointer"
              style={{ borderTop: idx > 0 ? "0.5px solid rgba(14,14,12,0.06)" : "none" }}
            >
              <div className="w-[34px] h-[34px] bg-bg rounded-[9px] flex items-center justify-center">
                <Icon size={15} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[13px] font-medium">{title}</p>
                <p className="text-[11px] text-muted">{sub}</p>
              </div>
              <ChevronRight size={16} className="text-muted" />
            </button>
          ))}
        </div>

        {/* Logout */}
        <button onClick={() => onNav("userType")} className="tap mt-[11px] w-full bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10 cursor-pointer flex items-center gap-[11px]">
          <div className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center" style={{ background: "rgba(177,42,42,0.1)" }}>
            <LogOut size={15} className="text-red" />
          </div>
          <span className="flex-1 text-left text-[13px] font-medium text-red">Log out</span>
        </button>
      </div>
      <BottomNav active="account" onChange={onNav} />
    </div>
  );
}

function Stat({ n, label, color }) {
  return (
    <div className="bg-white p-[11px] rounded-[14px] border-[0.5px] border-ink/10 text-center">
      <p className={`ff-d text-[18px] font-semibold ${color || ""}`}>{n}</p>
      <p className="text-[10px] text-muted">{label}</p>
    </div>
  );
}
