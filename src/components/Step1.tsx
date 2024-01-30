import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StepHeader from "./StepHeader";

const Step1 = () => {
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
          <Input type="text" id="name" placeholder="e.g. Stephan King" />
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
          />
        </div>
      </div>
    </>
  );
};

export default Step1;
