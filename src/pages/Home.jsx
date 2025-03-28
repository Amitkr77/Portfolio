// src/pages/Home.js
import React from "react";
import JelloAnimation from "../components/JelloAnimation";
import dots from "../assets/side-dots.png";


const Home = ({ handleClick }) => {
  return (
    <section className="relative h-screen w-full bg-black text-white flex flex-col sm:flex-row">
  {/* Background Dots Image */}
  <img
    src={dots}
    alt="dots image"
    className="absolute top-1/2 transform -translate-y-1/2 -right-1/2 opacity-20 sm:opacity-100"
  />

  {/* SVG Graphic with Filter */}
  <div className="absolute -bottom-72 -left-60 rotate-180 z-20 sm:hidden">
    <svg
      width="600"
      height="600"
      viewBox="0 0 785 785"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>
      <g filter="url(#blur)">
        <path d="M208.657 498.548L225.513 499.032L230.168 514.126L213.53 514.354L208.657 498.548Z" fill="#F4A949"></path>
        <path d="M235.077 498.261L251.912 498.75L256.557 513.838L239.929 514.075L235.077 498.261Z" fill="#F4A949"></path>
        <path d="M307.426 397.259L421.855 398.512L426.499 413.615L312.283 413.065L307.426 397.259Z" fill="#9C27B0"></path>
        {/* More paths for the SVG */}
      </g>
    </svg>
  </div>

  {/* Main Content */}
  <div className="absolute top-1/2 transform -translate-y-1/2 w-full sm:w-3/5 md:w-2/5 ml-4 md:ml-9 px-4 text-center sm:text-left">
    <div className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
      <JelloAnimation text="Front-End Software" wordSpacing="space-x-6" />
      <JelloAnimation text="Developer" wordSpacing="space-x-6" />
    </div>
    <p className="mt-6 sm:mt-8 md:mt-9 text-lg sm:text-xl text-left md:text-left">
      Resolving design problems, building smart user interfaces and useful
      interactions, developing rich web applications and seamless web
      experiences.
    </p>

    <button
      onClick={handleClick}
      className="about-link flex items-center justify-center md:justify-start mt-6 sm:mt-8 px-6 py-2 rounded-md bg-[#9C27B0] text-white hover:bg-[#7b1fa2] transition-all duration-300"
    >
      <h1 className="text-base sm:text-lg">About me</h1>
      <span className="rotate-arrow ml-1 transition-all duration-300 ease-in-out">
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 22"
          width="20"
          height="20"
        >
          <path
            className="solid"
            d="M7.94 2.94a1.49 1.49 0 0 0 0 2.12L14.88 12l-6.94 6.94c-.59.59-.59 1.54 0 2.12s1.54.59 2.12 0l8-8c.29-.29.44-.68.44-1.06s-.15-.77-.44-1.06l-8-8a1.49 1.49 0 0 0-2.12 0Z"
          ></path>
        </svg>
      </span>
    </button>
  </div>

  {/* Robot Icon (Visible only on larger screens) */}
  <div className="absolute top-96 right-96 hidden sm:block">
    <robot width="200" height="200" />
  </div>
</section>

  );
};

export default Home;
