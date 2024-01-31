import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StepHeader from "./StepHeader";
import { FormContext } from "@/context/FormContextProvider";
import { useContext } from "react";

const Step1 = () => {
  const { register } = useContext(FormContext);

  return (
    <>
      <StepHeader
        title="Personal info"
        description="Please provide your name, email address and phone number."
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="name"
            className="text-marine-blue text-md font-medium"
          >
            Name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="e.g. Stephan King"
            {...register("username")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="email"
            className="text-marine-blue text-md font-medium"
          >
            Email Address
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="e.g. stephanking@lorem.com"
            {...register("emailAddress")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="phoneNumber"
            className="text-marine-blue text-md font-medium"
          >
            Phone number
          </Label>
          <Input
            type="number"
            id="phoneNumber"
            placeholder="e.g. +1 234 567 890"
            {...register("phoneNumber")}
          />
        </div>
      </div>
    </>
  );
};

export default Step1;
