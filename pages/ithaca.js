import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.js";
import gallerystyles from "../styles/Gallery.module.css";

import astrobike from "../public/Ithaca/Astro Bike.jpg";
import beebesouth from "../public/Ithaca/Beebe South Long.jpg";
import beebelong from "../public/Ithaca/Beebe Wide.jpg";
import foresthome from "../public/Ithaca/Forest Home Intersection Night.jpg";
import fuertes from "../public/Ithaca/Fuertes Black and White.jpg";
import mtpleasantroad from "../public/Ithaca/Mt. Pleasant Night.jpg";
import taughannockcloud from "../public/Ithaca/Taughannock Cloudy.jpg";
import triphammer from "../public/Ithaca/Trippin Hammer Swirl.jpg";

export default function Ithaca() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <Nav />
      </div>
      <div className={gallerystyles.gallery_title}>
        <h1>Ithaca</h1>
      </div>
      <Image src={astrobike} placeholder="blur"></Image>
      <Image src={beebesouth} placeholder="blur"></Image>
      <Image src={beebelong} placeholder="blur"></Image>
      <Image src={foresthome} placeholder="blur"></Image>
      <Image src={fuertes} placeholder="blur"></Image>
      <Image src={mtpleasantroad} placeholder="blur"></Image>
      <Image src={taughannockcloud} placeholder="blur"></Image>
      <Image src={triphammer} placeholder="blur"></Image>
    </div>
  );
}
