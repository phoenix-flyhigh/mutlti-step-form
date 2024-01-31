import React from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Card } from "./Card";
import { subscriptionPlans } from "@/data/Plans";
import StepHeader from "./StepHeader";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const Step2 = () => {
  return (
    <>
      <StepHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <RadioGroup defaultValue="Arcade" className="w-full md:w-auto">
        <div className="flex justify-between items-center flex-col gap-2 md:gap-auto md:flex-row">
          {subscriptionPlans.map((plan) => (
            <div key={plan.title} className="relative w-full">
              <RadioGroupItem
                value={plan.title}
                id={plan.title}
                className="absolute appearance-none"
              />
              <Label htmlFor={plan.title}>
                <Card
                  title={plan.title}
                  subscription={plan.monthlySubscription}
                  iconUrl={plan.iconUrl}
                />
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
      <div className="flex justify-center gap-3 items-center bg-gray-100 rounded-lg p-3">
        <Label
          htmlFor="subscription"
          className={`text-marine-blue text-md font-semibold`}
        >
          Monthly
        </Label>
        <Switch id="subscription" />
        <Label
          htmlFor="subscription"
          className={` text-cool-gray text-md font-semibold`}
        >
          Yearly
        </Label>
      </div>
    </>
  );
};

export default Step2;
