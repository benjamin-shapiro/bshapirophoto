import Image from "next/image";
import Link from "next/link";
import homestyles from "../styles/Home.module.css";

//import travelcover from "../pages/public/Cover Images/Davids and Goliath.jpg";
//import wildlifecover from "../pages/public/Cover Images/Eyes In A Green Ocean Cover.jpg";
//import astrocover from "../pages/public/Cover Images/Self Portrait.jpg";
//import experimentalcover from "../pages/public/Cover Images/Zara Eye.jpg";
//import triphammer from "../pages/public/ithaca/Trippin Hammer Swirl 2_.jpg";
import doge from "../public/testdoge.png";

export default function Home() {
  return (
    <div>
      <div className={homestyles.overall_title}>
        Benjamin Shapiro&apos;s Photography
      </div>
      <Link href="/astro">
        <Image src={doge} placeholder="blur"></Image>
      </Link>
    </div>
  );
}

/*
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
    <Link href="/ithaca">
      <Image src={triphammer} placeholder="blur"></Image>
    </Link>
    <div className={homestyles.section_title}>
      <Link href="/ithaca">Ithaca</Link>
    </div>
  </div>
  <div className={homestyles.column}>
    <Link href="/wildlife">
      <Image src={wildlifecover} placeholder="blur"></Image>
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
  <div className={homestyles.column}>
    <Link href="/experimental">
      <Image
        src={experimentalcover}
        layout="responsive"
        placeholder="blur"
      ></Image>
    </Link>
    <div className={homestyles.section_title}>
      <Link href="/experimental">Experimental</Link>
    </div>
  </div>
</div>
*/
