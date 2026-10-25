import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { services } from "@/app/lib/data";

export default function ServicesPage() {
  return <><Navbar /><main className="shell inner-page services-page"><p className="eyebrow">Apa yang kami lakukan</p><h1>Dari ide kecil,<br /><em>jadi sesuatu.</em></h1><div className="services-list">{services.map((service, index) => <article key={service.title}><span>0{index + 1}</span><div className="service-list-icon">{service.icon}</div><div><h2>{service.title}</h2><p>{service.description}</p></div></article>)}</div></main><Footer /></>;
}