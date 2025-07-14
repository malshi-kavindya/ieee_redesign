import Footer from "../components/Footer";
import Header from "../components/Header";
import UpcomingEvents from "../components/UpcomingEvents";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import MovingGallery from "../components/MovingGallery";
import img1 from "../assets/Home_images/1.png";
import img2 from "../assets/Home_images/2.png";
import img3 from "../assets/Home_images/3.png";
import img4 from "../assets/Home_images/4.png";
import img5 from "../assets/Home_images/5.png";
import icon1 from "../assets/Home_images/logo1.png";
import icon2 from "../assets/Home_images/logo2.png";
import icon3 from "../assets/Home_images/logo3.png";
import icon4 from "../assets/Home_images/logo4.png";



import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


//const images = [img2, img1, img3, img4, img5];
const images = [
  { url: img1, link: "https://ieee.lk/about-us" },
  { url: img2, link: "https://ieee.lk/news" },
  { url: img3, link: "https://ieee.lk/contact" },
  { url: img4, link: "https://ieee.lk/contact" },
  { url: img5, link: "https://ieee.lk/contact" },
];
const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);


  // Auto cycle images every 5s

  const goToPrev = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const goToNext = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);
  return (
    <div>
      <Header />
      <main className="bg-gray-100 pt-[5px]">
        <section className="relative h-[380px] md:h-[400px] lg:h-[560px] flex items-center justify-center overflow-hidden text-center">

          {/* Clickable Background Images */}
          {images.map((img, index) => (
            <a
              key={index}
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${currentImage === index ? "opacity-100" : "opacity-0"
                }`}
              style={{ backgroundImage: `url(${img.url})`, zIndex: 0 }}
            />
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
          >
            <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
          >
            <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>


        </section>



        <section className="flex flex-col items-center justify-center text-center bg-white p-6 md:p-10 ">
          <h2 className="text-2xl lg:text-2xl font-bold mb-6">
            <span className="text-[#0a88d1]">Welcome to IEEE Sri Lanka Section</span>
          </h2>

          <p className="max-w-6xl text-base font-medium leading-relaxed mb-6">
            The IEEE Sri Lanka Section has been transformed into a global technology platform for the technical professionals of the country.
            It is thriving to bring technical innovation and excellence for the benefit of humanity and achieve technical professionalism.
          </p>


        </section>


        {/* Impact Section */}
        <section className="p-2 md:p-10 bg-white text-center text-blue-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: icon1, label: "Innovation" },
              { icon: icon2, label: "Tradition" },
              { icon: icon3, label: "Humanity" },
              { icon: icon4, label: "Life" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 md:p-10 bg-blue-400 hover:scale-105 shadow-md rounded-2xl transition-transform"
              >
                <div className="flex justify-center ">
                  <img src={item.icon} alt="icon" className="w-20 h-20 object-contain" />
                </div>
                <p className="text-lg md:text-2xl font-bold">{item.label}</p>
              </div>
            ))}
          </div>
        </section>



        <section className="flex flex-col items-center justify-center text-center bg-white  p-6 md:p-10 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
             <span className="text-[#0a88d1]"> About IEEE Sri Lanka Section</span>
          </h2>

          <p className="max-w-6xl text-base font-medium leading-relaxed ">
            Formed on the 14th of November 2003, IEEE Sri Lanka Section (member of IEEE Region 10) is growing and expanding at an accelerated pace since then, achieving immense success. The increasing number of passionate set of volunteers helps the Section strive towards greater heights year by year. The vibrant community of the IEEE Sri Lanka Section comprises of university academic staff members, industry professionals and undergraduate and graduate students across the country. IEEE Sri Lanka Section has been established to foster technological innovation and excellence for the benefit of humanity and for the advancement of technical professionalism. Our aim is to be the platform of the global technical community for the aspiring tech professionals of tomorrow
          </p>


        </section>


       

        {/* Featured Events */}
        <section className="p-6 md:p-10 bg-white relative">
          <div>
            <MovingGallery />
          </div>
        </section>


 {/* Upcoming Events */}
        <section className="p-6 md:p-10 bg-gray-300">
          <UpcomingEvents />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
