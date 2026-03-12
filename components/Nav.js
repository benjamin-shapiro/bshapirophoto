import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/museum", label: "Museum" },
  { href: "/astro", label: "Astro" },
  { href: "/wildlife", label: "Wildlife" },
  { href: "/travel", label: "Travel" },
];

export default function Nav() {
  return (
    <header className={navStyles.navShell}>
      <nav className={navStyles.nav} aria-label="Primary">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <a className={navStyles.navLink}>{item.label}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
