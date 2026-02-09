import { FormContextProvider } from "@/providers/formProvider/FormContextProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./validation/loginValidationSchema";
import LoginFormContent from "./LoginFormContent";
import GlowAnimationOrbs from "@/components/glowAnimationOrbs";

const LoginPage = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-background overflow-hidden">
      {/* Animated gradient orbs */}
      <GlowAnimationOrbs />

      <div className="relative z-10 w-full max-w-md">
        <FormContextProvider resolver={zodResolver(loginSchema)}>
          <LoginFormContent />
        </FormContextProvider>
      </div>
    </div>
  );
};

export default LoginPage;
