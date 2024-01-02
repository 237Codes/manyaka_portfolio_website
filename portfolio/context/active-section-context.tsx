"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

// links is an array of objects that brings  inthe various sectionname information
type SectionName = (typeof links)[number]["name"];

type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// hook used to consume the  active section provider context generated  by activesectioncontextprovider
// obj is an object that contains the activeSection and setActiveSection
// activeSection is the current active section
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider component"
    );
  }

  return context;
}
