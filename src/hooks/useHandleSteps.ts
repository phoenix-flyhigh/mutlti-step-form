"use client";

import { useState } from "react";

export interface useHandleStepsReturnType {
  currentFormStep: number;
  handleGoBack: () => void;
  handleNext: () => void;
}

export const useHandleSteps: () => useHandleStepsReturnType = () => {
  const TOTAL_NUMBER_STEPS = 4;
  const [currentFormStep, setCurrentFormStep] = useState<number>(1);

  const handleGoBack = () => {
    if (currentFormStep > 1) setCurrentFormStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentFormStep < TOTAL_NUMBER_STEPS)
      setCurrentFormStep((prev) => prev + 1);
  };

  return {
    currentFormStep,
    handleGoBack,
    handleNext,
  };
};
