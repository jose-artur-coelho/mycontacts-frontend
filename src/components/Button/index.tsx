import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";
import Spinner from "../Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  danger?: boolean;
}
export default function Button({
  children,
  isLoading = false,
  danger = false,
  onClick,
  type,
  disabled,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      $danger={danger}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}
