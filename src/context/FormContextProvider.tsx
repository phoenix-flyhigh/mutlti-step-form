import {
  useHandleSteps,
  useHandleStepsReturnType,
} from "@/hooks/useHandleSteps";
import { ReactNode, createContext } from "react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
  useForm,
} from "react-hook-form";

export interface MultiStepFormData {
  username: string;
}

export interface FormContextReturnProps extends useHandleStepsReturnType {
  register: UseFormRegister<MultiStepFormData>;
  handleSubmit: UseFormHandleSubmit<MultiStepFormData, undefined>;
  watch: UseFormWatch<MultiStepFormData>;
  errors: FieldErrors<MultiStepFormData>;
}

export const FormContext = createContext<FormContextReturnProps>(
  {} as FormContextReturnProps
);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MultiStepFormData>();

  const { currentFormStep, handleGoBack, handleNext } = useHandleSteps();

  const contextValue = {
    currentFormStep,
    handleGoBack,
    handleNext,
    register,
    handleSubmit,
    watch,
    errors,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
