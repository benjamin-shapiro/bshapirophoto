import GalleryPage from "../components/GalleryPage.js";

const photos = [
  {
    src: "https://live.staticflickr.com/65535/51516094181_9efd513f47_o.jpg",
    width: 1.65,
    height: 1,
  },

  {
    src: "https://live.staticflickr.com/65535/51517017740_27f3220e50_o.jpg",
    width: 1.4,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51517017750_17d6938c19_o.jpg",
    width: 1.75,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516812589_f1fe3dc315_o.jpg",
    width: 1.65,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51517017580_b20ef5871b_o.jpg",
    width: 1.55,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516811889_0421dae463_o.jpg",
    width: 1.55,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516812569_d09326165c_o.jpg",
    width: 1.55,
    height: 1,
  },

  {
    src: "https://live.staticflickr.com/65535/51516322483_6034b8da27_o.jpg",
    width: 1.65,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516323188_e136401fed_o.jpg",
    width: 1.65,
    height: 1,
  },
  {
    src: "https://live.staticflickr.com/65535/51516094126_2c612368c8_o.jpg",
    width: 1.4,
    height: 1,
  },
];

export default function Travel() {
  return <GalleryPage title="Travel" photos={photos} />;
}
