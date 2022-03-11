import footerStyles from "../styles/Footer.module.css";
import Link from "next/link";
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  return (
    <div className={footerStyles.socials}>
      <SocialIcon url="https://www.linkedin.com/in/benjaminshapiro1/" target="_blank"/>
      <SocialIcon url="https://www.instagram.com/bshapirophoto/" target="_blank"/>
      <SocialIcon url="https://github.com/benjamin-shapiro" target="_blank"/>
      <SocialIcon url="https://twitter.com/ShapiroSpace" target="_blank"/>
      <SocialIcon url="mailto:bps78@cornell.edu" target="bps78@cornell.edu"/>
    </div>
    
  );
}
