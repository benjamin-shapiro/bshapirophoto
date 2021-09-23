import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.js";

import astrobike from "../public/ithaca/Astro Bike_.jpg";
import beebesouth from "../public/ithaca/Beebe South Long.jpg";
import beebelong from "../public/ithaca/Beebe Wide 2_.jpg";
import foresthome from "../public/ithaca/Forest Home Intersection Night.jpg";
import fuertes from "../public/ithaca/Fuertes Black and White_.jpg";
import mtpleasantroad from "../public/ithaca/Mt. Pleasant Night_.jpg";
import taughannockcloud from "../public/ithaca/Taughannock Cloudy_.jpg";
import triphammer from "../public/ithaca/Trippin Hammer Swirl 2_.jpg";

export default function Ithaca() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <h1>Ithaca</h1>
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
