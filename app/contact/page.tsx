import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="shell inner-page contact-page">
        <p className="eyebrow">Mari ngobrol</p>
        <h1>Punya ide?<br /><em>Ceritakan.</em></h1>
        <div className="about-layout">
          <p className="lead">Tidak harus sudah rapi. Ceritakan saja sebisanya, kami bantu merapikannya.</p>
          <div className="about-copy">
            <p>Kirim email ke <a className="text-link" href="mailto:halo@selastudio.id">halo@selastudio.id</a> atau temui kami di Instagram <Link className="text-link" href="#">@sela.studio</Link>.</p>
            <p>Biasanya kami membalas dalam 1–2 hari kerja.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
