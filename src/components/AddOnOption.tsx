import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

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
        <Checkbox id={title}/>
        <Label htmlFor={title}>
          <div className="flex flex-col">
            <p className="text-md md:text-lg font-semibold text-marine-blue">
              {title}
            </p>
            <p className="text-sm md:text-md text-cool-gray">{description}</p>L
          </div>
        </Label>
      </div>
      <p className="text-purplish-blue">+{cost}</p>
    </div>
  );
};

export default AddOnOption;
