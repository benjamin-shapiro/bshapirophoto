import GalleryPage from "../components/GalleryPage.js";
import { galleryCollectionMap } from "../lib/galleryData";

export default function Travel() {
  return <GalleryPage title="Travel" photos={galleryCollectionMap.travel.photos} />;
}
