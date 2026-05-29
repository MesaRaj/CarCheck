import { useState } from "react";
import { Star, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { StatusBar, Chip, CTA } from "../components";

export default function StoreBook({ onNav, onToast }) {
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(2);

  const checks = [
    "Engine & transmission",
    "Brakes & suspension",
    "Battery & electricals",
    "AC & interior",
    "Body & paint scan",
    "Tyre health",
    "Ownership verification",
    "Fine/challan check",
  ];

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      {/* Header */}
      <div className="relative h-[150px]" style={{ background: "#FFD89B" }}>
        <button
          onClick={() => onNav("stores")}
          className="absolute top-[11px] left-[11px] w-9 h-9 rounded-full bg-white flex items-center justify-center border-[0.5px] border-ink/10 cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>
      </div>

      <div className="px-4 pb-6">
        <p className="ff-d text-[20px] font-semibold mt-[15px]">AutoFix Service Center</p>
        <p className="text-[12px] text-muted mt-[3px]">Jubilee Hills · 2.1 km</p>
        <div className="flex gap-[9px] mt-[7px] items-center">
          <span className="text-[13px] font-medium flex items-center gap-1">
            <Star size={13} className="fill-amber text-amber" /> 4.8
          </span>
          <span className="text-[11px] text-muted">(1,240 reviews)</span>
        </div>

        {/* Checks */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">What is checked</p>
        <div className="bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10">
          {checks.map((c) => (
            <div key={c} className="flex gap-[9px] items-center py-1">
              <Check size={15} className="text-green" />
              <span className="text-[12px]">{c}</span>
            </div>
          ))}
        </div>

        {/* Date */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Select date</p>
        <div className="flex gap-[7px] overflow-x-auto no-scrollbar">
          {["Today", "Tomorrow", "Sat 17", "Sun 18"].map((d, i) => (
            <Chip key={d} label={d} active={day === i} onClick={() => setDay(i)} />
          ))}
        </div>

        {/* Slots */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Available slots</p>
        <div className="grid grid-cols-3 gap-[7px]">
          {["9:00", "9:40", "10:20", "11:00", "11:40", "12:20"].map((t, i) => (
            <Chip
              key={t}
              label={t}
              active={slot === i}
              onClick={() => i !== 1 && setSlot(i)}
              disabled={i === 1}
              style={{ padding: "10px 0", textAlign: "center" }}
            />
          ))}
        </div>

        {/* Bill */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Bill</p>
        <div className="bg-white p-[11px] px-[15px] rounded-[14px] border-[0.5px] border-ink/10">
          <BillRow label="Health check" value="₹1,499" />
          <BillRow label="GST 18%" value="₹270" />
          <div className="h-px bg-ink/10 my-[7px]" />
          <BillRow label="Total" value="₹1,769" bold />
        </div>

        <div className="mt-4">
          <CTA onClick={() => { onToast?.("Slot booked at 10:20 AM tomorrow"); setTimeout(() => onNav("home"), 1500); }}>
            Book slot · ₹1,769 <ArrowRight size={16} />
          </CTA>
        </div>
      </div>
    </div>
  );
}

function BillRow({ label, value, bold }) {
  return (
    <div className="flex justify-between py-[3px]" style={{ fontSize: bold ? 14 : 13 }}>
      <span style={{ color: bold ? "#0E0E0C" : "#7A7972", fontWeight: bold ? 500 : 400 }}>{label}</span>
      <span style={{ fontWeight: bold ? 500 : 400 }}>{value}</span>
    </div>
  );
}
