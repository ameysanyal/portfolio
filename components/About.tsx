"use client";
//This tells Next.js that the component is client-side and needs to be rendered in the browser.
// It's required for components that rely on browser-specific features like state, effects, or event listeners.
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion"; //Imports motion from the framer-motion library, which is used for adding animations.
import { useSectionInView } from "@/lib/hooks"; //Imports a custom hook, useSectionInView, that is used to detect when a section is in view for scroll-based animations.

export default function About() {
  const { ref } = useSectionInView("About");
  //This line destructures a ref from the useSectionInView hook,
  // which will be attached to the section to track when the "About" section comes into view.

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated in Electronics and Telecommunication Engineering from Sant
        Gadge Baba Amravati University in 2024. I am a quick learner and
        motivated aspiring software developer looking to advance my career in
        the field of information technology. Currently open to any kind of role
        (internship, part-time, full-time, freelance). Please go through my
        projects. I have added deployed link, video demonstration and github
        respository Link
      </p>
    </motion.section>
  );
}

//The motion.section is a special component from framer-motion that allows animations.
// This wraps the entire section, enabling animations when the component is mounted.
// ref={ref}: The ref from the useSectionInView hook is attached here to track this section’s visibility on the page.

// Animation Props:
// initial={{ opacity: 0, y: 100 }}: The section starts with zero opacity and is shifted down by 100 pixels (off-screen).
// animate={{ opacity: 1, y: 0 }}: When animated, the opacity transitions to 1, and the section moves back to its normal position (y: 0).
// transition={{ delay: 0.175 }}: The animation has a delay of 0.175 seconds before starting.
