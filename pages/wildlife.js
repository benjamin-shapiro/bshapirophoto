import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.js";
import gallerystyles from "../styles/Gallery.module.css";
import Gallery from "react-photo-gallery";
import Helmet from "react-helmet";
import { RemoveScrollBar } from "react-remove-scroll-bar";

const photos = [
  {
    src: "https://live.staticflickr.com/65535/51517017360_9c601d6a63_o.jpg",
    width: 1.5,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51517017275_1368a27e13_o.jpg",
    width: 1.5,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51515294217_a3b21ced6b_o.jpg",
    width: 1.4,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516812199_84d3f016b7_o.jpg",
    width: 1.65,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516812259_5eea571c31_o.jpg",
    width: 1.65,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51515294322_5e26decb1d_o.jpg",
    width: 2.5,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51515294332_b96838d759_o.jpg",
    width: 1.5,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516094026_ffe3e52f62_o.jpg",
    width: 1.55,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516094036_d0394f6b95_o.jpg",
    width: 1.5,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516323158_64aeafe655_o.jpg",
    width: 1,
    height: 1,
  },
];

export default function Wildlife() {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #000000" }} />;
      <div>
        <Nav />
      </div>
      <div className={gallerystyles.gallery_title}>
        <h1>Wildlife</h1>
      </div>
      <Gallery photos={photos} />;
    </div>
  );
}
