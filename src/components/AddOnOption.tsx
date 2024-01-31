import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { ControllerRenderProps } from "react-hook-form";
import { FormControl, FormItem } from "./ui/form";
import { MultiStepFormData } from "@/context/FormContextProvider";

interface AddOnOptionProps {
  title: string;
  description: string;
  cost: string;
  field: ControllerRenderProps<MultiStepFormData, "addOns">;
  selected?: boolean;
}

const AddOnOption: React.FC<AddOnOptionProps> = ({
  title,
  description,
  cost,
  field,
  selected = false,
}: AddOnOptionProps) => {
  return (
    <FormItem key={title}>
      <div
        className={`flex justify-between items-center  border-2 rounded-lg px-5 py-3  ${
          selected ? "bg-slate-100 border-purplish-blue" : "border-light-gray"
        }`}
      >
        <div className="flex gap-4 items-center">
          <FormControl>
            <Checkbox
              id={title}
              checked={field.value?.includes(title)}
              onCheckedChange={(checked) => {
                return checked
                  ? field.onChange([...field.value, title])
                  : field.onChange(
                      field.value?.filter((value) => value !== title)
                    );
              }}
            />
          </FormControl>
          <Label htmlFor={title}>
            <div className="flex flex-col">
              <p className="text-md md:text-lg font-semibold text-marine-blue">
                {title}
              </p>
              <p className="text-sm md:text-md text-cool-gray">{description}</p>
            </div>
          </Label>
        </div>
        <p className="text-purplish-blue">+{cost}</p>
      </div>
    </FormItem>
  );
};

export default AddOnOption;
