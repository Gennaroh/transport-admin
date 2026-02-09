import { Button } from "../ui/button";

interface PrimaryButtonProps {
  onClick: () => void;

  children: React.ReactNode;
}

const PrimaryButton = ({ onClick, children }: PrimaryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-full cursor-pointer bg-accent hover:bg-accent/80 text-background font-semibold transition-all duration-300 hover:shadow-[0_0_20px_#39FF1466] "
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
