import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.js"

import astrobackyard from "../public/Astro/Astro Backyard.jpg";
import eyeofthestorm from "../public/Astro/Eye of the Storm.jpg";
import giantleap from "../public/Astro/Giant Leap.jpg";
import lunareclipse from "../public/Astro/Lunar Eclipse_.jpg";
import mountainnight from "../public/Astro/MountainNight2Healed.jpg";
import pathoftotality from "../public/Astro/Path of Totality.jpg";
import purplemountain from "../public/Astro/Purple Mountain.jpg";
import selfportrait from "../public/Astro/Self Portrait.jpg";
import stellarmeditation from "../public/Astro/Stellar Meditation.jpg";

export default function Astro() {
  return (
    <div>
      <div><Nav/></div>
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
