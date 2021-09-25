import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.js";
import gallerystyles from "../styles/Gallery.module.css";

export default function Travel() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <Nav />
      </div>
      <div className={gallerystyles.gallery_title}>
        <h1>Travel</h1>
      </div>
    </div>
  );
}
