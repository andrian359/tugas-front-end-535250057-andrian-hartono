import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { projects } from "@/app/lib/data";

export default function WorkPage() {
  return <><Navbar /><main className="shell inner-page work-page"><p className="eyebrow">Selected work</p><h1>Yang sudah<br /><em>kami buat.</em></h1><div className="all-projects">{projects.map((project) => <Link className={`project-card project-${project.color}`} href={`/work/${project.slug}`} key={project.slug}><div className="project-visual"><span>{project.visual}</span><b>{project.year}</b></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.category}</p></div></div></Link>)}</div></main><Footer /></>;
}