import Image from "next/image";
import Link from "next/link";
import homestyles from "../styles/Home.module.css";
import Helmet from "react-helmet";

import travelcover from "../public/Cover Images/Davids and Goliath.jpg";
import wildlifecover from "../public/Cover Images/Eyes In A Green Ocean.jpg";
import astrocover from "../public/Cover Images/Stellar Meditation.jpg";

export default function Home() {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #000000" }} />;
      <div className={homestyles.overall_title}>
        Benjamin Shapiro&apos;s Photography
      </div>
      <div className={homestyles.row}>
        <div className={homestyles.column}>
          <Link href="/astro">
            <Image src={astrocover} placeholder="blur"></Image>
          </Link>
          <div className={homestyles.section_title}>
            <Link href="/astro">Astro</Link>
          </div>
        </div>
        <div className={homestyles.column}>
          <Link href="/wildlife">
            <Image src={wildlifecover} placeholder="blur" width="500 "></Image>
          </Link>
          <div className={homestyles.section_title}>
            <Link href="/wildlife">Wildlife</Link>
          </div>
        </div>
        <div className={homestyles.column}>
          <Link href="/travel">
            <Image src={travelcover} placeholder="blur"></Image>
          </Link>
          <div className={homestyles.section_title}>
            <Link href="/travel">Travel</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
