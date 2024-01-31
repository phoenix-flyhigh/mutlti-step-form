import React, { useContext, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ActionPanel from "./ActionPanel";
import { FormContext, MultiStepFormData } from "@/context/FormContextProvider";
import { SubmitHandler } from "react-hook-form";
import { Form } from "./ui/form";
import Step5 from "./Step5";

const MultiStepForm = () => {
  const {
    form,
    handleSubmit,
    currentFormStep,
    isSubmitSuccessful,
    handleNext,
  } = useContext(FormContext);
  const onSubmit: SubmitHandler<MultiStepFormData> = (data) =>
    console.log(data);

  useEffect(() => {
    if (isSubmitSuccessful) handleNext();
  }, [isSubmitSuccessful, handleNext]);

  return (
    <Form {...form}>
      <form
        className="z-10 flex flex-col justify-between md:w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <>
          <div
            className={`${
              currentFormStep === 1 ? "flex" : "hidden"
            } flex-col gap-8 md:w-full md:h-full bg-white z-10 p-4 md:p-0 rounded-xl md:rounded-none m-4 md:m-0`}
          >
            <Step1 />
          </div>
          <div
            className={`${
              currentFormStep === 2 ? "flex" : "hidden"
            } flex-col gap-8 md:w-full md:h-full bg-white z-10 p-4 md:p-0 rounded-xl md:rounded-none m-4 md:m-0`}
          >
            <Step2 />
          </div>
          <div
            className={`${
              currentFormStep === 3 ? "flex" : "hidden"
            } flex-col gap-8 md:w-full md:h-full bg-white z-10 p-4 md:p-0 rounded-xl md:rounded-none m-4 md:m-0`}
          >
            <Step3 />
          </div>
          <div
            className={`${
              currentFormStep === 4 ? "flex" : "hidden"
            } flex-col gap-8 md:w-full md:h-full bg-white z-10 p-4 md:p-0 rounded-xl md:rounded-none m-4 md:m-0`}
          >
            <Step4 />
          </div>
        </>
        <ActionPanel />
        <div
          className={`${
            currentFormStep === 5 ? "flex" : "hidden"
          } flex-col gap-8 md:w-full md:h-full bg-white z-10 p-4 md:p-0 rounded-xl md:rounded-none m-4 md:m-0`}
        >
          <Step5 />
        </div>
      </form>
    </Form>
  );
};

export default MultiStepForm;
