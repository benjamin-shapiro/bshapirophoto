import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav.js"
import Home from "../components/Home.js"

export default function Homescreen() {
  return (
    <div style={{backgroundColor: "black"}}>
      <Head>
        <meta
          name="keywords"
          content=
        "Benjamin Shapiro Cornell, Benjamin Shapiro Space, Benjamin Shapiro Astrophotography,\
        Ben Shapiro Photography,Ben Shapiro Photo, Benjamin Shapiro Photo, \
        Ben Shapiro Cornell, Ben Shapiro Astrophotography, Ben Shapiro Ithaca, \
        Benjamin Shapiro Ithaca, bshapirophoto, nashcalc, Astrophotography, \
        Travel Photography"
        />
      </Head>

      <div><Home/></div>
    </div>
  );
}
