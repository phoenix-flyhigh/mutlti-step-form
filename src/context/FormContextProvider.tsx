import {
  useHandleSteps,
  useHandleStepsReturnType,
} from "@/hooks/useHandleSteps";
import { ReactNode, createContext } from "react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReturn,
  UseFormWatch,
  useForm,
} from "react-hook-form";

export interface MultiStepFormData {
  username: string;
  emailAddress: string;
  phoneNumber: string;
  subscription: string;
  isYearly: boolean;
  addOns: string[];
}

export interface FormContextReturnProps extends useHandleStepsReturnType {
  form: UseFormReturn<MultiStepFormData, any, undefined>;
  register: UseFormRegister<MultiStepFormData>;
  handleSubmit: UseFormHandleSubmit<MultiStepFormData, undefined>;
  watch: UseFormWatch<MultiStepFormData>;
  errors: FieldErrors<MultiStepFormData>;
}

export const FormContext = createContext<FormContextReturnProps>(
  {} as FormContextReturnProps
);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const form = useForm<MultiStepFormData>({
    defaultValues: {
      username: "",
      emailAddress: "",
      phoneNumber: "",
      subscription: "",
      isYearly: false,
      addOns: [],
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;
  const { currentFormStep, handleGoBack, handleNext } = useHandleSteps();

  const contextValue: FormContextReturnProps = {
    currentFormStep,
    handleGoBack,
    handleNext,
    form,
    register,
    handleSubmit,
    watch,
    errors,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
