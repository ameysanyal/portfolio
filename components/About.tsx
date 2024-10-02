"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
