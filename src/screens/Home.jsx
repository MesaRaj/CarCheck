import { Bell, ChevronDown, MapPin, ArrowRight, Scan, UserCheck, Store, History, Car } from "lucide-react";
import { StatusBar, BottomNav, BackButton } from "../components";
import { USER } from "../data";

// Logged-in customer home. Bottom nav switches between home/history/stores/account.
export default function Home({ onNav, location }) {
  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-[92px]">
        {/* Top bar */}
        <div className="flex items-center gap-[11px]">
          <button onClick={() => onNav("account")} className="tap w-[38px] h-[38px] rounded-full bg-ink text-cream flex items-center justify-center text-[13px] font-medium cursor-pointer">
            {USER.initials}
          </button>
          <button onClick={() => onNav("loc")} className="flex-1 text-left bg-transparent border-0 p-0 cursor-pointer">
            <p className="text-[9px] uppercase tracking-[0.1em] text-muted">
              Inspect at <ChevronDown size={10} className="inline" />
            </p>
            <p className="text-[13px] font-medium mt-[3px]">
              <MapPin size={13} className="inline text-copper" /> {location}
            </p>
          </button>
          <BackButton onClick={() => onNav("notif")} icon={
            <span className="relative">
              <Bell size={18} />
              <span className="absolute top-[-2px] right-[-3px] w-2 h-2 bg-copper rounded-full border-[1.5px] border-white" />
            </span>
          } />
        </div>

        {/* Hero card */}
        <div className="mt-4 bg-ink text-cream rounded-[14px] p-[15px] relative overflow-hidden">
          <div className="absolute right-[-30px] bottom-[-30px] w-[130px] h-[130px] rounded-full" style={{ background: "radial-gradient(circle, rgba(212,74,17,0.4), transparent 70%)" }} />
          <p className="text-[9px] uppercase tracking-[0.15em]" style={{ color: "rgba(250,247,241,0.5)" }}>Pre-purchase inspection</p>
          <p className="ff-d text-[22px] font-semibold mt-2 leading-[1.15]">
            Found a car?<br />Let us inspect it for you.
          </p>
          <p className="text-[12px] mb-[10px] mt-1" style={{ color: "rgba(250,247,241,0.65)" }}>
            Mechanic comes to seller location · 30-min check
          </p>
          <button onClick={() => onNav("selMech")} className="tap bg-copper text-cream px-4 py-[9px] rounded-[9px] text-[13px] font-medium cursor-pointer border-0 inline-flex items-center gap-1">
            Book mechanic · ₹899 <ArrowRight size={12} />
          </button>
        </div>

        {/* Service grid */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[10px]">Our services</p>
        <div className="grid grid-cols-2 gap-[9px]">
          <ServiceCard icon={<Scan size={17} className="text-green" />} bg="rgba(31,110,58,0.1)" title="VIN history" sub="Free · Instant" onClick={() => onNav("vinScan")} />
          <ServiceCard icon={<UserCheck size={17} className="text-copper" />} bg="rgba(212,74,17,0.1)" title="On-site inspection" sub="Mechanic comes" onClick={() => onNav("selMech")} />
          <ServiceCard icon={<Store size={17} style={{ color: "#185FA5" }} />} bg="rgba(133,183,235,0.2)" title="Drive-in stores" sub="30-40 min check" onClick={() => onNav("stores")} />
          <ServiceCard icon={<History size={17} />} bg="rgba(14,14,12,0.06)" title="My reports" sub="04 inspections" onClick={() => onNav("history")} />
        </div>

        {/* Trust score */}
        <button onClick={() => onNav("trust")} className="tap mt-[13px] w-full text-left bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10 cursor-pointer">
          <div className="flex justify-between items-center mb-[9px]">
            <div>
              <p className="text-[13px] font-medium">Your Trust Score</p>
              <p className="text-[11px] text-muted">Top 12% of buyers</p>
            </div>
            <p className="ff-d text-[26px] font-semibold text-green">{USER.trustScore}</p>
          </div>
          <div className="h-[6px] bg-ink/[0.06] rounded-full overflow-hidden">
            <div className="h-full rounded-full anim-bar" style={{ width: `${USER.trustScore}%`, background: "linear-gradient(90deg, #D44A11, #F2B544, #1F6E3A)" }} />
          </div>
        </button>

        {/* Active inspection */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[10px]">Active inspection</p>
        <button onClick={() => onNav("tracking")} className="tap w-full text-left bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10 cursor-pointer">
          <div className="flex gap-[11px] items-center">
            <div className="w-[42px] h-[42px] bg-bg rounded-[11px] flex items-center justify-center">
              <Car size={19} />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-medium">Hyundai Creta 2020</p>
              <p className="text-[11px] text-muted">Mechanic on the way · 18 min</p>
            </div>
            <span className="text-[10px] bg-copper text-white px-2 py-[3px] rounded-full font-medium">LIVE</span>
          </div>
        </button>
      </div>

      <BottomNav active="home" onChange={onNav} />
    </div>
  );
}

function ServiceCard({ icon, bg, title, sub, onClick }) {
  return (
    <button onClick={onClick} className="tap text-left bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10 cursor-pointer">
      <div className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center mb-[7px]" style={{ background: bg }}>
        {icon}
      </div>
      <p className="text-[13px] font-medium">{title}</p>
      <p className="text-[10px] text-muted">{sub}</p>
    </button>
  );
}
