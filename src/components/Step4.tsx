import React from "react";
import { Button } from "./ui/button";
import StepHeader from "./StepHeader";

const Step4 = () => {
  const selectedPlan = {
    title: "Arcade",
    type: "Monthly",
    cost: "$9/mo",
  };
  const selectedAddOns = [
    {
      title: "Online service",
      cost: "$1/mo",
    },
    {
      title: "Larger storage",
      cost: "$2/mo",
    },
  ];
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
        <p className="text-lg font-bold text-purplish-blue">+$12/mo</p>
      </div>
    </>
  );
};

export default Step4;
