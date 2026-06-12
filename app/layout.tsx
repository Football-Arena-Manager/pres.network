import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pres — Futbolcuların Sosyal Platformu",
  description: "Futbolcuları bir araya getirir, maç sonrası birbirini puanlat, gerçek bir oyuncu profili oluştur.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
