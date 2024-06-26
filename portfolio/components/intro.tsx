"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"; // Arrow icon
import { HiDownload } from "react-icons/hi"; // Download icon
import { BsLinkedin } from "react-icons/bs"; // LinkedIn icon
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

// Scroll Margintop (scroll-mt) is  use to add  padding to the  section when we navigate to it using the nav bar
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="Manyaka's Potrait"
              src="https://media.licdn.com/dms/image/D4E03AQExh97Qr3xReA/profile-displayphoto-shrink_400_400/0/1696957724742?e=1723680000&v=beta&t=D8qdXISPvEaBuZbJhIjXv8gni-2HBaxIgJ-hvHCkRqw"
              height="192"
              width="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full obejct-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          {/* Styling the emoji tohave a soft bouncy effect after image has loaded */}
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {/* I used Ctrl + cmd + space to open emoji shortcut */}
            👋
          </motion.span>
        </div>
      </div>

      {/* Add Intro text 
        - curly brackets with empty strings is just used to add spaces 
      */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Manyaka.</span> I'm on{" "}
        <span className="font-bold">a mission</span> to make a positive impact
        through code, <span className="italic">one character at a time!</span>
      </motion.h1>

      {/* Add button to contact me, download cv, linked  and github profiles */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center 
        gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2
          rounded-full outline-none focus:outline-none focus:scale-110 hover:scale-110
          hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>

        {/* Add a button to download resume 
          - to access the public folder, simply use one forward slash followed by the filename
          if the file is in the public folder.
        */}
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2
          rounded-full  outline-none focus:scale-110 hover:scale-110
           active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href="/Manyaka-Anjorin-Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        {/* Add linkedin link and logo */}
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2
          rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
           active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/anjorinmanyaka"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        {/* Add github logo and link */}
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2
          text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
           active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://www.github.com/237codes"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
