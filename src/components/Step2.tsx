import React from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Card } from "./Card";
import { subscriptionPlans } from "@/data/Plans";

const Step2 = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-3xl font-bold">Select your plan</h1>
        <p className="text-slate-400 text-md font-medium">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex justify-between items-center">
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
        <Label htmlFor="subscription" className={`text-marine-blue text-md font-semibold`}>
          Monthly
        </Label>
        <Switch id="subscription" />
        <Label htmlFor="subscription" className={` text-cool-gray text-md font-semibold`}>
          Yearly
        </Label>
      </div>
    </div>
  );
};

export default Step2;
