import React, { useContext } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Card } from "./Card";
import { subscriptionPlans } from "@/data/Plans";
import StepHeader from "./StepHeader";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormContext } from "@/context/FormContextProvider";
import { FormField, FormItem, FormControl } from "./ui/form";

const Step2 = () => {
  const { form } = useContext(FormContext);

  return (
    <>
      <StepHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <FormField
        control={form.control}
        name="subscription"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="w-full md:w-auto"
              >
                <div className="flex justify-between items-center flex-col gap-2 md:gap-auto md:flex-row">
                  {subscriptionPlans.map((plan) => (
                    <div key={plan.title} className="relative w-full">
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem
                            value={plan.title}
                            id={plan.title}
                            className="absolute appearance-none"
                          />
                        </FormControl>
                        <Label htmlFor={plan.title}>
                          <Card
                            title={plan.title}
                            subscription={plan.monthlySubscription}
                            iconUrl={plan.iconUrl}
                          />
                        </Label>
                      </FormItem>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="isYearly"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-center gap-3 items-center bg-gray-100 rounded-lg p-3">
              <Label
                htmlFor="subscription"
                className={`${
                  field.value ? "text-cool-gray" : "text-marine-blue"
                } text-md font-semibold`}
              >
                Monthly
              </Label>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <Label
                htmlFor="subscription"
                className={` ${
                  field.value ? "text-marine-blue" : "text-cool-gray"
                } text-md font-semibold`}
              >
                Yearly
              </Label>
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default Step2;
