import React from "react";
import {
  Figma,
  Git,
  Html,
  JavaScript,
  MongoDb,
  MySql,
  NodeJs,
  Postman,
  ReactJs,
  TailwindCss,
  VsCode,
} from "../assets/Icons";

import JelloAnimation from "../components/JelloAnimation";

export default function Skills() {
  return (
    <section className="relative h-screen px-4 md:px-20 lg:px-56 bg-black flex flex-col justify-center text-center items-center text-white">
      <div className="absolute -bottom-72 -right-48 hidden md:block">
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
            {/* SVG paths remain unchanged */}
          </g>
        </svg>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-lg mb-2 uppercase font-light">
          A problem is a chance for you to do your best.
        </h2>
        <div className="text-4xl md:text-6xl mb-6 font-bold">
          <JelloAnimation text="Skills&Experience" />
        </div>
        <p className="text-base md:text-lg">
          The main area of expertise is front end development (client side of
          the web).
        </p>
        <p className="my-4 text-base md:text-lg">
          HTML, CSS, JS, building small and medium web applications with Vue or
          React, custom plugins, features, animations, and coding interactive
          layouts. I also have full-stack developer experience with one of the
          most popular open source CMS on the web - WordPress.
        </p>
        <p className="text-base md:text-lg mb-14">
          Visit my{" "}
          <a
            href="https://www.linkedin.com/in/amit-kumar-024136284/"
            className="text-yellow-600"
          >
            Linkedin
          </a>{" "}
          for more details.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-wrap justify-center gap-4">
          <NodeJs />
          <ReactJs />
          <JavaScript />
          <Html />
          <MongoDb />
          <Postman />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <VsCode />
          <TailwindCss />
          <Git />
          <Figma />
          <MySql />
        </div>
      </div>
    </section>
  );
}
