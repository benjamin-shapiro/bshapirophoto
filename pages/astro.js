import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.js";
import gallerystyles from "../styles/Gallery.module.css";
import Gallery from "react-photo-gallery";
import Helmet from "react-helmet";
import { RemoveScrollBar } from "react-remove-scroll-bar";

const photos = [
  {
    src: "https://live.staticflickr.com/65535/51516812124_f78ce1ced3_o.jpg",
    width: 1.7,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51515294152_c50081e95b_o.jpg",
    width: 1.9,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51515293907_7253b834d8_b.jpg",
    width: 1,
    height: 1.5,
  },
  {
    src: "https://live.staticflickr.com/65535/51516093686_bda7db148e_o.jpg",
    width: 1.65,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51517017150_da6741a378_o.jpg",
    width: 1.75,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51517017170_808e0cd3bd_b.jpg",
    width: 1.4,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516322838_48feedbae2_o.jpg",
    width: 1.4,
    height: 1,
  },

  {
    src: "https://live.staticflickr.com/65535/51516812109_6c3118cf43_o.jpg",
    width: 1.75,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51517016955_f56ff6a948_o.jpg",
    width: 1.5,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516322833_5e7c7e4f2f_o.jpg",
    width: 1.7,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516094376_7fa8d55e85_o.jpg",
    width: 1.1,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51515293832_174cf1a2c8_o.jpg",
    width: 1.6,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51517017235_db54b8ba7d_o.jpg",
    width: 1.7,
    height: 1,
  },
];

export default function Astro() {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #000000" }} />;
      <div>
        <Nav />
      </div>
      <div className={gallerystyles.gallery_title}>
        <h1>Astro</h1>
      </div>
      <Gallery photos={photos} />;
    </div>
  );
}
