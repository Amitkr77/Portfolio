import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";

// Import sections from the pages folder
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); 
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sections = ["home", "about", "skills", "projects", "contact"];

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();

      if (isScrolling) return;

      setIsScrolling(true);

      // Scroll down (to next page) or up (to previous page)
      setCurrentPage((prevPage) => {
        if (e.deltaY > 0 && prevPage < sections.length - 1) {
          return prevPage + 1;
        } else if (e.deltaY < 0 && prevPage > 0) {
          return prevPage - 1;
        }
        return prevPage;
      });
    },
    [isScrolling, sections.length]
  );

  // Scroll smoothly to the new section
  useEffect(() => {
    const scrollElement = document.getElementById(sections[currentPage]);
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: "smooth" });
    }

    // Allow scrolling again after a short delay
    const timer = setTimeout(() => {
      setIsScrolling(false);
    }, 800); // Adjust lock duration

    return () => clearTimeout(timer);
  }, [currentPage, sections]);

  // Handle click on indicator
  const handleIndicatorClick = (index) => {
    setCurrentPage(index);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]); // Dependency on handleWheel to avoid re-creating it unnecessarily

  // Handle Scroll Down button click
  const handleScrollButtonClick = () => {
    if (currentPage < sections.length - 1) {
      // If not on the last page, go to the next page
      setCurrentPage(currentPage + 1);
    } else {
      // If on the last page, scroll to the top
      setCurrentPage(0);
      const scrollElement = document.getElementById(sections[0]);
      if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Header />
      <div className="relative">
        {/* Vertical Scrollable Container */}
        <div className="h-screen">
          {sections.map((section, index) => (
            <div key={section} id={section}>
              {index === 0 && <Home handleClick={handleScrollButtonClick}/>}
              {index === 1 && <About />}
              {index === 2 && <Skills />}
              {index === 3 && <Projects />}
              {index === 4 && <Contact />}
            </div>
          ))}
        </div>

        <div className="fixed right-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-between z-50">
          {/* Single Bar for indicator movement */}
          <div
            className="absolute w-[2px] rounded-full bg-gray-400 transition-all duration-300 ease-in-out"
            style={{
              height: "30px",
              left: "50%",
              transform: `translateX(-50%,-50%)`,
              top: `${
                (hoveredIndex !== null ? hoveredIndex : currentPage) *
                (100 / (sections.length - 1))
              }%`,
              transition: "top 0.6s ease-out",
            }}
          ></div>

          {/* Page Number Indicators */}
          <div className="relative  flex flex-col items-center h-[250px]">
            {sections.map((section, index) => (
              <div
                key={section}
                className={`relative w-0 h-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out transform 
              ${
                currentPage === index
                  ? "bg-green-800 shadow-xl"
                  : "hover:bg-gray-300"
              }
            `}
                onClick={() => handleIndicatorClick(index)}
                onMouseEnter={() => setHoveredIndex(index)} // On hover, set the hovered index
                onMouseLeave={() => setHoveredIndex(null)} // On mouse leave, reset hovered index
                style={{
                  position: "absolute",
                  top: `${(index * 100) / (sections.length - 1)}%`, // Position each indicator based on the section index
                  transition: "top 0.3s ease-out", // Smooth transition for vertical movement
                }}
              >
                {/* Page number label */}
                <span className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 text-white font-semibold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down text */}
      <div
        className="text-white rotate-90 text-base font-semibold cursor-pointer hover:text-gray-400 transition-colors duration-200 fixed bottom-16 right-0 z-10"
        onClick={handleScrollButtonClick}
      >
        {currentPage === sections.length - 1
          ? "< Scroll to Top"
          : "Scroll down >"}
      </div>

      <div>
        <a
          className="fixed bottom-10 left-9 z-10"
          href="https://github.com/Amitkr77"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="40"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github-alt"
            className="svg-inline--fa fa-github-alt fa-w-15"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 512"
          >
            <path
              fill="aliceblue"
              d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}

export default App;
