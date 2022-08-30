import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Software Developer",
          "Cat lover",
          "Soccer Player",
          "Soccer Referee",
          "Gamer",
          "Socialy Akward",
          "You still looking at this...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
