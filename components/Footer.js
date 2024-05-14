import footerStyles from "../styles/Footer.module.css";
import Link from "next/link";
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  return (
    <div className={footerStyles.socials}>
      <SocialIcon url="https://www.linkedin.com/in/benjaminshapiro1/" target="_blank"/>
      <SocialIcon url="https://benjamin-shapiro.github.io/" target="_blank"/>
      <SocialIcon url="mailto:bps78@cornell.edu" target="bps78@cornell.edu"/>
    </div>
    
  );
}
