// This is the context for managing and sharing the active section state across components
// It tracks the currently active section and ensures that it can be updated or temporarily disabled (when the user clicks a link).
"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

//null is used as the default value, which allows for checking whether the context is properly used within its provider.

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  //This ensures the hook is used within a provider by checking if context is null.
  // If null, it throws an error, helping catch bugs where the hook is used without wrapping the component in the provider.

  return context;
}

// This returns the context object, allowing any consuming component to access the active section and the state-changing functions.

//React.Dispatch<React.SetStateAction<number>> is the type definition for the setState function returned by React's useState hook, specifically when the state is of type number.

//React.Dispatch<React.SetStateAction<number>> means that this type describes the setState function returned from useState when managing a number state.
// The setState function will accept either a number or a function that computes the next number based on the previous state.
