"use client";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

// Scroll Margintop is  use to add  padding to the  section when we navigate to it using the nav bar
export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

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
