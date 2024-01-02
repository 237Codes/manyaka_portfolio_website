"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  // Use In View tells us whather the section is in view or not
  const { ref, inView } = useInView();
  //   We use the active section context to set the active section in the nav bar
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    //   Leading refers to line height in Tailwind css
    // Scroll Margintop is  use to add  padding to the  section when we navigate to it using the nav bar
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ odelay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a college student working towards a{" "}
        <span className="font-medium">Bsc in Computer Science</span>, where I
        decided to pursue my passion for programming. I am a full time student
        at{" "}
        <span className="font-medium">
          Towson University, Towson Maryland, United States
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Perspective. I am currently
        looking for{" "}
        <span className="font-medium">
          any oppurtunities to challenge myself intellectually
        </span>{" "}
        as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy going to
        the gym, reading books, and spending time in nature. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        self teaching myself using{" "}
        <span className="font-medium">THE ODIN PROJECT</span>.
      </p>
    </motion.section>
  );
}
