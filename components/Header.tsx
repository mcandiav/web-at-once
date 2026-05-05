import Link from "next/link";
import type { NavItem } from "@/lib/landing-content";

type Props = { items: NavItem[] };

export function Header({ items }: Props) {
  return (
    <header className="landing-header">
      <a href="#top" className="landing-brand">At-Once</a>
      <nav>
        <ul className="landing-nav-list">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="#evaluacion" className="btn btn-primary">Solicita tu evaluación</Link>
    </header>
  );
}

