import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "lg" | "md";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "lg",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "btn";
  const variantClasses =
    variant === "primary" ? "btn-primary" : "btn-secondary";
  const sizeClasses = size === "lg" ? "btn-lg" : "btn-md";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
}
