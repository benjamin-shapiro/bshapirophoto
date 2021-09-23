import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <div className={navStyles.row}>
      <div className={navStyles.column}>
        <Link href="/">Home</Link>
      </div>
      <div className={navStyles.column}>
        <Link href="/astro">Astro</Link>
      </div>
      <div className={navStyles.column}>
        <Link href="/ithaca">Ithaca</Link>
      </div>
      <div className={navStyles.column}>
        <Link href="/wildlife">Wildlife</Link>
      </div>
      <div className={navStyles.column}>
        <Link href="/travel">Travel</Link>
      </div>
      <div className={navStyles.column}>
        <Link href="/experimental">Experimental</Link>
      </div>
      <div className={navStyles.column}>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

//<a href="/contact">Contact</a>
