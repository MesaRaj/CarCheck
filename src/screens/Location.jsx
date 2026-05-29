import { useState } from "react";
import { Crosshair, Search, MapPin, Check } from "lucide-react";
import { StatusBar, BackButton } from "../components";
import { LOCATIONS } from "../data";

// Location picker. GPS auto-detect (simulated) + manual search + suggestions list.
export default function Location({ onNav, location, setLocation, onToast }) {
  const [autoLoc, setAutoLoc] = useState(false);

  const handleGPS = () => {
    setAutoLoc(true);
    setTimeout(() => {
      setAutoLoc(false);
      setLocation("Banjara Hills, Hyderabad");
      onToast?.("Location detected");
      onNav("home");
    }, 1500);
  };

  const pickLoc = (loc) => {
    setLocation(loc);
    onToast?.("Location updated");
    setTimeout(() => onNav("home"), 600);
  };

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("home")} />
          <p className="text-[16px] font-medium">Where is the car?</p>
        </div>

        {/* Map preview */}
        <div className="mt-4 relative h-[170px] rounded-[15px] overflow-hidden" style={{ background: "linear-gradient(135deg, #E1F5EE, #C0DD97)" }}>
          <svg width="100%" height="100%" viewBox="0 0 320 170" preserveAspectRatio="none">
            <path d="M0 85 Q80 60 160 85 T320 85" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none" />
            <rect x="40" y="30" width="30" height="25" fill="rgba(255,255,255,0.4)" rx="2" />
            <rect x="220" y="40" width="40" height="30" fill="rgba(255,255,255,0.4)" rx="2" />
            <rect x="100" y="105" width="35" height="22" fill="rgba(255,255,255,0.4)" rx="2" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-5 h-5 bg-copper rounded-full border-[3px] border-white" style={{ boxShadow: "0 0 0 7px rgba(212,74,17,0.25)" }} />
          </div>
          <div className="absolute bottom-[11px] left-[11px] right-[11px] bg-white/95 rounded-[9px] px-[11px] py-[9px] flex items-center gap-2">
            <Crosshair size={14} className="text-copper" />
            <span className="text-[13px] font-medium">{location}</span>
          </div>
        </div>

        {/* GPS button */}
        <button onClick={handleGPS} className="tap mt-4 w-full bg-white p-[15px] rounded-[14px] border-[0.5px] border-ink/10 cursor-pointer flex items-center gap-[13px]">
          <div className="w-11 h-11 rounded-[13px] flex items-center justify-center" style={{ background: "rgba(212,74,17,0.1)" }}>
            {autoLoc ? (
              <div className="w-5 h-5 border-2 border-copper border-t-transparent rounded-full anim-spin" />
            ) : (
              <Crosshair size={22} className="text-copper" />
            )}
          </div>
          <div className="flex-1 text-left">
            <p className="text-[14px] font-medium">{autoLoc ? "Detecting..." : "Use current location"}</p>
            <p className="text-[11px] text-muted">{autoLoc ? "Reading GPS" : "Auto-detect via GPS"}</p>
          </div>
        </button>

        {/* Search */}
        <div className="mt-[11px] bg-white p-[11px] px-[15px] rounded-[14px] border-[0.5px] border-ink/10 flex items-center gap-[9px]">
          <Search size={16} className="text-muted" />
          <input placeholder="Search area, locality, landmark" className="flex-1 bg-transparent border-0 outline-none text-[14px]" style={{ fontFamily: "inherit" }} />
        </div>

        {/* Suggestions */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Suggested</p>
        {LOCATIONS.map((s) => (
          <button
            key={s}
            onClick={() => pickLoc(s)}
            className="tap w-full text-left py-3 px-2 flex items-center gap-[11px] border-0 bg-transparent cursor-pointer border-b-[0.5px] border-ink/[0.05]"
          >
            <MapPin size={17} className="text-muted" />
            <div className="flex-1">
              <p className="text-[13px]">{s.split(",")[0]}</p>
              <p className="text-[10px] text-muted">{s.split(",")[1].trim()}</p>
            </div>
            {s === location && <Check size={16} className="text-copper" />}
          </button>
        ))}
      </div>
    </div>
  );
}
