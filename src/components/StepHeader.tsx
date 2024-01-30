import React from "react";

interface StepHeaderProps {
  title: string;
  description: string;
}

const StepHeader: React.FC<StepHeaderProps> = ({
  title,
  description,
}: StepHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-slate-400 text-md font-medium">{description}</p>
    </div>
  );
};

export default StepHeader;
