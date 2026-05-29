import { Home, FileText, Store, User } from "lucide-react";

// Bottom tab bar — shown on Home, Reports, Stores, Profile screens.
// `active` = which tab is highlighted
// `onChange(screenName)` = called when user taps a tab
export default function BottomNav({ active, onChange }) {
  const tabs = [
    { key: "home", label: "Home", Icon: Home },
    { key: "history", label: "Reports", Icon: FileText },
    { key: "stores", label: "Stores", Icon: Store },
    { key: "account", label: "Profile", Icon: User },
  ];

  return (
    <div className="absolute bottom-[10px] left-[10px] right-[10px] bg-ink rounded-[20px] p-[7px] flex gap-1 z-10">
      {tabs.map(({ key, label, Icon }) => {
        const on = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="tap flex-1 flex flex-col items-center gap-[2px] py-2 px-1 rounded-[13px]"
            style={{
              background: on ? "#D44A11" : "transparent",
              color: on ? "#FAF7F1" : "rgba(250,247,241,0.55)",
            }}
          >
            <Icon size={16} />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
