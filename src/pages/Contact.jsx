import React, { useEffect, useRef } from "react";
import GlobeComponent from "../components/GlobeComponent";
import { gsap } from "gsap";
import whiteCube from "../assets/white_cube1.png";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // GSAP Animations for smooth transition on scroll
            gsap.fromTo(
              ".globe",
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
            );

            gsap.fromTo(
              ".text",
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
                stagger: 0.2,
              }
            );

            gsap.fromTo(
              ".email",
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power3.out" }
            );

            observer.disconnect(); // Stop observing after triggering animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex justify-center bg-black text-white "
    >
      <div className="flex w-full h-full space-x-4 p-20 ">
        {/* Globe Component */}
        <div className="globe flex justify-center items-center w-1/2 ">
          <GlobeComponent />
        </div>
        {/* Content */}
        <div className=" flex flex-col justify-center items-center w-full px-4 sm:px-8 md:w-2/3 lg:w-1/2 xl:w-1/3 space-y-6 text-left ">
          {/* Main Header */}
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-300 opacity-80 text-shadow-md text">
            What would you do if you had a software expert available at your
            fingertips?
          </h3>
          {/* Subheading */}
          <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-300 opacity-80 text-shadow-md text">
            Want to start a new project? Or just say hey. You can also follow me
            on{" "}
            <a
              className="underline text-blue-400 hover:text-blue-300 "
              href="#"
            >
              LinkedIn{" "}
            </a>
            .
          </h3>
          <form action="" className="w-full">
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex justify-start items-center mt-2">
              <button
                type="submit"
                className=" px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute bottom-40 right-40 ">
        <img src={whiteCube} className="w-32" />
      </div>
    </section>
  );
};

export default Contact;
