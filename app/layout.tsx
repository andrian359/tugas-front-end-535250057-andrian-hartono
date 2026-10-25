import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "andrian hartono — studio kreatif di Jakarta",
  description: "Studio kecil untuk identitas, halaman, dan sistem yang bisa dipakai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
