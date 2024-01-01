import React, { useState } from "react";
import { links } from "@/lib/data";

// links is an array of objects that brings  inthe various sectionname information
type SectionName = (typeof links)[number]["name"];

export default function ActiveSectionContextProvider() {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return <div>ActiveSectionContextProvider</div>;
}
