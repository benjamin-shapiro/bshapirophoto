import Head from "next/head";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import gallerystyles from "../styles/Gallery.module.css";

export default function About() {
  return (
    <div className={gallerystyles.page}>
      <Head>
        <title>About | Benjamin Shapiro Photography</title>
        <meta
          name="description"
          content="About Benjamin Shapiro and his photography portfolio."
        />
      </Head>
      <Nav />
      <main className={gallerystyles.content}>
        <header className={gallerystyles.hero}>
          <p className={gallerystyles.kicker}>About</p>
          <h1>Benjamin Shapiro</h1>
          <p>
            Photographer focused on astrophotography, wildlife, and travel.
            This portfolio highlights selected work across each collection.
          </p>
        </header>
      </main>
      <Footer />
    </div>
  );
}
