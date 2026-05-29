import { useState } from "react";

import { Device, Toast } from "./components";
import { useToast } from "./utils";
import { DEFAULT_LOCATION } from "./data";

import {
  Splash, UserType, Login, Forgot, Signup,
  Home, Location, Notifications, Account,
  VinScan, VinReport, SelectMechanic, Confirm, Tracking, Report,
  Stores, StoreBook,
  Trust, Escrow, Warranty, Referral,
  History, MechDash, Pitch,
} from "./screens";

// Main app router. Single source of truth for which screen to show.
//
// Founder: Mesa Raj Kumar
// Repository: github.com/MesaRaj/CarCheck
export default function App() {
  const [screen, setScreen] = useState("splash");
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [pickedMech, setPickedMech] = useState(null);
  const { toast, show } = useToast();

  // Single navigation handler used by every screen
  const nav = (s) => setScreen(s);

  // Helper for picking a mechanic and moving to confirm screen
  const pickMech = (m) => {
    setPickedMech(m);
    nav("confirm");
  };

  return (
    <div className="min-h-screen w-full grain flex flex-col items-center p-4 gap-4" style={{ background: "#F1EDE4" }}>
      {/* Header */}
      <header className="w-full max-w-[380px] flex justify-between items-center px-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-copper rounded-[7px] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3 3 7-7" stroke="#FAF7F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="ff-d text-[18px] font-semibold">CarCheck</span>
          <span className="ff-m text-[10px] text-muted px-2 py-[2px] rounded-full bg-ink/[0.04]">v1.0 · Demo</span>
        </div>
        <div className="hidden sm:flex items-center gap-[6px] text-[11px] text-muted">
          <span className="w-[6px] h-[6px] bg-green rounded-full" />
          Live
        </div>
      </header>

      {/* Phone frame */}
      <Device>
        <Toast message={toast} />
        {screen === "splash" && <Splash onDone={() => nav("userType")} />}
        {screen === "userType" && <UserType onNav={nav} />}
        {screen === "login" && <Login onNav={nav} onToast={show} />}
        {screen === "forgot" && <Forgot onNav={nav} onToast={show} />}
        {screen === "signupC" && <Signup onNav={nav} onToast={show} />}
        {screen === "home" && <Home onNav={nav} location={location} />}
        {screen === "loc" && <Location onNav={nav} location={location} setLocation={setLocation} onToast={show} />}
        {screen === "notif" && <Notifications onNav={nav} onToast={show} />}
        {screen === "account" && <Account onNav={nav} />}
        {screen === "vinScan" && <VinScan onNav={nav} />}
        {screen === "vinReport" && <VinReport onNav={nav} />}
        {screen === "selMech" && <SelectMechanic onNav={nav} onPickMech={pickMech} onToast={show} />}
        {screen === "confirm" && <Confirm onNav={nav} mechanic={pickedMech} />}
        {screen === "tracking" && <Tracking onNav={nav} onToast={show} />}
        {screen === "report" && <Report onNav={nav} onToast={show} />}
        {screen === "stores" && <Stores onNav={nav} location={location} />}
        {screen === "storeBook" && <StoreBook onNav={nav} onToast={show} />}
        {screen === "trust" && <Trust onNav={nav} />}
        {screen === "escrow" && <Escrow onNav={nav} onToast={show} />}
        {screen === "warranty" && <Warranty onNav={nav} />}
        {screen === "referral" && <Referral onNav={nav} onToast={show} />}
        {screen === "history" && <History onNav={nav} />}
        {screen === "mechDash" && <MechDash onNav={nav} onToast={show} />}
        {screen === "pitch" && <Pitch onNav={nav} />}
      </Device>

      {/* Footer */}
      <footer className="w-full max-w-[380px] text-center pb-4">
        <p className="ff-m text-[10px] text-muted tracking-[0.06em]">
          © 2026 CarCheck · Founded by Mesa Raj Kumar · India
        </p>
      </footer>
    </div>
  );
}
