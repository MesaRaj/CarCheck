import { useEffect, useState } from "react";
import { Phone, MessageCircle, FileText, ArrowLeft } from "lucide-react";
import { StatusBar, BackButton, CTA } from "../components";

// Animated tracking screen. Mechanic's position updates every 3.5s
// through 5 stages: confirmed → assigned → on the way → arrived → complete.
export default function Tracking({ onNav, onToast }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= 4) return;
    const t = setTimeout(() => setStep((s) => s + 1), 3500);
    return () => clearTimeout(t);
  }, [step]);

  const carX = 60 + step * 50;
  const carY = 130 - step * 10;
  const eta = Math.max(2, 18 - step * 4);

  const steps = [
    { title: "Booking confirmed", sub: "Payment received", done: true },
    { title: "Mechanic assigned", sub: "Ravi Teja accepted", done: step >= 1, active: step === 1 },
    { title: "On the way", sub: `ETA: ${eta} min`, done: step >= 2, active: step === 2 },
    { title: "Arrived at seller", sub: "Inspection started", done: step >= 3, active: step === 3 },
    { title: "Inspection complete", sub: "Report ready", done: step >= 4, active: step === 4 },
  ];

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      {/* Map */}
      <div className="relative h-[230px] overflow-hidden" style={{ background: "linear-gradient(135deg, #E1F5EE, #C0DD97)" }}>
        <svg width="100%" height="100%" viewBox="0 0 340 220" preserveAspectRatio="none">
          <rect x="30" y="30" width="60" height="40" fill="rgba(255,255,255,0.5)" rx="3" />
          <rect x="120" y="20" width="80" height="60" fill="rgba(255,255,255,0.5)" rx="3" />
          <rect x="230" y="40" width="70" height="50" fill="rgba(255,255,255,0.5)" rx="3" />
          <rect x="40" y="150" width="50" height="50" fill="rgba(255,255,255,0.5)" rx="3" />
          <rect x="160" y="160" width="60" height="40" fill="rgba(255,255,255,0.5)" rx="3" />
          <path
            d="M 40 130 Q 100 100, 160 110 T 280 80"
            stroke="#0E0E0C"
            strokeWidth="3"
            fill="none"
            strokeDasharray="6,4"
            opacity="0.4"
          />
          <g transform="translate(40, 130)">
            <circle r="10" fill="#FFF" />
            <circle r="6" fill="#D44A11" />
            <text y="-15" textAnchor="middle" fontSize="11" fontWeight="500" fill="#0E0E0C">You</text>
          </g>
          <g transform="translate(280, 80)">
            <path d="M -8 0 L 0 -16 L 8 0 Z" fill="#1F6E3A" />
            <circle cy="-4" r="4" fill="#FFF" />
            <text y="14" textAnchor="middle" fontSize="11" fontWeight="500" fill="#0E0E0C">Seller</text>
          </g>
          {step < 4 && (
            <g transform={`translate(${carX}, ${carY})`}>
              <rect x="-16" y="-3" width="32" height="10" rx="3" fill="#0E0E0C" />
              <rect x="-12" y="-9" width="22" height="8" rx="2" fill="#0E0E0C" />
              <circle cx="-10" cy="7" r="4" fill="#444" />
              <circle cx="10" cy="7" r="4" fill="#444" />
              <text y="-15" textAnchor="middle" fontSize="11" fontWeight="500" fill="#D44A11">RK</text>
            </g>
          )}
        </svg>
        <button
          onClick={() => onNav("home")}
          className="absolute top-[11px] left-[11px] w-9 h-9 rounded-full bg-white flex items-center justify-center border-[0.5px] border-ink/10 cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="absolute top-[11px] right-[11px] bg-ink text-cream px-[11px] py-[7px] rounded-[9px] text-[11px] font-medium">
          ETA: {eta} min
        </div>
      </div>

      <div className="p-[15px]">
        {/* Mechanic card */}
        <div className="bg-white p-[13px] rounded-[14px] border-[0.5px] border-ink/10 flex gap-[13px] items-center">
          <div className="w-[50px] h-[50px] bg-ink text-cream rounded-full flex items-center justify-center text-[16px] font-medium">
            RK
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-medium">Ravi Teja Konda</p>
            <p className="text-[11px] text-muted">
              {step === 2 ? "5.2 km away" : step >= 3 ? "On site" : "Preparing"}
            </p>
          </div>
          <button onClick={() => onToast?.("Calling...")} className="w-10 h-10 bg-green text-white rounded-full flex items-center justify-center border-0 cursor-pointer">
            <Phone size={17} />
          </button>
          <button onClick={() => onToast?.("Chat opening...")} className="w-10 h-10 bg-ink text-white rounded-full flex items-center justify-center border-0 cursor-pointer">
            <MessageCircle size={17} />
          </button>
        </div>

        {/* Timeline */}
        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Live status</p>
        <div className="relative pl-[22px]">
          <div className="absolute left-[5px] top-[9px] bottom-[9px] w-[2px] bg-ink/10" />
          {steps.map((s, i) => (
            <div key={i} className="flex gap-[13px] py-2 relative">
              <div
                className="absolute left-[-20px] top-[9px] w-[13px] h-[13px] rounded-full border-2"
                style={{
                  background: s.done ? "#1F6E3A" : "#FFF",
                  borderColor: s.done ? "#1F6E3A" : "rgba(14,14,12,0.2)",
                  ...(s.active && {
                    background: "#D44A11",
                    borderColor: "#D44A11",
                    boxShadow: "0 0 0 5px rgba(212,74,17,0.2)",
                  }),
                }}
              />
              <div className="flex-1 pl-[7px]">
                <p className="text-[13px] font-medium" style={{ color: s.done || s.active ? "#0E0E0C" : "#7A7972" }}>
                  {s.title}
                </p>
                <p className="text-[11px] text-muted">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {step === 4 && (
          <div className="mt-4">
            <CTA onClick={() => onNav("report")}>
              View full report <FileText size={16} />
            </CTA>
          </div>
        )}
      </div>
    </div>
  );
}
