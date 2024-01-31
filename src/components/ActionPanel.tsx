import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { FormContext } from "@/context/FormContextProvider";

const ActionPanel = () => {
  const { currentFormStep, handleGoBack, handleNext } = useContext(FormContext);
  
  return (
    <>
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
    </>
  );
};

export default ActionPanel;
