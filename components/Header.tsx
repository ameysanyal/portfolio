"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
// Imports the Link component from Next.js, which is used to create client-side navigation.
import clsx from "clsx";
//Imports the clsx utility function(clsx is a npm package), which helps conditionally combine CSS class names.
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-700 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-black transition dark:text-gray-300 dark:hover:text-white", //Sets base styles for the link.
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                //Applies active styles if the link's name matches the active section.
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-600"
                    layoutId="activeSection"
                    //Connects this span with the layout animation, allowing it to animate between different items smoothly.
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    //Conditionally renders a span to highlight the active link.
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
