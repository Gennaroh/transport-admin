import FormTextInput from "@/components/inputs/FormTextInput";
import { useTranslation } from "react-i18next";
import { LoginFormValues } from "./validation/loginValidationSchema";
import { useLogin } from "./hooks/useLogin";
import { useFormContextProvider } from "@/providers/formProvider/FormContextProvider";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import FormErrorMessage from "@/components/inputs/FormErrorMessage";

const LoginFormContent = () => {
  const { t } = useTranslation();
  const { handleSubmit } = useFormContextProvider<LoginFormValues>();
  const { formError, onSubmit } = useLogin();

  return (
    <div className="flex flex-1 flex-col p-6 bg-card rounded-lg border border-border">
      <h1 className="text-2xl font-bold mt-2 mb-10 text-center text-accent">
        {t("auth.login")}
      </h1>

      <div className="flex flex-col gap-4 mb-6">
        <FormTextInput
          name="email"
          label={t("common.label.email")}
          placeholder={t("common.placeholder.email")}
        />
        <FormTextInput
          name="password"
          label={t("common.label.password")}
          placeholder={t("common.placeholder.password")}
        />
        {formError && (
          <FormErrorMessage>{t("auth.validation_error")}</FormErrorMessage>
        )}
      </div>

      <PrimaryButton
        onClick={handleSubmit(onSubmit as (data: LoginFormValues) => void)}
      >
        {t("auth.login")}
      </PrimaryButton>
    </div>
  );
};

export default LoginFormContent;
