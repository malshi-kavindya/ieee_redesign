import { useState, useEffect } from "react";
import img1 from "../assets/Home_images/gallery1.png";
import img2 from "../assets/Home_images/gallery2.png";
import img3 from "../assets/Home_images/gallery3.png";
import img4 from "../assets/Home_images/gallery4.png";
import img5 from "../assets/Home_images/gallery5.png";
import img6 from "../assets/Home_images/gallery6.png";
import img7 from "../assets/Home_images/gallery7.png";
import img8 from "../assets/Home_images/gallery8.png";
import img9 from "../assets/Home_images/gallery9.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const MovingGallery = () => {
  const visibleCount = 6;
  const length = images.length;
  const [startIndex, setStartIndex] = useState(0);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  const goToPrev = () => {
    setStartIndex((prev) => (prev - 1 + length) % length);
  };

  const goToNext = () => {
    setStartIndex((prev) => (prev + 1) % length);
  };

  // Get the images to show
  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(images[(startIndex + i) % length]);
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto  py-2 px-4">
      {/* Outer Arrows */}
      <div className="flex items-center justify-between">
        <button
          onClick={goToPrev}
          className="z-10 -ml-6 bg-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8 " />
        </button>

        {/* Image Row */}
        <div className="flex gap-4 overflow-hidden w-full px-2 py-5">
          {visibleImages.map((img, idx) => (
            <a
              key={idx}
              href="#"
              className="block w-1/6 flex-shrink-0" // keep fixed width
            >
              <img
                src={img}
                alt={`Gallery image ${(startIndex + idx) % length}`}
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:opacity-90 transition"
              />
            </a>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="z-10 -mr-6 bg-gray-300 p-2 rounded-full shadow-lg bg-gray-200 hover:bg-gray-400"
        >
          <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStartIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${idx === startIndex ? "bg-[#0a88d1] scale-110" : "bg-gray-300"
              }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovingGallery;
