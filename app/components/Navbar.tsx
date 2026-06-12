"use client";
import { LOGO_BASE64 } from "../logo";

export default function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "18px 48px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      borderBottom: "1px solid var(--border)",
      background: "rgba(10,10,10,0.9)",
      backdropFilter: "blur(12px)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src={LOGO_BASE64} alt="Pres" style={{ width: 36, height: 36, borderRadius: 8 }} />
        <span className="font-bebas" style={{ fontSize: 24, letterSpacing: 3, color: "#fff" }}>Pres</span>
      </div>
      <a href="#download" style={{
        background: "var(--green)", color: "#000", fontWeight: 600, fontSize: 13,
        padding: "10px 22px", borderRadius: 6, textDecoration: "none",
      }}>İndir</a>
    </nav>
  );
}
