import Image from "next/image";
import Link from "next/link";
import homestyles from "../styles/Home.module.css";
import Helmet from "react-helmet";
import Footer from "./Nav.js";

import travelcover from "/public/Davids and Goliath Crop.jpg";
import wildlifecover from "/public/Eyes In A Green Ocean Crop.jpg";
import astrocover from "/public/Mountain Night Crop.jpg";

export default function Home() {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #000000" }} />;
      <div className={homestyles.overall_title}>
        <h1>Benjamin Shapiro&apos;s Photography</h1>
      </div>
      <div className={homestyles.container}>
        <div className={homestyles.row}>
          <div className={homestyles.column}>
            <Link href="/astro">
              <img src="https://live.staticflickr.com/65535/51546295256_b0c68e65b6_o.jpg"></img>
            </Link>
            <div className={homestyles.section_title}>
              <Link href="/astro">Astro</Link>
            </div>
          </div>
          <div className={homestyles.column}>
            <Link href="/wildlife">
              <img src="https://live.staticflickr.com/65535/51547217385_5e3a59dc05_o.jpg"></img>
            </Link>
            <div className={homestyles.section_title}>
              <Link href="/wildlife">Wildlife</Link>
            </div>
          </div>
          <div className={homestyles.column}>
            <Link href="/travel">
              <img src="https://live.staticflickr.com/65535/51545497352_de749d2b4d_o.jpg"></img>
            </Link>
            <div className={homestyles.section_title}>
              <Link href="/travel">Travel</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
