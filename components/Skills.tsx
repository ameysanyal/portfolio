"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

//the initial state positions the skill element off-screen (down by 100 pixels) and invisible (opacity 0).
//the animate state moves the skill element into its correct position (y: 0) and makes it visible (opacity: 1). The staggered effect is achieved using the delay based on the element's index.

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white flex gap-x-2 borderBlack rounded-xl px-3 py-2 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            //The custom prop passes the current index of the skill to the animation function, allowing the staggered delay effect to work based on the skill's position in the list.
            whileHover={{ scale: 1.15 }}
          >
            {skill.skillName}
            <Image
              src={skill.skillImage}
              alt={skill.skillName}
              width={20}
              height={20}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
