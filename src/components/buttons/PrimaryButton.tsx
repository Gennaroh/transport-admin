import { Button } from "../ui/button";

interface PrimaryButtonProps {
  onClick: () => void;

  children: React.ReactNode;
}

const PrimaryButton = ({ onClick, children }: PrimaryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-full bg-accent hover:bg-accent/80 text-background font-semibold"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
