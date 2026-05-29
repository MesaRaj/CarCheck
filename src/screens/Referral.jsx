import { Gift, Copy, MessageCircle, Mail, Share2 } from "lucide-react";
import { StatusBar, BackButton } from "../components";

export default function Referral({ onNav, onToast }) {
  const shareOptions = [
    { Icon: MessageCircle, name: "WhatsApp" },
    { Icon: MessageCircle, name: "SMS" },
    { Icon: Mail, name: "Email" },
    { Icon: Share2, name: "More" },
  ];

  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("account")} />
          <p className="text-[16px] font-medium">Refer & earn</p>
        </div>

        <div className="mt-4 bg-ink text-cream p-[15px] rounded-[14px] text-center">
          <Gift size={36} className="text-amber mx-auto" />
          <p className="ff-d text-[24px] font-semibold mt-[9px] mb-[5px]">Get ₹500 + give ₹500</p>
          <p className="text-[12px]" style={{ color: "rgba(250,247,241,0.65)" }}>
            When friend books first inspection
          </p>
        </div>

        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Your code</p>
        <div className="bg-white p-[15px] rounded-[14px] border-[0.5px] border-ink/10 flex items-center gap-[11px]">
          <div className="flex-1">
            <p className="ff-m text-[18px] font-medium" style={{ letterSpacing: "0.05em" }}>ARJUN500</p>
            <p className="text-[11px] text-muted">Share and earn</p>
          </div>
          <button
            onClick={() => onToast?.("Copied: ARJUN500")}
            className="tap bg-ink text-white px-[15px] py-[9px] rounded-[9px] text-[11px] font-medium cursor-pointer border-0 flex items-center gap-1"
            style={{ fontFamily: "inherit" }}
          >
            <Copy size={12} /> Copy
          </button>
        </div>

        <div className="grid grid-cols-4 gap-[7px] mt-[11px]">
          {shareOptions.map(({ Icon, name }) => (
            <button
              key={name}
              onClick={() => onToast?.(`${name} share — coming in V2`)}
              className="tap bg-white p-[11px] rounded-[14px] border-[0.5px] border-ink/10 text-center cursor-pointer"
            >
              <Icon size={19} className="text-copper mx-auto" />
              <p className="text-[10px] font-medium mt-[5px]">{name}</p>
            </button>
          ))}
        </div>

        <p className="ff-m text-[10px] uppercase tracking-[0.08em] text-muted mt-4 mb-[7px]">Your earnings</p>
        <div className="grid grid-cols-3 gap-[7px]">
          <Stat n="7" label="Joined" />
          <Stat n="4" label="Booked" />
          <Stat n="₹2K" label="Earned" color="text-green" />
        </div>
      </div>
    </div>
  );
}

function Stat({ n, label, color = "" }) {
  return (
    <div className="bg-white p-[11px] rounded-[14px] border-[0.5px] border-ink/10 text-center">
      <p className={`ff-d text-[20px] font-semibold ${color}`}>{n}</p>
      <p className="text-[10px] text-muted">{label}</p>
    </div>
  );
}
