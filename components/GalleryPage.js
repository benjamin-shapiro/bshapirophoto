import Head from "next/head";
import Gallery from "react-photo-gallery";
import Nav from "./Nav";
import Footer from "./Footer";
import gallerystyles from "../styles/Gallery.module.css";

export default function GalleryPage({ title, photos }) {
  return (
    <div className={gallerystyles.page}>
      <Head>
        <title>{title} | Benjamin Shapiro Photography</title>
        <meta
          name="description"
          content={`${title} collection by Benjamin Shapiro Photography.`}
        />
      </Head>
      <Nav />
      <main className={gallerystyles.content}>
        <header className={gallerystyles.hero}>
          <p className={gallerystyles.kicker}>Collection</p>
          <h1>{title}</h1>
        </header>
        <section className={gallerystyles.galleryWrap} aria-label={title}>
          <Gallery photos={photos} margin={10} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
