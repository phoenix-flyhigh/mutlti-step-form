"use client";

import React from "react";
import NavBar from "./NavBar";
import { FormContextProvider } from "@/context/FormContextProvider";
import FormWrapper from "./FormWrapper";

const StepsLayout = () => {
  return (
    <FormContextProvider>
      <div
        className="bg-no-repeat bg-left w-[274px] h-full rounded-lg hidden md:block items-start justify-center pt-12 px-4"
        style={{ backgroundImage: "url('./images/bg-sidebar-desktop.svg')" }}
      >
        <NavBar />
      </div>
      <div
        className="absolute md:hidden bg-no-repeat bg-top w-full h-[172px] top-0 flex items-start justify-center pt-12"
        style={{ backgroundImage: "url('./images/bg-sidebar-mobile.svg')" }}
      >
        <NavBar />
      </div>
      <FormWrapper />
    </FormContextProvider>
  );
};

export default StepsLayout;
