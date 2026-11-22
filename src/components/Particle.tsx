export default function Particle() {
  return (
    <div
      className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-[#F8F7F4]"
      aria-hidden="true"
    >
      {/* Subtle architectural paper grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(#D5D1C8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Soft natural ambient daylight wash */}
      <div className="absolute -top-40 right-0 w-[640px] h-[640px] bg-[#E8ECF7]/60 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -left-40 w-[560px] h-[560px] bg-[#EFECE4]/80 rounded-full blur-[120px]" />
    </div>
  );
}
