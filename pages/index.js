import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import travelcover from "../public/Cover Images/Davids and Goliath.jpg";
import wildlifecover from "../public/Cover Images/Eyes In A Green Ocean Cover.jpg";
import astrocover from "../public/Cover Images/Self Portrait.jpg";
import experimentalcover from "../public/Cover Images/Zara Eye.jpg";
import ithacacover from "../public/ithaca/Trippin Hammer Swirl 2_.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Benjamin Shapiro's Photography</title>
        <meta
          name="keywords"
          content="Benjamin Shapiro Photography,
        Benjamin Shapiro Cornell, Benjamin Shapiro Space,
        Benjamin Shapiro Astrophotography, Ben Shapiro Photography,
        Ben Shapiro Photo, Benjamin Shapiro Photo,
        Ben Shapiro Cornell, Ben Shapiro Astrophotography, Ben Shapiro Ithaca,
        Benjamin Shapiro Ithaca, bshapirophoto, nashcalc, Astrophotography,
        Travel Photography"
        />
      </Head>
      <Link href="/travel">
        <Image src={travelcover} placeholder="blur"></Image>
      </Link>
      <Link href="/wildlife">
        <Image src={wildlifecover} placeholder="blur"></Image>
      </Link>
      <Link href="/astro">
        <Image src={astrocover} placeholder="blur"></Image>
      </Link>
      <Link href="/ithaca">
        <Image src={ithacacover} placeholder="blur"></Image>
      </Link>
      <Link href="/experimental">
        <Image src={experimentalcover} placeholder="blur"></Image>
      </Link>
    </div>
  );
}
