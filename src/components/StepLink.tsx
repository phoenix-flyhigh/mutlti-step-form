import React from "react";

interface StepLinkProps {
  stepNumber: number;
  title: string;
  isCurrentStep: boolean;
}

const StepLink: React.FC<StepLinkProps> = ({
  stepNumber,
  title,
  isCurrentStep,
}: StepLinkProps) => (
  <div
    key={stepNumber}
    className="flex justify-start items-center gap-4 md:w-full md:pl-4"
  >
    <p
      className={`rounded-full border-2 border-white ${
        isCurrentStep ? "text-black bg-light-blue" : "text-white"
      }   px-3 py-1`}
    >
      {stepNumber}
    </p>
    <div className="hidden md:flex flex-col items-start">
      <p className="text-light-gray text-xs">STEP {stepNumber}</p>
      <p className="text-alabaster text-sm font-medium">{title}</p>
    </div>
  </div>
);

export default StepLink;
