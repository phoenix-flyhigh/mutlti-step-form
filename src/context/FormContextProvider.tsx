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

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  username: z.string().min(1, "Username is required"),
  emailAddress: z.string().email("Email is required"),
  phoneNumber: z.string().min(10, "Invalid phone number"),
  subscription: z.string(),
  isYearly: z.boolean(),
  addOns: z.array(z.string()),
});

export type MultiStepFormData = z.infer<typeof FormSchema>;

export interface FormContextReturnProps extends useHandleStepsReturnType {
  form: UseFormReturn<MultiStepFormData, any, undefined>;
  register: UseFormRegister<MultiStepFormData>;
  handleSubmit: UseFormHandleSubmit<MultiStepFormData, undefined>;
  watch: UseFormWatch<MultiStepFormData>;
  getValues: UseFormGetValues<MultiStepFormData>;
  errors: FieldErrors<MultiStepFormData>;
  isSubmitSuccessful: boolean;
}

export const FormContext = createContext<FormContextReturnProps>(
  {} as FormContextReturnProps
);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const form = useForm<MultiStepFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      emailAddress: "",
      phoneNumber: "",
      subscription: "Arcade",
      isYearly: false,
      addOns: ["Online service", "Larger storage"],
    },
    mode: "onBlur",
  });
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isSubmitSuccessful },
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
    isSubmitSuccessful,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
