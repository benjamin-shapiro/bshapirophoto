import Link from "next/link";
import homestyles from "../styles/Home.module.css";

const collections = [
  {
    href: "/astro",
    title: "Astro",
    image:
      "https://live.staticflickr.com/65535/51546295256_b0c68e65b6_o.jpg",
  },
  {
    href: "/wildlife",
    title: "Wildlife",
    image:
      "https://live.staticflickr.com/65535/51547217385_5e3a59dc05_o.jpg",
  },
  {
    href: "/travel",
    title: "Travel",
    image:
      "https://live.staticflickr.com/65535/51545497352_de749d2b4d_o.jpg",
  },
];

export default function Home() {
  return (
    <main className={homestyles.page}>
      <section className={homestyles.hero}>
        <p className={homestyles.kicker}>Photography Portfolio</p>
        <h1 className={homestyles.title}>Benjamin Shapiro</h1>
      </section>

      <section className={homestyles.grid} aria-label="Photo collections">
        {collections.map((collection) => (
          <Link key={collection.href} href={collection.href}>
            <a className={homestyles.card}>
              <img
                className={homestyles.cardImage}
                src={collection.image}
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
