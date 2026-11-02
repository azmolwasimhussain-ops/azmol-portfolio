export function ShareCard() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "68px 78px", color: "#eee9df", background: "#111210", fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: "500px", height: "500px", border: "1px solid rgba(212,191,145,.18)", borderRadius: "50%", right: "-60px", top: "-170px", transform: "scaleX(.72)" }} />
      <div style={{ position: "absolute", inset: "0", opacity: .16, backgroundImage: "linear-gradient(rgba(231,225,212,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(231,225,212,.08) 1px, transparent 1px)", backgroundSize: "54px 54px", maskImage: "linear-gradient(90deg, transparent, black)" }} />
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "16px", fontSize: "18px", letterSpacing: "3px", textTransform: "uppercase", color: "#d8d4c9" }}>
        <span style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,191,145,.6)", borderRadius: "50%", color: "#e7d2a6", fontFamily: "Georgia, serif", fontSize: "22px", letterSpacing: "-4px", paddingRight: "4px" }}>A<span style={{ fontStyle: "italic" }}>W</span></span>
        Azmol Wasim Hussain
      </div>
      <div style={{ position: "relative", maxWidth: "970px", display: "flex", flexDirection: "column", gap: "19px" }}>
        <div style={{ color: "#d4bf91", fontSize: "14px", letterSpacing: "4px", textTransform: "uppercase" }}>Frontend Developer · Modern Web Engineering</div>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Georgia, serif", fontSize: "76px", lineHeight: 1.04, letterSpacing: "-5px" }}>Thoughtful interfaces.<br /><span style={{ color: "#e7d2a6", fontStyle: "italic" }}>Useful experiences.</span></div>
        <div style={{ color: "#a7a69d", fontSize: "20px", letterSpacing: ".5px" }}>React · Next.js · TypeScript · Applied AI</div>
      </div>
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", paddingTop: "19px", borderTop: "1px solid rgba(231,225,212,.2)", color: "#85867d", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase" }}>
        <span>Selected projects &amp; open-source work</span><span>Portfolio · 2026</span>
      </div>
    </div>
  );
}
