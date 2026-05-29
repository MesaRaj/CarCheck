// Phone-shaped frame that wraps every screen.
// Renders the dark bezel, rounded corners, and notch.
export default function Device({ children }) {
  return (
    <div className="bg-ink rounded-[36px] p-[9px] shadow-[0_30px_60px_-20px_rgba(14,14,12,0.4)] mx-auto">
      <div
        className="bg-bg rounded-[28px] overflow-hidden relative"
        style={{ width: 360, height: 720 }}
      >
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[110px] h-[24px] bg-ink rounded-full z-20" />
        {children}
      </div>
    </div>
  );
}
