import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.js";
import gallerystyles from "../styles/Gallery.module.css";
import Gallery from "react-photo-gallery";

//import astrobackyard from "https://live.staticflickr.com/65535/51517017235_db54b8ba7d_o.jpg";
//import eyeofthestorm from "https://www.flickr.com/photos/181962228@N06/51516812124/in/album-72157719902782403/.jpg";
/*
import giantleap from "../public/Astro/Giant Leap.jpg";
import lunareclipse from "../public/Astro/Lunar Eclipse.jpg";
import mountainnight from "../public/Astro/Mountain Night.jpg";
import pathoftotality from "../public/Astro/Path of Totality.jpg";
import purplemountain from "../public/Astro/Purple Mountain.jpg";
import stellarmeditation from "../public/Astro/Stellar Meditation.jpg";
*/

const photos = [
  {
    src: "https://live.staticflickr.com/65535/51517017235_db54b8ba7d_o.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516812124_f78ce1ced3_o.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51515294152_c50081e95b_o.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516322833_5e7c7e4f2f_o.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516812124_f78ce1ced3_o.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516812124_f78ce1ced3_o.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516812124_f78ce1ced3_o.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516812124_f78ce1ced3_o.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516812124_f78ce1ced3_o.jpg",
    width: 2,
    height: 1,
  },
];

export default function Astro() {
  return (
    <div style={{ backgroundColor: "black" }}>
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

/*
<Image src={astrobackyard} placeholder="blur"></Image>
<Image src={eyeofthestorm} placeholder="blur"></Image>
<Image src={giantleap} placeholder="blur"></Image>
<Image src={lunareclipse} placeholder="blur"></Image>
<Image src={mountainnight} placeholder="blur"></Image>
<Image src={pathoftotality} placeholder="blur"></Image>
<Image src={purplemountain} placeholder="blur"></Image>
<Image src={stellarmeditation} placeholder="blur"></Image>
*/
