"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionProviderProps = {
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

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //
  // we need to keep track of this to disable the observer temperarily
  // when user clicks on a link
  //
  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////

  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

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

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//
// hook used to consume the  active section provider context
// generated  by activesectioncontextprovider
// obj is an object that contains the activeSection
// and setActiveSection
// activeSection is the current active section
//
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider component"
    );
  }

  return context;
}
