import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.js";
import gallerystyles from "../styles/Gallery.module.css";

/*
import astrobike from "../pages/public/ithaca/Astro Bike_.jpg";
import beebesouth from "../pages/public/ithaca/Beebe South Long.jpg";
import beebelong from "../pages/public/ithaca/Beebe Wide 2_.jpg";
import foresthome from "../pages/public/ithaca/Forest Home Intersection Night.jpg";
import fuertes from "../pages/public/ithaca/Fuertes Black and White_.jpg";
import mtpleasantroad from "../pages/public/ithaca/Mt. Pleasant Night_.jpg";
import taughannockcloud from "../pages/public/ithaca/Taughannock Cloudy_.jpg";
import triphammer from "../pages/public/ithaca/Trippin Hammer Swirl 2_.jpg";
*/

export default function Ithaca() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <Nav />
      </div>
      <div className={gallerystyles.gallery_title}>
        <h1>Ithaca</h1>
      </div>
    </div>
  );
}

/*
<Image src={astrobike} placeholder="blur"></Image>
<Image src={beebesouth} placeholder="blur"></Image>
<Image src={beebelong} placeholder="blur"></Image>
<Image src={foresthome} placeholder="blur"></Image>
<Image src={fuertes} placeholder="blur"></Image>
<Image src={mtpleasantroad} placeholder="blur"></Image>
<Image src={taughannockcloud} placeholder="blur"></Image>
<Image src={triphammer} placeholder="blur"></Image>*/
