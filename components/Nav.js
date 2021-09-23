import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <div className={navStyles.row}>
        <div className={navStyles.column}>
          <a href="/">Home</a>
        </div>
        <div className={navStyles.column}>
          <a href="/astro">Astro</a>
        </div>
        <div className={navStyles.column}>
          <a href="/ithaca">Ithaca</a>
        </div>
        <div className={navStyles.column}>
          <a href="/wildlife">Wildlife</a>
        </div>
        <div className={navStyles.column}>
          <a href="/travel">Travel</a>
        </div>
        <div className={navStyles.column}>
        <a href="/experimental">Experimental</a>
        </div>
        <div className={navStyles.column}>
        <a href="/about">About</a>
        </div>
    </div>
  );
}

//<a href="/contact">Contact</a>
