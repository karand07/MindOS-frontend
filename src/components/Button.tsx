import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

const variantClasses = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary: "bg-indigo-100 text-indigo-600 hover:bg-indigo-200",
};

const baseStyles =
  "px-4  py-2 flex items-center justify-center rounded-md font-semibold transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

function Button({
  variant,
  text,
  startIcon,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClasses[variant]} ${baseStyles} ${fullWidth? "w-full" : ""}`}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {text}
    </button>
  );
}

export default Button;