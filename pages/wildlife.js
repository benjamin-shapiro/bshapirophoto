import GalleryPage from "../components/GalleryPage.js";
import { galleryCollectionMap } from "../lib/galleryData";

export default function Wildlife() {
  return (
    <GalleryPage title="Wildlife" photos={galleryCollectionMap.wildlife.photos} />
  );
}
