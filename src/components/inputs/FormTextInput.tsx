import { Input } from '@/components/ui/input';
import { useFormContextProvider } from '@/providers/formProvider/FormContextProvider';
import { Controller } from 'react-hook-form';

interface FormTextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  showError?: boolean;
}

const FormTextInput = ({ name, label, placeholder, type = 'text', showError = true }: FormTextInputProps) => {
  const { control, errors } = useFormContextProvider();
  const error = errors[name];

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-accent">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            className={`bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent ${error ? 'border-destructive' : ''}`}
          />
        )}
      />
      {showError && error && (
        <span className="text-xs text-destructive">{error.message as string}</span>
      )}
    </div>
  );
};

export default FormTextInput;
