import { Wifi, BatteryFull } from "lucide-react";

// iPhone-style status bar — 9:41, wifi, battery — at the top of every screen.
export default function StatusBar() {
  return (
    <div className="h-8 flex items-center justify-between px-[22px] text-[12px] font-medium text-ink relative z-[5]">
      <span>9:41</span>
      <span className="inline-flex gap-[6px] items-center">
        <Wifi size={13} />
        <BatteryFull size={16} />
      </span>
    </div>
  );
}
