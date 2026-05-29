import { Wrench, FileCheck, CreditCard, Gift } from "lucide-react";
import { StatusBar, BackButton } from "../components";
import { NOTIFICATIONS } from "../data";

const ICONS = { Wrench, FileCheck, CreditCard, Gift };
const COLORS = {
  copper: { fg: "#D44A11", bg: "rgba(212,74,17,0.1)" },
  green: { fg: "#1F6E3A", bg: "rgba(31,110,58,0.1)" },
  ink: { fg: "#0E0E0C", bg: "#F1EDE4" },
};

export default function Notifications({ onNav, onToast }) {
  return (
    <div className="absolute inset-0 anim-fade overflow-y-auto no-scrollbar" style={{ background: "#F1EDE4" }}>
      <StatusBar />
      <div className="px-4 pt-3 pb-6">
        <div className="flex items-center gap-[11px]">
          <BackButton onClick={() => onNav("home")} />
          <p className="text-[16px] font-medium flex-1">Notifications</p>
          <button
            onClick={() => onToast?.("All marked read")}
            className="bg-transparent border-0 text-copper text-[13px] font-medium cursor-pointer"
            style={{ fontFamily: "inherit" }}
          >
            Mark all read
          </button>
        </div>

        <div className="flex flex-col gap-[7px] mt-4">
          {NOTIFICATIONS.map((n, i) => {
            const Icon = ICONS[n.icon];
            const c = COLORS[n.color];
            return (
              <div
                key={i}
                className="bg-white rounded-[14px] p-[13px] border-[0.5px] border-ink/10"
                style={n.unread ? { background: "rgba(212,74,17,0.04)", borderColor: "rgba(212,74,17,0.15)" } : {}}
              >
                <div className="flex gap-[11px]">
                  <div className="w-[38px] h-[38px] rounded-[11px] flex items-center justify-center flex-shrink-0" style={{ background: c.bg }}>
                    <Icon size={17} style={{ color: c.fg }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] font-medium">
                      {n.title}
                      {n.unread && <span className="inline-block w-[6px] h-[6px] bg-copper rounded-full ml-[5px] align-middle" />}
                    </p>
                    <p className="text-[11px] text-muted mt-[3px]">{n.body}</p>
                    <p className="ff-m text-[10px] text-muted mt-[5px] uppercase tracking-[0.06em]">{n.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
