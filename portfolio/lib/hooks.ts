import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//
// When a function is used in many different instances
// It  makes sense to  refactor the code  by using custom hooks
// This can help you get cleaner code
// This hook is used to set the active section in the nav bar
// Use In View tells us whether the section is in view or not
// We use the active section context to set the active section
// in the nav bar
//
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

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
