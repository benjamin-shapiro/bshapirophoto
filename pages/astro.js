import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.js";

import astrobackyard from "../pages/public/Astro/Astro Backyard.jpg";
import eyeofthestorm from "../pages/public/Astro/Eye of the Storm.jpg";
import giantleap from "../pages/public/Astro/Giant Leap.jpg";
import lunareclipse from "../pages/public/Astro/Lunar Eclipse_.jpg";
import mountainnight from "../pages/public/Astro/MountainNight2Healed.jpg";
import pathoftotality from "../pages/public/Astro/Path of Totality.jpg";
import purplemountain from "../pages/public/Astro/Purple Mountain.jpg";
import selfportrait from "../pages/public/Astro/Self Portrait.jpg";
import stellarmeditation from "../pages/public/Astro/Stellar Meditation.jpg";

export default function Astro() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <h1>Astro</h1>
      <Image src={astrobackyard} placeholder="blur"></Image>
      <Image src={eyeofthestorm} placeholder="blur"></Image>
      <Image src={giantleap} placeholder="blur"></Image>
      <Image src={lunareclipse} placeholder="blur"></Image>
      <Image src={mountainnight} placeholder="blur"></Image>
      <Image src={pathoftotality} placeholder="blur"></Image>
      <Image src={purplemountain} placeholder="blur"></Image>
      <Image src={selfportrait} placeholder="blur"></Image>
      <Image src={stellarmeditation} placeholder="blur"></Image>
    </div>
  );
}
