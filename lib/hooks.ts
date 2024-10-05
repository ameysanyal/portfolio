// This code snippet defines a custom hook useSectionInView that leverages the react-intersection-observer and a context ActiveSectionContext to manage the visibility of sections in a React component. It activates a section when it comes into view,
// but only if a certain time has passed since the last section was manually clicked.

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

//ref is returned, which can be assigned to a DOM element, ensuring it is tracked for visibility.

// useInView Hook:
// This hook comes from the react-intersection-observer library, which detects if an element is within the viewport.
// threshold parameter defines what percentage of the element needs to be visible before considering it "in view" (default is 75%).

// useActiveSectionContext:

// A custom context is used to track and set the current active section.
// setActiveSection updates the active section.
// timeOfLastClick helps ensure the section isn't updated too soon after a manual click.

// useEffect:

// Whenever the inView state or timeOfLastClick changes, the effect checks if the section should be activated.
// The condition Date.now() - timeOfLastClick > 1000 ensures that automatic updates don't interfere with user interactions, with a buffer of 1 second after a manual click.

//This pattern is useful for dynamic UIs where you want to automatically highlight or track which section of a page is currently visible to the user.
