import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import logo from "../assets/image.png"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"; // Or use your existing SVG

export function NavbarWithSubmenu() {
  const [openNav, setOpenNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Close mobile nav if window resized >= 960px (lg breakpoint)
  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-gray-700">
      <li>
        <a href="https://ieee.lk/" target="_blank" className="p-1 font-medium hover:text-[#00629B]">
          Home
        </a>
      </li>

      {/* About Us with dropdown */}
      <li className="relative group">
        <a href="https://ieee.lk/about-us/" target="_blank" className="p-1 font-medium hover:text-[#00629B] flex items-center gap-1">
          About Us <ChevronDownIcon className="h-4 w-4 " />
        </a>
        <ul className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white text-sm shadow-xl rounded-md z-50 min-w-[200px] text-left">
          {[
            "Executive Committee 2025",
            "History",
            "Section Meetings",
            "Past Ex Coms",
            "IEEE",
            "Benefits"
          ].map((text, idx) => (
            <li key={idx}>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100 whitespace-nowrap">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </li>

      {/* News with dropdown */}
      <li className="relative group">
        <a href="https://ieee.lk/news/" target="_blank" className="p-1 font-medium hover:text-[#00629B] flex items-center gap-1">
          News <ChevronDownIcon className="h-4 w-4" />
        </a>
        <ul className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white text-sm shadow-xl rounded-md z-50 min-w-[160px] text-left">
          {["Awards 2025", "Past Awards", "Announcements"].map((text, idx) => (
            <li key={idx}>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100 whitespace-nowrap">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <a href="https://ieee.lk/events/" target="_blank" className="p-1 font-medium hover:text-[#00629B]">
          Events
        </a>
      </li>

      <li>
        <a href="https://ieee.lk/gallery/" target="_blank" className="p-1 font-medium hover:text-[#00629B]">
          Gallery
        </a>
      </li>

      {/* Organizational Units with dropdown */}
      <li className="relative group">
        <a href="https://ieee.lk/organizational-units/" target="_blank" className="p-1 font-medium hover:text-[#00629B] flex items-center gap-1">
          Organizational Units <ChevronDownIcon className="h-4 w-4 " />
        </a>
        <ul className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white text-sm shadow-xl rounded-md z-50 min-w-[220px] text-left">
          {[
            "Young Professional",
            "Women in Engineering",
            "Section Chapters",
            "Student Activities"
          ].map((text, idx) => (
            <li key={idx}>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100 whitespace-nowrap">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </li>

      {/* Documents */}
      <li className="relative group">
        <a href="https://ieee.lk/documents/" target="_blank" className="p-1 font-medium hover:text-[#00629B] flex items-center gap-1">
          Documents <ChevronDownIcon className="h-4 w-4" />
        </a>
        <ul className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md z-50 min-w-[220px] text-sm">
          {[
            "Guidelines – Conferences",
            "Guidelines – Student Activities",
            "Logo Guidelines",
            "ByLaws"
          ].map((item, idx) => (
            <li key={idx}>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100 whitespace-nowrap">{item}</a>
            </li>
          ))}
        </ul>
      </li>

      {/* Newsletter */}
      <li className="relative group">
        <a href="https://ieee.lk/newsletter/" target="_blank" className="p-1 font-medium hover:text-[#00629B] flex items-center gap-1">
          Newsletter <ChevronDownIcon className="h-4 w-4 " />
        </a>
        <ul className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md z-50 min-w-[200px] text-sm">
          {["Archives", "Article Submission", "Monthly Spotlight"].map((item, idx) => (
            <li key={idx}>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100 whitespace-nowrap">{item}</a>
            </li>
          ))}
        </ul>
      </li>

      {/* Conferences */}
      <li className="relative group">
        <a href="https://ieee.lk/conferences/" target="_blank" className="p-1 font-medium hover:text-[#00629B] flex items-center gap-1">
          Conferences <ChevronDownIcon className="h-4 w-4 " />
        </a>
        <ul className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md z-50 min-w-[200px] text-sm">
          {["Guidelines – Conferences", "Conferences"].map((item, idx) => (
            <li key={idx}>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100 whitespace-nowrap">{item}</a>
            </li>
          ))}
        </ul>
      </li>


      <li>
        <a href="https://ieee.lk/contact-us/" target="_blank" className="p-1 font-medium hover:text-[#00629B]">
          Contact Us
        </a>
      </li>

      <li className="relative hidden lg:flex items-center">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
        </button>
        {showSearch && (
          <div className="absolute top-full -left-[200px] mt-2 flex gap-2 bg-white p-4 rounded-md shadow-lg z-50 transition-all duration-300">
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="min-w-[250px] border border-gray-300 rounded-md pl-9 pr-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        )}

      </li>

    </ul>
  );


  return (
    <nav className="mx-auto max-w-screen-2xl px-4 py-2 lg:px-8 lg:py-4 border-b border-gray-100">
      <div className="w-full flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-white">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="hidden lg:flex items-center gap-4 text-sm font-bold text-[#0a88d1]">

          <a href="#" className="hover:text-[#00629B]">IEEE.org</a><span> |</span>
          <a href="#" className="hover:text-[#00629B]">IEEE Xplore Digital Library</a><span> |</span>
          <a href="#" className="hover:text-[#00629B]">IEEE Standards</a><span> |</span>
          <a href="#" className="hover:text-[#00629B]">IEEE Spectrum</a><span> |</span>
          <a href="#" className="hover:text-[#00629B]">More Sites</a>

        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full">

        {/* ✅ Show navList here on desktop */}
        <div className="hidden lg:flex items-center justify-center mt-5">
          {navList}
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setOpenNav(!openNav)}
          className="lg:hidden text-gray-700"
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* ✅ Mobile menu */}


      </div>

      
      {/* ✅ Mobile menu dropdown */}
      {openNav && (
        <div className="block lg:hidden mt-2">
          {navList}
        </div>
      )}

    </nav>
  );
}

export default NavbarWithSubmenu;
