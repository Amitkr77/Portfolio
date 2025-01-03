import React from "react";
import "../JelloAnimation.css"; 

const JelloAnimation = ({ text, wordSpacing = "space-x-4" }) => {
    // Split the text into words and then split each word into letters
    const words = text.split(" ");
    
    return (
      <h1 className={`flex ${wordSpacing} `}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="flex gap-1">
            {word.split("").map((char, letterIndex) => (
              <span key={letterIndex} className="letter inline-block hover:text-orange-700 cursor-default">
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>
    );
  };
  

export default JelloAnimation;
