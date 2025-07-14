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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const MovingGallery = () => {
  const visibleCount = 6;
  const length = images.length;

  const [startIndex, setStartIndex] = useState(0);

  // Auto advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  const goToPrev = () => {
    setStartIndex((prev) => (prev - 1 + length) % length);
  };

  const goToNext = () => {
    setStartIndex((prev) => (prev + 1) % length);
  };

  // Visible images from startIndex, wrapping around
  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(images[(startIndex + i) % length]);
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto py-2 px-2">
      {/* Images */}
      <div className="flex gap-4 overflow-hidden">
        {visibleImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Gallery image ${(startIndex + idx) % length}`}
            className="w-1/5 h-48 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        ◀
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        ▶
      </button>

      {/* Pagination dots for each image */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStartIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === startIndex ? "bg-blue-400" : "bg-gray-300"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovingGallery;
