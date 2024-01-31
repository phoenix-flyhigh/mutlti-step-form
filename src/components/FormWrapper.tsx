"use client";

import React from "react";
import { FormContextProvider } from "@/context/FormContextProvider";
import MultiStepForm from "./MultiStepForm";

const FormWrapper = () => {
  return (
    <FormContextProvider>
      <div className="flex md:w-[80%] h-[90%] md:mt-0 mt-24 md:px-12 md:py-6">
        <MultiStepForm />
      </div>
    </FormContextProvider>
  );
};

export default FormWrapper;
