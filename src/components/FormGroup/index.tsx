import { ReactNode } from "react";

import { Container } from "./styles";
import Spinner from "../Spinner";

interface FormGroupProps {
  children: ReactNode;
  error?: string;
  isLoading?: boolean;
}

export default function FormGroup({
  children,
  error,
  isLoading = false,
}: FormGroupProps) {
  return (
    <Container>
      <div className="form-item">
        {children}

        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>

      {error && <small>{error}</small>}
    </Container>
  );
}
