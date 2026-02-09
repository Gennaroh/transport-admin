interface FormErrorMessageProps {
  children: React.ReactNode;
}

const FormErrorMessage = ({ children }: FormErrorMessageProps) => {
  return <span className="mt-1.5 text-destructive text-xs">{children}</span>;
};

export default FormErrorMessage;
