import { Sparkles, BadgeCheck, Star } from "lucide-react";
import { StatusBar, BackButton } from "../components";
import { MECHANICS } from "../data";

export default function SelectMechanic({ onNav, onPickMech, onToast }) {
  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("home")} />
          <div>
            <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted">Inspect</p>
            <p className="text-[13px] font-medium">Hyundai Creta 2020</p>
          </div>
        </div>

        {/* Auto-assign */}
        <div className="mt-4 bg-ink text-cream rounded-[14px] p-[15px]">
          <div className="flex gap-[11px] items-center">
            <div className="w-[38px] h-[38px] bg-copper rounded-[11px] flex items-center justify-center">
              <Sparkles size={19} />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-medium">Auto-assign best pro</p>
              <p className="text-[11px]" style={{ color: "rgba(250,247,241,0.65)" }}>AI picks expert for this car model</p>
            </div>
            <button
              onClick={() => {
                onToast?.("Best mechanic assigned");
                setTimeout(() => onPickMech(MECHANICS[0]), 600);
              }}
              className="tap bg-copper text-white px-[15px] py-2 rounded-[9px] text-[12px] font-medium cursor-pointer border-0"
            >
              Use
            </button>
          </div>
        </div>

        <p className="text-[13px] font-medium mt-4 mb-[7px]">{MECHANICS.length} pros available</p>
        <div className="flex flex-col gap-[9px]">
          {MECHANICS.map((m) => (
            <button
              key={m.id}
              onClick={() => onPickMech(m)}
              className="tap bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10 cursor-pointer text-left"
            >
              <div className="flex gap-[11px] items-start">
                <div className="w-[38px] h-[38px] bg-ink text-cream rounded-full flex items-center justify-center text-[13px] font-medium">
                  {m.initials}
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-medium flex items-center gap-1">
                    {m.name} <BadgeCheck size={13} className="text-copper" />
                  </p>
                  <p className="text-[11px] text-muted">{m.specialty}</p>
                  <div className="flex gap-[9px] mt-[5px]">
                    <span className="text-[11px] flex items-center gap-1">
                      <Star size={11} className="fill-amber text-amber" /> {m.rating}
                    </span>
                    <span className="text-[11px] text-muted">
                      ({m.reviews}) · {m.experience}y exp
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="ff-d text-[15px] font-semibold">₹{m.price}</p>
                  <p className="text-[10px] text-muted">{m.eta}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
