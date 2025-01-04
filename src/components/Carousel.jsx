  import React, { useState, useEffect } from "react";
  import gsap from "gsap";  // Import GSAP for animations
  import NoteNest from "../assets/projects/NoteNest.png";
  import SkySync from "../assets/projects/SkySync.png";
  import HungerFood from "../assets/projects/HungerFood.png";
  import NeoGym from "../assets/projects/NeoGym.png";
  import ExamEase from "../assets/projects/ExamEase.png";
  import JelloAnimation from "../components/JelloAnimation";

  const Carousel = () => {
    const slides = [
      {
        title: "San Francisco",
        description:
          "San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California.",
        image: NoteNest, 
      },
      {
        title: "ExamEase",
        description:
          "NoteNest is a text-based note-taking app where users can save and organize their work in a database. It functions like a digital workbook, allowing easy access and management of all saved notes.",
        image: ExamEase,
        alt: "A description of the image",
      },
      {
        title: "NoteNest",
        description:
          "NoteNest is a text-based note-taking app where users can save and organize their work in a database. It functions like a digital workbook, allowing easy access and management of all saved notes.",
        image: NoteNest,
      },
      {
        title: "HungerFood",
        description:
          "HungerFood is a MERN stack-based food delivery app that allows users to browse menus and place orders. It enables seamless ordering and delivery tracking in real-time.",
        image: HungerFood,
      },
      {
        title: "NeoGym",
        description:
          "NeoGym is a MERN stack-based fitness app with personalized workout plans and progress tracking. Its key feature is an admin control panel for managing users, workouts, and content.",
        image: NeoGym,
      },
      {
        title: "SkySync",
        description:
          "SkySync is a React-based weather app offering real-time data, rain probability charts, and an interactive global map. It integrates with weather APIs for accurate, up-to-date forecasts.",
        image: SkySync,
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      // Reset the slide position and opacity before starting the new animation
      gsap.set(".carousel-slide", { opacity: 0, x: -2000, scale: 0.95 });
    
      gsap.to(".carousel-slide", {
        opacity: 1,
        x: 0,
        scale: 1,
        rotation: 0,
        stagger: 0.2,
        duration: 1,  // Adjust the duration for smoother effect
        ease: "expo.out",  // Smooth easing function
        delay: 0.2,  // Delay slightly for better flow
      });
    }, [currentIndex]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
      <div className="relative flex items-center justify-center bg-transparent text-white p-6 rounded-lg z-20">
        {/* Previous Arrow */}
        {/* <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          onClick={handlePrev}
        >
          <svg
            className="fill-white w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M7.94 2.94a1.49 1.49 0 0 0 0 2.12L14.88 12l-6.94 6.94c-.59.59-.59 1.54 0 2.12s1.54.59 2.12 0l8-8c.29-.29.44-.68.44-1.06s-.15-.77-.44-1.06l-8-8a1.49 1.49 0 0 0-2.12 0Z"
            ></path>
          </svg>
        </button> */}

        {/* Slide */}
        <div className="carousel-slide flex items-center justify-between space-x-8 transition-all ease-in-out duration-300">
          {currentIndex === 0 ? (
            <div className="flex flex-col justify-center items-center h-80 w-full px-16 space-y-4 text-center">
              <div className="text-5xl font-bold">
                <JelloAnimation text="Portfolio & Projects" />
              </div>
              <h1 className="text-xl text-white p-4 px-28">
                I have built various different projects to fit different aspects
                of the client's business. If you want to see more examples of my
                work than the ones showcased in this site, please contact me!
              </h1>
              <button className="text-purple-500 font-semibold hover:scale-125 transition-all duration-300" onClick={handleNext}>See projects {" >"}</button>
            </div>
          ) : (
            <div className="flex-1 flex justify-between items-center space-x-6">
              <div className="flex-1 space-y-8 pr-12">
                <h2 className="text-4xl font-semibold text-gray-100">{slides[currentIndex].title}</h2>
                <p className="text-gray-300 mt-2">{slides[currentIndex].description}</p>
                <div className="space-y-2 flex flex-col">
                  <a href="#" className="inline-block text-blue-500 hover:underline">
                    View the code {" >"}
                  </a>
                  <a href="#" className="inline-block text-orange-500 hover:underline">
                    Visit the app {" >"}
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className="rounded-lg shadow-lg w-[500px] h-[300px] object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Next Arrow */}
        {/* <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          onClick={handleNext}
        >
          <svg
            className="fill-white w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M7.94 2.94a1.49 1.49 0 0 0 0 2.12L14.88 12l-6.94 6.94c-.59.59-.59 1.54 0 2.12s1.54.59 2.12 0l8-8c.29-.29.44-.68.44-1.06s-.15-.77-.44-1.06l-8-8a1.49 1.49 0 0 0-2.12 0Z"
            ></path>
          </svg>
        </button> */}

        {/* Pagination Dots */}
        <div className="absolute bottom-0 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3  rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#333] scale-125 hover:scale-95" : "bg-[#333] scale-50 hover:scale-90"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  export default Carousel;
