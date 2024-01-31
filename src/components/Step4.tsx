import React, { useContext } from "react";
import { Button } from "./ui/button";
import StepHeader from "./StepHeader";
import { FormContext } from "@/context/FormContextProvider";
import { subscriptionPlans } from "@/data/Plans";
import { AddOns } from "@/data/AddOns";

const Step4 = () => {
  const { getValues } = useContext(FormContext);
  const isYearPlan = getValues("isYearly");

  const selectedSubscriptionTitle = getValues("subscription");
  const selectedSubscription = subscriptionPlans.find(
    (plan) => plan.title === selectedSubscriptionTitle
  );

  const selectedPlan = {
    title: selectedSubscription?.title,
    type: isYearPlan ? "Yearly" : "Monthly",
    cost: `$${
      isYearPlan
        ? selectedSubscription?.yearlySubscription
        : selectedSubscription?.monthlySubscription
    }/${isYearPlan ? "yr" : "mo"}`,
  };

  const includedAddOnTitles = getValues("addOns");
  const includedAddOns = AddOns.filter((addOn) =>
    includedAddOnTitles.includes(addOn.title)
  );

  const selectedAddOns = includedAddOns.map((addOn) => ({
    title: addOn.title,
    cost: `$${isYearPlan ? addOn.yearlyCost : addOn.monthlyCost}/${
      isYearPlan ? "yr" : "mo"
    }`,
  }));

  const totalMonthlyCost =
    (selectedSubscription?.monthlySubscription ?? 0) +
    includedAddOns.reduce((sum, addOn) => (sum += addOn.monthlyCost), 0);

  const totalYearlyCost =
    (selectedSubscription?.yearlySubscription ?? 0) +
    includedAddOns.reduce((sum, addOn) => (sum += addOn.yearlyCost), 0);

  const totalCost = isYearPlan ? totalYearlyCost : totalMonthlyCost;
  const totalCostText = `$${totalCost}/${isYearPlan ? "yr" : "mo"}`;

  return (
    <>
      <StepHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div className="flex flex-col bg-slate-100 rounded-lg gap-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start gap-0">
            <p className="text-lg font-bold">{`${selectedPlan.title} (${selectedPlan.type})`}</p>
            <Button
              variant="link"
              className=" text-cool-gray hover:text-marine-blue w-fit h-auto p-0"
            >
              Change
            </Button>
          </div>
          <p className="text-lg font-bold">+{selectedPlan.cost}</p>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          {selectedAddOns.map((addOn) => (
            <div
              key={addOn.title}
              className="flex justify-between items-center"
            >
              <p className="text-md text-cool-gray">{addOn.title}</p>
              <p className="text-md font-semibold text-marine-blue">
                +{addOn.cost}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  justify-between items-center px-4">
        <p className="text-md text-cool-gray">
          {`Total(${selectedPlan.type})`}
        </p>
        <p className="text-lg font-bold text-purplish-blue">{totalCostText}</p>
      </div>
    </>
  );
};

export default Step4;
