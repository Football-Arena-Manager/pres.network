import Navbar from "./components/Navbar";
import StoreBadges from "./components/StoreBadges";
import { LOGO_BASE64 } from "./logo";

const features = [
  { title: "Oyuncu Profili", desc: "Mevkini, istatistiklerini ve aldığın puanları profilinde sergile. Gerçek bir futbol kimliği oluştur.", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
  { title: "Maç Puanlama", desc: "Maç biter, puanlama başlar. Takım arkadaşların ve rakiplerin seni değerlendirir. Adil ve şeffaf.", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
  { title: "Oyuncu Bul", desc: "Çevrendeki futbolcuları keşfet. Eksik oyuncu mu var? Pres'te bul, sahaya çıkar.", icon: "M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" },
  { title: "İstatistik Takibi", desc: "Her maçtan aldığın puanlar profiline yansır. Gelişimini takip et, yeteneğini kanıtla.", icon: "M18 20V10 M12 20V4 M6 20v-6" },
  { title: "Arkadaş Ekle", desc: "Sahada tanıştığın oyuncuları takip et. Maç geçmişinizi birlikte görün.", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
  { title: "Konum Tabanlı", desc: "Yakınındaki oyuncular ve maçlar sana otomatik gösterilir. Her zaman sahaya hazır ol.", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
];

const steps = [
  { num: "1", title: "Profilini Oluştur", desc: "Mevkini seç, fotoğrafını yükle. Saniyeler içinde sahaya hazırsın." },
  { num: "2", title: "Maça Katıl", desc: "Yakınındaki oyuncuları bul ya da arkadaşlarını davet et." },
  { num: "3", title: "Puanla ve Yüksel", desc: "Maç sonrası birbirinizi değerlendirin. Profilinde yansısın." },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "120px 24px 80px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,200,83,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <img src={LOGO_BASE64} alt="Pres" style={{ width: 96, height: 96, borderRadius: 22, marginBottom: 32, boxShadow: "0 0 60px rgba(0,200,83,0.3)" }} />
        <div style={{
          display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px",
          textTransform: "uppercase", color: "var(--green)", marginBottom: 20,
          border: "1px solid rgba(0,200,83,0.3)", padding: "5px 14px", borderRadius: 20,
        }}>
          Amatör Futbol Platformu
        </div>
        <h1 className="font-bebas" style={{ fontSize: "clamp(56px, 10vw, 100px)", letterSpacing: 4, lineHeight: 1, color: "#fff", marginBottom: 24 }}>
          Sahada <span style={{ color: "var(--green)" }}>Pres</span> Var
        </h1>
        <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Futbolcuları bir araya getirir, maç sonrası birbirini puanlat, gerçek bir oyuncu profili oluştur.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          <StoreBadges />
          <a href="#features" style={{
            background: "transparent", color: "#fff", fontWeight: 600, fontSize: 14,
            padding: "14px 32px", borderRadius: 8, textDecoration: "none",
            border: "1px solid var(--border)", marginTop: 8,
          }}>Nasıl Çalışır?</a>
        </div>
      </section>

      {/* STATS */}
      <div style={{ display: "flex", justifyContent: "center", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--surface)", flexWrap: "wrap" }}>
        {[["1K+", "Aktif Oyuncu"], ["500+", "Maç Puanlandı"], ["50+", "Şehir"], ["4.8", "Kullanıcı Puanı"]].map(([num, label]) => (
          <div key={label} style={{ flex: 1, minWidth: 150, maxWidth: 220, padding: "40px 24px", textAlign: "center", borderRight: "1px solid var(--border)" }}>
            <span className="font-bebas" style={{ fontSize: 48, color: "var(--green)", letterSpacing: 2, display: "block", lineHeight: 1, marginBottom: 8 }}>{num}</span>
            <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500, letterSpacing: 1, textTransform: "uppercase" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <section id="features" style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--green)", marginBottom: 16 }}>Özellikler</div>
        <h2 className="font-bebas" style={{ fontSize: "clamp(40px, 5vw, 60px)", color: "#fff", letterSpacing: 2, lineHeight: 1.1, marginBottom: 64 }}>Futbol Artık<br />Sosyal</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
          {features.map((f) => (
            <div key={f.title} style={{ background: "var(--surface)", padding: "40px 36px", border: "1px solid var(--border)" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(0,200,83,0.1)", border: "1px solid rgba(0,200,83,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "var(--surface)", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--green)", marginBottom: 16 }}>Nasıl Çalışır</div>
          <h2 className="font-bebas" style={{ fontSize: "clamp(40px, 5vw, 60px)", color: "#fff", letterSpacing: 2, lineHeight: 1.1, marginBottom: 64 }}>3 Adımda<br />Başla</h2>
          <div style={{ display: "flex", gap: 0, position: "relative", flexWrap: "wrap" }}>
            <div style={{ position: "absolute", top: 28, left: 44, right: 44, height: 1, background: "var(--border)" }} />
            {steps.map((s) => (
              <div key={s.num} style={{ flex: 1, minWidth: 200, textAlign: "center", padding: "0 24px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--dark)", border: "1px solid var(--green)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", position: "relative", zIndex: 1 }}>
                  <span className="font-bebas" style={{ fontSize: 22, color: "var(--green)" }}>{s.num}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" style={{ padding: "120px 48px", textAlign: "center", background: "linear-gradient(180deg, var(--dark) 0%, rgba(0,200,83,0.05) 50%, var(--dark) 100%)" }}>
        <h2 className="font-bebas" style={{ fontSize: "clamp(48px, 7vw, 80px)", color: "#fff", letterSpacing: 3, marginBottom: 20 }}>Topunu Al,<br />Sahaya Çık</h2>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 40 }}>Google Play ve App Store'dan ücretsiz indir.</p>
        <StoreBadges justify="center" />
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontSize: 13, color: "var(--muted)" }}>© 2026 Pres. Tüm hakları saklıdır.</span>
        <a href="/privacy-policy" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13 }}>Gizlilik Politikası</a>
      </footer>
    </>
  );
}
