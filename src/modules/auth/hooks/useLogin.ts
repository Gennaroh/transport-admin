import { useState } from 'react';
import { LoginFormValues } from '../validation/loginValidationSchema';

export const useLogin = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setFormError(null);
      // TODO: Implement actual login logic here
      console.log('Login attempt:', data);
    } catch {
      setFormError('Hibás e-mail vagy jelszó');
    }
  };

  return { formError, onSubmit };
};
