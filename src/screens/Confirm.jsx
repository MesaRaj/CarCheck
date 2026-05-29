import { useState } from "react";
import { Star, ArrowRight, QrCode, CreditCard, Wallet, CheckCircle, ChevronRight } from "lucide-react";
import { StatusBar, BackButton, Chip, CTA } from "../components";

export default function Confirm({ onNav, mechanic }) {
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(1);
  const [pay, setPay] = useState(0);

  const m = mechanic || { name: "Ravi Teja Konda", initials: "RK", specialty: "Maruti & Hyundai Expert", rating: 4.9, price: 899 };

  const days = ["Today", "Tomorrow", "Sat 17", "Sun 18"];
  const slots = [
    { time: "9:00 AM", disabled: true },
    { time: "10:30 AM" },
    { time: "12:00 PM" },
    { time: "2:00 PM" },
    { time: "3:30 PM", disabled: true },
    { time: "5:00 PM" },
  ];
  const payMethods = [
    { icon: QrCode, name: "UPI", sub: "GPay, PhonePe, Paytm" },
    { icon: CreditCard, name: "Card", sub: "Visa, Mastercard, Rupay" },
    { icon: Wallet, name: "Wallets", sub: "Paytm, PhonePe" },
  ];

  const gst = Math.round(m.price * 0.18);
  const total = m.price + gst;

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("selMech")} />
          <p className="text-[16px] font-medium">Confirm booking</p>
        </div>

        {/* Mechanic summary */}
        <div className="mt-4 bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10 flex gap-[11px] items-center">
          <div className="w-[38px] h-[38px] bg-ink text-cream rounded-full flex items-center justify-center text-[13px] font-medium">
            {m.initials}
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-medium">{m.name}</p>
            <p className="text-[11px] text-muted">{m.specialty}</p>
          </div>
          <span className="text-[12px] flex items-center gap-1">
            <Star size={11} className="fill-amber text-amber" /> {m.rating}
          </span>
        </div>

        {/* Day picker */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">When</p>
        <div className="flex gap-[7px] overflow-x-auto no-scrollbar">
          {days.map((d, i) => (
            <Chip key={d} label={d} active={day === i} onClick={() => setDay(i)} />
          ))}
        </div>

        {/* Time slot */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Time slot</p>
        <div className="grid grid-cols-3 gap-[7px]">
          {slots.map((s, i) => (
            <button
              key={s.time}
              onClick={() => !s.disabled && setSlot(i)}
              disabled={s.disabled}
              className="py-[10px] text-center rounded-[9px] text-[12px] font-medium cursor-pointer border-[0.5px]"
              style={{
                background: slot === i ? "#D44A11" : "#FFF",
                color: slot === i ? "#FFF" : "#0E0E0C",
                borderColor: slot === i ? "#D44A11" : "rgba(14,14,12,0.1)",
                opacity: s.disabled ? 0.4 : 1,
                fontFamily: "inherit",
              }}
            >
              {s.time}
            </button>
          ))}
        </div>

        {/* Payment methods */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Pay via</p>
        <div className="bg-white rounded-[14px] border-[0.5px] border-ink/10 overflow-hidden">
          {payMethods.map(({ icon: Icon, name, sub }, idx) => (
            <button
              key={name}
              onClick={() => setPay(idx)}
              className="tap w-full p-[12px] px-[15px] flex items-center gap-[11px] border-0 cursor-pointer"
              style={{
                borderTop: idx > 0 ? "0.5px solid rgba(14,14,12,0.06)" : "none",
                background: pay === idx ? "rgba(212,74,17,0.05)" : "transparent",
              }}
            >
              <div className="w-8 h-8 bg-bg rounded-[9px] flex items-center justify-center">
                <Icon size={15} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[13px] font-medium">{name}</p>
                <p className="text-[11px] text-muted">{sub}</p>
              </div>
              {pay === idx ? <CheckCircle size={16} className="text-copper" /> : <ChevronRight size={16} className="text-muted" />}
            </button>
          ))}
        </div>

        {/* Bill */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Bill</p>
        <div className="bg-white p-[13px] px-[15px] rounded-[14px] border-[0.5px] border-ink/10">
          <BillRow label="Inspection fee" value={`₹${m.price}`} />
          <BillRow label="GST 18%" value={`₹${gst}`} />
          <div className="h-px bg-ink/10 my-[7px]" />
          <BillRow label="Total" value={`₹${total.toLocaleString("en-IN")}`} bold />
        </div>

        <div className="mt-4">
          <CTA onClick={() => onNav("tracking")}>
            Pay ₹{total.toLocaleString("en-IN")} <ArrowRight size={16} />
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
