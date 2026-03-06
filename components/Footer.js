import footerStyles from "../styles/Footer.module.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.socials}>
        <SocialIcon
          url="https://www.linkedin.com/in/benjaminshapiro1/"
          target="_blank"
        />
        <SocialIcon url="https://benjamin-shapiro.github.io/" target="_blank" />
        <SocialIcon
          url="mailto:benjaminpshapiro@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <p className={footerStyles.credit}>Copyright {year} Benjamin Shapiro</p>
    </footer>
  );
}
