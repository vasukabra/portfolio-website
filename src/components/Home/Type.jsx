import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Frontend Developer",
              "Passionate Software Engineer",
              "Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type