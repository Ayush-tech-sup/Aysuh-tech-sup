import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "/images/Mehandi.webp",
    title: "Mehandi",
  },
  {
    src: "/images/Hand Menhandi.webp",
    title: "Mehandi",
  },
  {
    src: "/images/Bridal.webp",
    title: "Nail Art",
  },
  {
    src: "/images/Bridal1.webp",
    title: "Facial Glow",
  },
  {
    src: "/images/Mehandi1.webp",
    title: "HD Makeup",
  },
  {
    src: "/images/Mehandi2.webp",
    title: "Reception Look",
  },
  {
    src: "/images/Mehandi3.webp",
    title: "Reception Look",
  },
  {
    src: "/images/Mehandi4.webp",
    title: "Reception Look",
  },
  {
    src: "/images/Mehandi5.webp",
    title: "Reception Look",
  },
  {
    src: "/images/Mehandi6.webp",
    title: "Reception Look",
  },
  {
    type: "video",
    width: 1280,
    height: 720,
    poster: "/video/video-thumbnail.jpg", // Optional thumbnail
    sources: [
      {
        src: "/videos/Acadmy_Video.mp4",
        type: "video/mp4",
      },
    ],
    title: "Customer Testimonial",
  },
];

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
      />
    </div>
  );
};

export default GalleryPage;
