import { FormContextProvider } from '@/providers/formProvider/FormContextProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './validation/loginValidationSchema';
import LoginFormContent from './LoginFormContent';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <FormContextProvider resolver={zodResolver(loginSchema)}>
          <LoginFormContent />
        </FormContextProvider>
      </div>
    </div>
  );
};

export default LoginPage;
