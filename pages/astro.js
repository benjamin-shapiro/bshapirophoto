import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.js";
import gallerystyles from "../styles/Gallery.module.css";

import astrobackyard from "../public/Astro/Astro Backyard.jpg";
import eyeofthestorm from "../public/Astro/Eye of the Storm.jpg";
import giantleap from "../public/Astro/Giant Leap.jpg";
import lunareclipse from "../public/Astro/Lunar Eclipse.jpg";
import mountainnight from "../public/Astro/Mountain Night.jpg";
import pathoftotality from "../public/Astro/Path of Totality.jpg";
import purplemountain from "../public/Astro/Purple Mountain.jpg";
import stellarmeditation from "../public/Astro/Stellar Meditation.jpg";

export default function Astro() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <Nav />
      </div>
      <div className={gallerystyles.gallery_title}>
        <h1>Astro</h1>
      </div>
      <Image src={astrobackyard} placeholder="blur"></Image>
      <Image src={eyeofthestorm} placeholder="blur"></Image>
      <Image src={giantleap} placeholder="blur"></Image>
      <Image src={lunareclipse} placeholder="blur"></Image>
      <Image src={mountainnight} placeholder="blur"></Image>
      <Image src={pathoftotality} placeholder="blur"></Image>
      <Image src={purplemountain} placeholder="blur"></Image>
      <Image src={stellarmeditation} placeholder="blur"></Image>
    </div>
  );
}
