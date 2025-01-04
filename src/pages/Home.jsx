// src/pages/Home.js
import React from "react";
import JelloAnimation from "../components/JelloAnimation";
import dots from "../assets/side-dots.png";


const Home = ({ handleClick }) => {
  return (
    <section className="relative h-screen w-full bg-black text-white flex   ">
      <img
        src={dots}
        alt="dots image"
        className="absolute top-1/2 transform -translate-y-1/2 -right-1/2  "
      />

      <div className="absolute -bottom-72 -left-60 rotate-180 z-20">
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
            <path
              d="M208.657 498.548L225.513 499.032L230.168 514.126L213.53 514.354L208.657 498.548Z"
              fill="#F4A949"
            ></path>
            <path
              d="M235.077 498.261L251.912 498.75L256.557 513.838L239.929 514.075L235.077 498.261Z"
              fill="#F4A949"
            ></path>
            <path
              d="M307.426 397.259L421.855 398.512L426.499 413.615L312.283 413.065L307.426 397.259Z"
              fill="#9C27B0"
            ></path>
            <path
              d="M236.524 464.625L350.959 465.876L355.613 480.976L241.382 480.431L236.524 464.625Z"
              fill="#1C5F9A"
            ></path>
            <path
              d="M164.68 329.319L379.912 331.535L384.559 346.641L169.537 345.122L164.68 329.319Z"
              fill="#1C5F9A"
            ></path>
            <path
              d="M315.424 361.578L530.632 363.8L535.287 378.898L320.264 377.381L315.424 361.578Z"
              fill="#1C5F9A"
            ></path>
            <path
              d="M272.653 396.776L289.498 397.256L294.142 412.351L277.522 412.579L272.653 396.776Z"
              fill="#F4A949"
            ></path>
            <path
              d="M150.644 396.443L265.097 397.694L269.74 412.787L155.518 412.252L150.644 396.443Z"
              fill="#1C5F9A"
            ></path>
            <path
              d="M371.415 464.065L532.437 464.547L537.092 479.643L376.284 479.866L371.415 464.065Z"
              fill="#F4A949"
            ></path>
            <path
              d="M512.791 498.473L824.945 498.049L829.587 513.153L517.661 514.272L512.791 498.473Z"
              fill="#9C27B0"
            ></path>
            <path
              d="M385.622 429.213L614.965 427.93L619.618 443.028L390.483 445.025L385.622 429.213Z"
              fill="#9C27B0"
            ></path>
            <path
              d="M245.346 363.214L294.138 363.402L298.783 378.499L250.217 379.024L245.346 363.214Z"
              fill="#9C27B0"
            ></path>
            <path
              d="M116.528 296.579L261.58 295.665L266.226 310.754L121.394 312.371L116.528 296.579Z"
              fill="#1C5F9A"
            ></path>
            <path
              d="M360.715 295.852L708.092 292.363L712.742 307.46L365.578 311.656L360.715 295.852Z"
              fill="#1C5F9A"
            ></path>
            <path
              d="M278.465 295.126L345.554 295.501L350.194 310.596L283.331 310.943L278.465 295.126Z"
              fill="#F4A949"
            ></path>
            <path
              d="M39.6893 296.672L106.789 297.02L111.441 312.117L44.5643 312.46L39.6893 296.672Z"
              fill="#1C5F9A"
            ></path>
            <path
              d="M89.264 330.329L156.347 330.696L160.994 345.8L94.1232 346.141L89.264 330.329Z"
              fill="#9C27B0"
            ></path>
            <path
              d="M164.046 464.415L231.133 464.783L235.785 479.882L168.898 480.227L164.046 464.415Z"
              fill="#9C27B0"
            ></path>
            <path
              d="M94.0035 364.215L234.347 364.657L239 379.77L98.8707 380.014L94.0035 364.215Z"
              fill="#F4A949"
            ></path>
            <path
              d="M70.7135 397.331L137.809 397.695L142.459 412.799L75.5792 413.14L70.7135 397.331Z"
              fill="#1C5F9A"
            ></path>
            <path
              d="M141.758 430.922L363.133 429.239L367.776 444.342L146.622 446.733L141.758 430.922Z"
              fill="#1C5F9A"
            ></path>
            <path
              d="M263.757 498.926L485.144 497.231L489.799 512.33L268.62 514.719L263.757 498.926Z"
              fill="#1C5F9A"
            ></path>
            <path
              d="M91.3904 464.47L158.482 464.828L163.128 479.931L96.2502 480.273L91.3904 464.47Z"
              fill="#F4A949"
            ></path>
            <path
              d="M135.153 497.873L200.47 498.742L205.114 513.843L140.026 513.671L135.153 497.873Z"
              fill="#1C5F9A"
            ></path>
          </g>
        </svg>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full sm:w-3/5 md:w-2/5 ml-4 md:ml-9 px-4">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left">
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
          className="about-link flex items-center justify-center md:justify-start mt-6 sm:mt-8"
        >
          <h1 className="text-[#9C27B0] text-base sm:text-lg">About me </h1>
          <span className="rotate-arrow ml-1 transition-all duration-300 ease-in-out">
            <svg
              className="fill-[#9C27B0]"
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

      <div className="absolute top-96 right-96">
        <robot width="200" height="200" />{" "}
      </div>
    </section>
  );
};

export default Home;
