import Navbar from "../components/Navbar";

const sections = [
  { num: "01", title: "Genel Bilgi", content: "Bu gizlilik politikası, Pres uygulamasının kullanıcı verilerini nasıl topladığını, kullandığını ve koruduğunu açıklamaktadır. Uygulamayı kullanarak bu politikayı kabul etmiş olursunuz." },
  { num: "02", title: "Toplanan Veriler", items: [
    "Ad, soyad ve e-posta adresi (kayıt sırasında)",
    "Profil fotoğrafı (isteğe bağlı olarak yüklenir)",
    "Kullanıcı adı ve profil bilgileri",
    "Arkadaşlık bağlantıları ve sosyal etkileşim verileri",
    "Konum bilgisi (yakınındaki oyuncuları göstermek için, yalnızca uygulama aktifken)",
    "Cihaz token bilgisi (bildirim göndermek için)",
  ]},
  { num: "03", title: "Verilerin Kullanımı", items: [
    "Kullanıcı profilinin oluşturulması ve yönetilmesi",
    "Yakınındaki futbol oyuncularının gösterilmesi",
    "Maç sonrası puanlama sisteminin çalıştırılması",
    "Arkadaş ekleme ve sosyal etkileşim özelliklerinin sağlanması",
    "Bildirim gönderilmesi",
  ]},
  { num: "04", title: "Veri Paylaşımı", items: [
    "Kişisel verileriniz üçüncü taraflarla satılmaz veya kiralanmaz",
    "Yasal zorunluluk halinde yetkili makamlarla paylaşılabilir",
    "Hizmetin sunulması için gerekli altyapı sağlayıcılarıyla paylaşılabilir",
  ]},
  { num: "05", title: "Veri Güvenliği", content: "Kullanıcı verileri güvenli sunucularda saklanır ve yetkisiz erişime karşı korunur. Endüstri standardı şifreleme yöntemleri kullanılmaktadır." },
  { num: "06", title: "Kullanıcı Hakları", items: [
    "Hesabınızı istediğiniz zaman silebilirsiniz",
    "Verilerinizin silinmesini talep edebilirsiniz",
    "Konum ve bildirim izinlerini cihaz ayarlarından iptal edebilirsiniz",
  ]},
  { num: "07", title: "İletişim", contact: "destek@presapp.com" },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ paddingTop: 120, paddingBottom: 48, borderBottom: "1px solid var(--border)" }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: 20 }}>Yasal Belge</span>
          <h1 className="font-bebas" style={{ fontSize: "clamp(48px, 8vw, 80px)", letterSpacing: 3, color: "#fff", lineHeight: 1, marginBottom: 20 }}>Gizlilik Politikası</h1>
          <p style={{ color: "var(--muted)", fontSize: 14 }}>Son güncelleme: 12 Haziran 2026</p>
        </div>

        <div style={{ padding: "56px 0 96px" }}>
          {sections.map((s) => (
            <div key={s.num} style={{ marginBottom: 56 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
                <span className="font-bebas" style={{ fontSize: 13, letterSpacing: 1, color: "var(--green)", paddingTop: 3, minWidth: 24 }}>{s.num}</span>
                <span style={{ fontSize: 18, fontWeight: 600, color: "#fff" }}>{s.title}</span>
              </div>
              <div style={{ paddingLeft: 40 }}>
                {s.content && <p style={{ color: "#e0e0e0" }}>{s.content}</p>}
                {s.items && (
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {s.items.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#e0e0e0" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", marginTop: 8, flexShrink: 0, display: "inline-block" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.contact && (
                  <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--green)", borderRadius: 8, padding: "20px 24px" }}>
                    <a href={`mailto:${s.contact}`} style={{ color: "var(--green)", textDecoration: "none" }}>{s.contact}</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 40px", maxWidth: 760, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ color: "var(--muted)", fontSize: 13 }}>© 2026 Pres. Tüm hakları saklıdır.</span>
        <span style={{ color: "var(--muted)", fontSize: 13 }}>Gizlilik Politikası</span>
      </footer>
    </>
  );
}
