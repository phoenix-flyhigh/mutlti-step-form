"use client";

import React from "react";
import Step1 from "@/components/Step1";
import { Button } from "@/components/ui/button";
import { useHandleSteps } from "@/hooks/useHandleSteps";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const FormWrapper = () => {
  const { currentFormStep, handleGoBack, handleNext } = useHandleSteps();
  return (
    <div className="flex md:w-[80%] h-[90%] md:mt-0 mt-24 md:px-12 md:py-6">
      <form className="z-10 flex flex-col justify-between">
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
        {currentFormStep > 1 && (
          <div className="md:p-0 text-lg font-semibold flex justify-between items-center w-full bg-white p-2">
            {currentFormStep !== 1 && (
              <Button
                variant="link"
                className=" text-cool-gray hover:text-marine-blue"
                type="button"
                onClick={handleGoBack}
              >
                Go Back
              </Button>
            )}
            {currentFormStep < 4 && (
              <Button
                className="bg-marine-blue text-white"
                type="button"
                onClick={handleNext}
              >
                Next Step
              </Button>
            )}
            {currentFormStep === 4 && (
              <Button className="bg-marine-blue text-white" type="submit">
                Confirm
              </Button>
            )}
          </div>
        )}
        {currentFormStep === 1 && (
          <div className="md:p-0 text-lg font-semibold flex justify-end items-center w-full bg-white p-2">
            <Button
              className="bg-marine-blue text-white"
              type="button"
              onClick={handleNext}
            >
              Next Step
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormWrapper;
