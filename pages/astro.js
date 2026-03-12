import GalleryPage from "../components/GalleryPage.js";
import { galleryCollectionMap } from "../lib/galleryData";

export default function Astro() {
  return <GalleryPage title="Astro" photos={galleryCollectionMap.astro.photos} />;
}
