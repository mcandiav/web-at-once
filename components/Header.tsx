"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/lib/landing-content";

type Props = { items: NavItem[] };

export function Header({ items }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="landing-header" data-reveal>
      <a href="#top" className="landing-brand">At-Once</a>
      <button
        className="menu-toggle"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? "is-open" : ""}>
        <ul className="landing-nav-list">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="#evaluacion" className="btn btn-primary" onClick={() => setOpen(false)}>Solicita tu evaluación</Link>
    </header>
  );
}
