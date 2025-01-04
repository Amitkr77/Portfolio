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
        <div className=" flex flex-col justify-center items-center w-1/2 px-4 sm:px-8 md:w-2/3 lg:w-1/2 xl:w-1/3 space-y-6 text-left">
          {/* Main Header */}
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-300 opacity-80 text-shadow-md text">
            What would you do if you had a software expert available at your
            fingertips?
          </h3>
          {/* Subheading */}
          <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-300 opacity-80 text-shadow-md text">
            Want to start a new project? Or just say hey. You can also follow me
            on{" "}
            <a className="underline text-blue-400 hover:text-blue-300" href="#">
              Instagram
            </a>
            .
          </h3>
          {/* Email Link */}
          <h1 className="text-xl sm:text-2xl md:text-3xl  text-shadow-md ">
            <a
              href="mailto:Amitroyk99@gmail.com"
              className="hover:text-blue-500 email"
            >
              amitroyk99@gmail.com
            </a>
          </h1>
        </div>
      </div>

      <div className="absolute bottom-40 right-40 "><img src={whiteCube} className="w-32" /></div>
    </section>
  );
};

export default Contact;
