import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { projects, services } from "@/app/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Studio digital independen</p>
            <h1>Karya digital yang <em>punya rasa.</em></h1>
            <p className="hero-intro">Kami merancang identitas, website, dan arah visual yang jelas untuk membuat sebuah brand tampil lebih kuat.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/work">Lihat karya</Link>
              <Link className="text-link" href="/about">Kenalan dengan kami</Link>
            </div>
          </div>
          <div className="hero-art" aria-label="Kolase karya Studio Sela">
            <div className="art-note">ideas<br /><strong>in motion</strong></div>
            <div className="art-circle" />
            <div className="art-card art-card-top">SEL<span>A</span></div>
            <div className="art-card art-card-bottom">made<br />with<br /><strong>intent</strong></div>
          </div>
        </section>

        <section className="marquee" aria-label="Nilai Studio Sela">
          <div>BRAND STRATEGY &nbsp; DIGITAL EXPERIENCE &nbsp; VISUAL IDENTITY</div>
        </section>

        <section className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">Yang kami kerjakan</p><h2>Bentuk yang <em>berarti.</em></h2></div>
            <Link className="text-link" href="/services">Semua layanan</Link>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className={`service-card service-${index + 1}`} key={service.title}>
                <span className="card-number">0{index + 1}</span>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3><p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section section">
          <div className="shell">
            <div className="section-heading"><div><p className="eyebrow">Pilihan karya</p><h2>Beberapa hal<br /><em>yang kami banggakan.</em></h2></div><span className="section-aside">Scroll pelan-pelan</span></div>
            <div className="project-grid">
              {projects.slice(0, 3).map((project) => (
                <Link className={`project-card project-${project.color}`} href={`/work/${project.slug}`} key={project.slug}>
                  <div className="project-visual"><span>{project.visual}</span><b>{project.year}</b></div>
                  <div className="project-meta"><div><h3>{project.title}</h3><p>{project.category}</p></div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}