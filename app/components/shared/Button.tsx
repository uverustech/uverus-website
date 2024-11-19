import { LoadingIndicator } from "@/app/assets/svg";
import { graphikMedium } from "@/app/fonts";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  variant?: "text" | "outlined" | "primary" | "white" | "dark";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  onClick?: () => void;
  onBlur?: () => void;
  loading?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  fullWidth = false,
  href,
  variant = "primary",
  type = "button",
  ariaLabel,
  onClick,
  onBlur,
  loading = false,
}) => {
  const variantStyles = {
    text: "border-none outline-transparent focus:outline-black border-transparent bg-transparent",
    primary:
      "border outline-transparent focus:outline-black border-primary hover:border-primary/80 hover:bg-primary/80 disabled:border-disabled bg-primary disabled:bg-disabled disabled:cursor-not-allowed text-white",
    white:
      "border outline-transparent focus:outline-black border-primary hover:border-primary/80 disabled:border-disabled bg-white disabled:bg-disabled disabled:cursor-not-allowed text-primary",
    dark:
      "border outline-transparent focus:outline-black border-dark hover:border-dark/80 disabled:border-disabled bg-dark disabled:bg-disabled disabled:cursor-not-allowed text-white",
    outlined:
      "border outline-transparent focus:outline-primary border-dark hover:border-dark/80 text-dark bg-transparent",
  };
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
      className={`${graphikMedium.className} ${className} ${fullWidth ? "w-full" : "w-fit"} ${
        variantStyles[variant]
      } px-[1.125rem] rounded-lg transition-all`}
    >
      {href ? (
        <Link href={href}>{loading ? <LoadingIndicator /> : children}</Link>
      ) : (
        <>{loading ? <LoadingIndicator /> : children}</>
      )}
    </button>
  );
};
