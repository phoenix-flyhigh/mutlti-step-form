import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StepHeader from "./StepHeader";
import { FormContext } from "@/context/FormContextProvider";
import { useContext } from "react";

const Step1 = () => {
  const { register, errors } = useContext(FormContext);

  return (
    <>
      <StepHeader
        title="Personal info"
        description="Please provide your name, email address and phone number."
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Label
              htmlFor="name"
              className="text-marine-blue text-md font-medium"
            >
              Name
            </Label>
            {errors.username && (
              <p className="text-sm text-strawberry-red font-semibold">
                {errors.username.message}
              </p>
            )}
          </div>
          <Input
            type="text"
            id="name"
            placeholder="e.g. Stephan King"
            {...register("username")}
            className={` hover:border-purplish-blue ${
              errors.username ? "border-strawberry-red" : ""
            }`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Label
              htmlFor="email"
              className="text-marine-blue text-md font-medium"
            >
              Email Address
            </Label>
            {errors.emailAddress && (
              <p className="text-sm text-strawberry-red font-semibold">
                {errors.emailAddress.message}
              </p>
            )}
          </div>
          <Input
            type="email"
            id="email"
            placeholder="e.g. stephanking@lorem.com"
            {...register("emailAddress")}
            className={`focus:border-purplish-blue hover:border-purplish-blue ${
              errors.emailAddress ? "border-strawberry-red" : ""
            }`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Label
              htmlFor="phoneNumber"
              className="text-marine-blue text-md font-medium"
            >
              Phone number
            </Label>
            {errors.phoneNumber && (
              <p className="text-sm text-strawberry-red font-semibold">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <Input
            type="string"
            id="phoneNumber"
            placeholder="e.g. +1 234 567 890"
            {...register("phoneNumber")}
            className={`focus:border-purplish-blue hover:border-purplish-blue ${
              errors.phoneNumber ? "border-strawberry-red" : ""
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Step1;
