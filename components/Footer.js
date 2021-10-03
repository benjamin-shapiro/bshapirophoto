import footerstyles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={navStyles.row}>
      <div className={navStyles.column}>
        <Link href="/">Home</Link>
      </div>
      <div className={navStyles.column}>
        <Link href="/astro">Astro</Link>
      </div>
      <div className={navStyles.column}>
        <Link href="/wildlife">Wildlife</Link>
      </div>
      <div className={navStyles.column}>
        <Link href="/travel">Travel</Link>
      </div>
    </div>
  );
}
