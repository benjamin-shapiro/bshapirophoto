import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <div className={navStyles.row}>
      <Link href="/">
        <div className={navStyles.column}>
          Home
        </div>
      </Link>
      <Link href="/astro">
        <div className={navStyles.column}>
          Astro
        </div>
      </Link>
      <Link href="/wildlife">
        <div className={navStyles.column}>
          Wildlife
        </div>
      </Link>
      <Link href="/travel">
        <div className={navStyles.column}>
          Travel
        </div>
      </Link>
    </div>
  );
}

/*
<Link href="/about">
  <div className={navStyles.column}>
    About
  </div>
</Link>
<Link href="/contact">
  <div className={navStyles.column}>
    Contact
  </div>
</Link>
*/
