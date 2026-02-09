/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  Resolver,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetError,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
  useForm,
} from 'react-hook-form';

interface FormContextInterface<T extends FieldValues> {
  register: UseFormRegister<T>;
  control: Control<T, unknown>;
  setValue: UseFormSetValue<T>;
  getValues: UseFormGetValues<T>;
  reset: UseFormReset<T>;
  watch: UseFormWatch<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  errors: FieldErrors<T>;
  setError: UseFormSetError<T>;
  clearErrors: UseFormClearErrors<T>;
  trigger: UseFormTrigger<T>;
}

const FormContext = createContext<FormContextInterface<FieldValues> | null>(null);

export const FormContextProvider = <T extends FieldValues>({ children, resolver }: { children: React.ReactNode; resolver?: Resolver<T> }) => {
  const {
    register,
    control,
    setValue,
    getValues,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    trigger,
  } = useForm<T>({
    resolver,
    mode: 'onTouched',
  });

  return (
    <FormContext.Provider
      value={
        {
          register,
          control,
          setValue,
          getValues,
          reset,
          watch,
          handleSubmit,
          errors,
          setError,
          clearErrors,
          trigger,
        } as FormContextInterface<FieldValues>
      }>
      {children}
    </FormContext.Provider>
  );
};

/**
 * Use method
 * @returns
 */
export const useFormContextProvider = <T extends FieldValues>() => {
  const context = useContext(FormContext) as FormContextInterface<T> | null;

  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }

  return context;
};
