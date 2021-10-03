import Image from "next/image";
import Link from "next/link";
import homestyles from "../styles/Home.module.css";
import Helmet from "react-helmet";

import travelcover from "/public/Davids and Goliath Crop.jpg";
import wildlifecover from "/public/Eyes In A Green Ocean Crop.jpg";
import astrocover from "/public/Mountain Night Crop.jpg";

export default function Home() {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #000000" }} />;
      <div className={homestyles.overall_title}>
        Benjamin Shapiro&apos;s Photography
      </div>
      <div className={homestyles.container}>
        <div className={homestyles.row}>
          <div className={homestyles.column}>
            <Link href="/astro">
              <Image src={astrocover}></Image>
            </Link>
            <div className={homestyles.section_title}>
              <Link href="/astro">Astro</Link>
            </div>
          </div>
          <div className={homestyles.column}>
            <Link href="/wildlife">
              <Image src={wildlifecover}></Image>
            </Link>
            <div className={homestyles.section_title}>
              <Link href="/wildlife">Wildlife</Link>
            </div>
          </div>
          <div className={homestyles.column}>
            <Link href="/travel">
              <Image src={travelcover}></Image>
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
