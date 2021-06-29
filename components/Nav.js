import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Benjamin Shapiro's Photography</Link>
        </li>
      </ul>
    </nav>
  );
}
