import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav.js";
import Home from "../components/Home.js";
import Footer from "../components/Footer.js";

export default function Homescreen() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Head>
        <meta
          name="keywords"
          content="Benjamin Shapiro Cornell, Benjamin Shapiro Space, Benjamin Shapiro Astrophotography,\
        Ben Shapiro Photography,Ben Shapiro Photo, Benjamin Shapiro Photo, \
        Ben Shapiro Cornell, Ben Shapiro Astrophotography, Ben Shapiro Ithaca, \
        Benjamin Shapiro Ithaca, bshapirophoto, nashcalc, Astrophotography, \
        Travel Photography"
        />
          <link rel="icon" type="image/png" sizes="32x32" href="/eclipse32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/eclipse16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/eclipse-apple-touch.png" />
      </Head>

      <div>
        <Home />
        <Footer />
      </div>
    </div>
  );
}
