import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return <><Navbar /><main className="shell inner-page"><p className="eyebrow">Sedikit tentang kami</p><h1>Kami percaya karya<br /><em>yang baik terasa.</em></h1><div className="about-layout"><p className="lead">Sela adalah studio kreatif kecil yang senang mengerjakan hal-hal besar. Kami berkolaborasi dengan orang-orang yang punya cerita untuk diceritakan.</p><div className="about-copy"><p>Berbasis di Jakarta, kami bekerja lintas strategi, identitas, dan digital experience. Tim kami sengaja kecil supaya setiap keputusan punya nama dan setiap detail mendapat perhatian.</p><p>Nama Sela diambil dari kata sela: ruang kecil di antara dua hal. Di sanalah ide-ide baru biasanya muncul.</p></div></div><div className="about-statement">Kita tidak harus<br /><span>terlihat seperti semua orang.</span></div></main><Footer /></>;
}