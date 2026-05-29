import { Store as StoreIcon, Clock, Star, CalendarCheck } from "lucide-react";
import { StatusBar, BackButton, BottomNav, Chip } from "../components";
import { STORES } from "../data";

// List of nearby drive-in inspection stores.
export default function Stores({ onNav, location }) {
  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-[92px]">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("home")} />
          <div className="flex-1">
            <p className="text-[16px] font-medium">Drive-in stores</p>
            <p className="text-[11px] text-muted">{location}</p>
          </div>
        </div>

        {/* Hero */}
        <div className="mt-4 p-[13px] rounded-[14px]" style={{ background: "linear-gradient(135deg, rgba(212,74,17,0.1), rgba(212,74,17,0.04))" }}>
          <div className="flex gap-[11px] items-center">
            <div className="w-10 h-10 bg-copper rounded-[11px] flex items-center justify-center">
              <StoreIcon size={19} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-medium">30-40 min health check</p>
              <p className="text-[11px] text-muted">Drive in, walk out with full report</p>
            </div>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex gap-[7px] mt-4 overflow-x-auto no-scrollbar">
          <Chip label="All" active />
          <Chip label="Nearest" />
          <Chip label="Top rated" />
          <Chip label="Open now" />
        </div>

        {/* Store cards */}
        <div className="flex flex-col gap-[11px] mt-4">
          {STORES.map((s) => (
            <button
              key={s.id}
              onClick={() => onNav("storeBook")}
              className="tap bg-white rounded-[14px] border-[0.5px] border-ink/10 overflow-hidden text-left cursor-pointer"
            >
              <div className="h-[84px] relative flex items-end p-[9px]" style={{ background: s.color }}>
                <div className="bg-white/95 px-[9px] py-1 rounded-full text-[10px] font-medium flex items-center gap-1">
                  <Clock size={10} /> Open · 30-40 min
                </div>
                <div className="absolute top-[9px] right-[9px] bg-ink/85 text-white px-[9px] py-1 rounded-full text-[10px] font-medium">
                  {s.distance}
                </div>
              </div>
              <div className="p-[13px]">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[13px] font-medium">{s.name}</p>
                    <p className="text-[11px] text-muted">{s.area}</p>
                  </div>
                  <span className="text-[12px] font-medium px-[7px] py-[3px] rounded text-green" style={{ background: "rgba(31,110,58,0.1)" }}>
                    <Star size={10} className="inline fill-amber text-amber" /> {s.rating}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-[11px] pt-[11px] border-t-[0.5px] border-ink/[0.06]">
                  <p className="ff-d text-[15px] font-semibold">₹{s.price}</p>
                  <span className="text-[11px] text-green font-medium flex items-center gap-1">
                    <CalendarCheck size={12} /> {s.slots} slots today
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <BottomNav active="stores" onChange={onNav} />
    </div>
  );
}
