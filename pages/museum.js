import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MuseumExperience from "../components/MuseumExperience";
import museumStyles from "../styles/Museum.module.css";

export default function MuseumPage() {
  return (
    <div className={museumStyles.page}>
      <Head>
        <title>Museum | Benjamin Shapiro Photography</title>
        <meta
          name="description"
          content="A walkable virtual museum of Benjamin Shapiro's astro, wildlife, and travel photography."
        />
      </Head>
      <Nav />
      <main className={museumStyles.pageShell}>
        <header className={museumStyles.pageIntro}>
          <p className={museumStyles.pageKicker}>Virtual Gallery</p>
          <h1 className={museumStyles.pageTitle}>Museum</h1>
          <p className={museumStyles.pageNote}>
            Three connected wings, one quiet walk-through.
          </p>
        </header>
        <MuseumExperience />
      </main>
      <Footer />
    </div>
  );
}
