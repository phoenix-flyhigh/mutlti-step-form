"use client";

import React from "react";
import { AddOns } from "@/data/AddOns";
import AddOnOption from "./AddOnOption";
import StepHeader from "./StepHeader";

const Step3 = () => {
  return (
    <>
      <StepHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-4">
        {AddOns.map((addOn) => (
          <AddOnOption
            key={addOn.title}
            title={addOn.title}
            description={addOn.description}
            cost={addOn.monthlyCost}
            selected
          />
        ))}
      </div>
    </>
  );
};

export default Step3;
