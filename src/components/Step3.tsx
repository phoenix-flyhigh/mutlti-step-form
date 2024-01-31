"use client";

import React, { useContext } from "react";
import { AddOns } from "@/data/AddOns";
import AddOnOption from "./AddOnOption";
import StepHeader from "./StepHeader";
import { FormField, FormItem } from "./ui/form";
import { FormContext } from "@/context/FormContextProvider";

const Step3 = () => {
  const { form, getValues } = useContext(FormContext);
  const isYearPlan = getValues("isYearly");

  return (
    <>
      <StepHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="addOns"
          render={({ field }) => (
            <FormItem>
              {AddOns.map((addOn) => (
                <FormField
                  key={addOn.title}
                  control={form.control}
                  name="addOns"
                  render={({ field }) => (
                    <AddOnOption
                      title={addOn.title}
                      description={addOn.description}
                      cost={`$${
                        isYearPlan ? addOn.yearlyCost : addOn.monthlyCost
                      }/${isYearPlan ? "yr" : "mo"}`}
                      field={field}
                      selected={getValues("addOns").includes(addOn.title)}
                    />
                  )}
                />
              ))}
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default Step3;
