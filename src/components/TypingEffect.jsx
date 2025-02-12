"use client"; // Only this component is a client component

import { Typewriter } from "react-simple-typewriter";

export default function TypingEffect() {
  return (
    <span className="text-white">
      <Typewriter
        words={["a Full-stack Developer.", "a Software Engineer"]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </span>
  );
}
