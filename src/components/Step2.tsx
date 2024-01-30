import React from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Card } from "./Card";
import { subscriptionPlans } from "@/data/Plans";
import StepHeader from "./StepHeader";

const Step2 = () => {
  return (
    <>
      <StepHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <div className="flex justify-between items-center flex-col gap-2 md:gap-auto md:flex-row">
        {subscriptionPlans.map((plan) => (
          <Card
            key={plan.title}
            title={plan.title}
            subscription={plan.monthlySubscription}
            iconUrl={plan.iconUrl}
          />
        ))}
      </div>
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
