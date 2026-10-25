"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <nav className="shell navbar" aria-label="Navigasi utama">
        <Link className="logo" href="/">sela</Link>
        <div className="nav-links">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return <Link className={active ? "active" : ""} href={link.href} key={link.href}>{link.label}</Link>;
          })}
        </div>
        <Link className="nav-cta" href="/contact">Start a project</Link>
      </nav>
    </header>
  );
}