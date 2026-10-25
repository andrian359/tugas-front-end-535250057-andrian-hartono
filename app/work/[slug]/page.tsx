import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { projects } from "@/app/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <><Navbar /><main className="shell project-detail"><Link className="back-link" href="/work">Semua karya</Link><div className={`detail-visual project-${project.color}`}><span>{project.visual}</span><b>{project.year}</b></div><div className="detail-grid"><div><p className="eyebrow">{project.category}</p><h1>{project.title}</h1></div><div><p className="detail-lead">{project.description}</p><p>{project.detail}</p></div></div></main><Footer /></>;
}