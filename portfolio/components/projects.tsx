"use client";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";
import Project from "./project";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

// Scroll Margintop is  use to add  padding to the  section when we navigate to it using the nav bar
export default function Projects() {
  // Use In View tells us whather the section is in view or not
  const { ref, inView } = useInView();
  //   We use the active section context to set the active section in the nav bar
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>

      {/* Insert projects here */}
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
