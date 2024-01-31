import {
  useHandleSteps,
  useHandleStepsReturnType,
} from "@/hooks/useHandleSteps";
import { ReactNode, createContext } from "react";
import {
  FieldErrors,
  UseFormGetValues,
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
  getValues: UseFormGetValues<MultiStepFormData>;
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
      subscription: "Arcade",
      isYearly: false,
      addOns: ["Online service", "Larger storage"],
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    getValues,
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
    getValues,
    errors,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
