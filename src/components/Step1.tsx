import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Step1 = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-3xl font-bold">Personal info</h1>
        <p className="text-slate-400 text-md font-medium">
          Please provide your name, email address and phone number.
        </p>
      </div>
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
    </div>
  );
};

export default Step1;
