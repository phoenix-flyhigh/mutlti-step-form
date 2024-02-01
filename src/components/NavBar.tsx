"use client";

import { FormContext } from "@/context/FormContextProvider";
import React, { useContext } from "react";
import StepLink from "./StepLink";
import { StepLinks } from "@/data/StepLinks";

const NavBar = () => {
  const { currentFormStep } = useContext(FormContext);

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 md:flex-col md:w-full">
      {StepLinks.map((step) => (
        <StepLink
          key={step.stepNumber}
          stepNumber={step.stepNumber}
          title={step.title}
          isCurrentStep={currentFormStep === step.stepNumber || (step.stepNumber === 4 && currentFormStep === 5)}
        />
      ))}
    </div>
  );
};

export default NavBar;
