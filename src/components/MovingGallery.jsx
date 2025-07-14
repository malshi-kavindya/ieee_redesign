import img1 from "../assets/Home_images/gallery1.png";
import img2 from "../assets/Home_images/gallery2.png";
import img3 from "../assets/Home_images/gallery3.png";
import img4 from "../assets/Home_images/gallery4.png";
import img5 from "../assets/Home_images/gallery5.png";
import img6 from "../assets/Home_images/gallery6.png";
import img7 from "../assets/Home_images/gallery7.png";
import img8 from "../assets/Home_images/gallery8.png";
import img9 from "../assets/Home_images/gallery9.png";

const row1Images = [img2, img4, img6, img8 ,img9 ,img1, img3, img5, img4 , ];
const row2Images = [img1, img2, img3, img4 ,img5, img6, img7, img8 ,img9 , ];

const MovingGallery = () => {
  return (
    <div className="overflow-hidden w-full max-w-7xl mx-auto py-8 px-2">
      

      <div className="space-y-6">
        {/* Row 1 - scrolls left */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-left-scroll w-max">
            {[...row1Images, ...row1Images].map((img, idx) => (
              <img
                key={`top-${idx}`}
                src={img}
                alt={`Top Gallery ${idx}`}
                className="w-72 h-48 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls left but slower */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-left-scroll-slow w-max">
            {[...row2Images, ...row2Images].map((img, idx) => (
              <img
                key={`bottom-${idx}`}
                src={img}
                alt={`Bottom Gallery ${idx}`}
                className="w-72 h-48 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-left-scroll {
          animation: scroll-left 20s linear infinite;
        }

        .animate-left-scroll-slow {
          animation: scroll-left 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MovingGallery;
