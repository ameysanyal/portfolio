"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./Submitbtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:amzicom123@gmail.com">
          amzicom123@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

// min(100%, 38rem): This is a CSS function min() that takes two arguments and sets the width to the smallest of the two values.
// 100%: This represents 100% of the parent container's width.
// 38rem: A relative unit based on the root font size (where 1rem = 16px by default). So, 38rem equals 38 * 16 = 608px.
// Use Case:
// This utility ensures that the element never exceeds 38rem in width but will shrink to fit the parent container if the parent’s width is less than 38rem.
// Example:
// If the parent container's width is 500px, the element will take up the full 500px (because 100% is smaller than 38rem).
// If the parent container is 800px wide, the element will be limited to 608px (38rem), as that is smaller than 100%.
// This utility is often used to create responsive layouts where the element has a maximum width but should also be fluid and shrink with smaller containers.

//Purpose: The viewport property defines how the element behaves when it enters and exits the viewport (i.e., when it scrolls into or out of view).
// once: true: This specific configuration means that the animation will occur only once when the section first enters the viewport. After the element becomes visible and the animation plays, it will not repeat, even if the user scrolls away and back to the element.
// Without once: true: The animation would trigger every time the section enters the viewport (e.g., when you scroll away and come back).

// Purpose: The transition property controls how the animation progresses over time, allowing you to customize properties like duration, delay, easing, etc.
// duration: 1: This sets the duration of the animation to 1 second. So when the element enters the viewport and its opacity changes from 0 to 1, the transition will take 1 second to complete.

// scroll-mt-28 sets a scroll margin-top of 112px. When this element is scrolled into view via an anchor link (e.g., clicking a link that scrolls to #contact), it will leave a gap of 112px between the top of the element and the top of the viewport.
