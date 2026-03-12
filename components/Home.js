import Link from "next/link";
import homestyles from "../styles/Home.module.css";
import { galleryCollections } from "../lib/galleryData";

export default function Home() {
  return (
    <main className={homestyles.page}>
      <section className={homestyles.hero}>
        <p className={homestyles.kicker}>Photography Portfolio</p>
        <h1 className={homestyles.title}>Benjamin Shapiro</h1>
        <div className={homestyles.heroActions}>
          <Link href="/museum">
            <a className={homestyles.museumLink}>Enter Virtual Gallery</a>
          </Link>
        </div>
      </section>

      <section className={homestyles.grid} aria-label="Photo collections">
        {galleryCollections.map((collection) => (
          <Link key={collection.slug} href={collection.href}>
            <a className={homestyles.card}>
              <img
                className={homestyles.cardImage}
                src={collection.previewImage}
                alt={`${collection.title} photography preview`}
              />
              <span className={homestyles.cardShade} />
              <div className={homestyles.cardContent}>
                <h2 className={homestyles.cardTitle}>{collection.title}</h2>
              </div>
            </a>
          </Link>
        ))}
      </section>
    </main>
  );
}
