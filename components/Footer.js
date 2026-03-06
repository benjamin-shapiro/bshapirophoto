import footerStyles from "../styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.credit}>
        <span>Copyright {year} Benjamin Shapiro</span>
        <span className={footerStyles.dot}>·</span>
        <a
          className={footerStyles.link}
          href="https://benjamin-shapiro.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          benjamin-shapiro.github.io
        </a>
      </p>
    </footer>
  );
}
