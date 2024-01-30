import React from "react";
import { Checkbox } from "./ui/checkbox";

interface AddOnOptionProps {
  title: string;
  description: string;
  cost: string;
  selected?: boolean;
}

const AddOnOption: React.FC<AddOnOptionProps> = ({
  title,
  description,
  cost,
  selected = false,
}: AddOnOptionProps) => {
  return (
    <div
      className={`flex justify-between items-center  border-2 rounded-lg px-5 py-3  ${
        selected ? "bg-slate-100 border-purplish-blue" : "border-light-gray"
      }`}
    >
      <div className="flex gap-4 items-center">
        <Checkbox checked />
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-marine-blue">{title}</p>
          <p className="text-md text-cool-gray">{description}</p>
        </div>
      </div>
      <p className="text-purplish-blue">+{cost}</p>
    </div>
  );
};

export default AddOnOption;
