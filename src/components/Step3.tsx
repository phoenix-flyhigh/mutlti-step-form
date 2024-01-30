"use client";

import React from "react";
import { AddOns } from "@/data/AddOns";
import AddOnOption from "./AddOnOption";

const Step3 = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-3xl font-bold">Pick add-ons</h1>
        <p className="text-slate-400 text-md font-medium">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
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
    </div>
  );
};

export default Step3;
