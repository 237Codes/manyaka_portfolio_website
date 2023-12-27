import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";

export default function Projects() {
  return (
    <section>
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
