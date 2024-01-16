import xCircle from "../../../assets/images/icons/x-circle.svg";
import checkCircle from "../../../assets/images/icons/check-circle.svg";

import { Container } from "./styles";
interface ToastMessageProps {
  text: string;
  type?: "default" | "danger" | "success";
}

export default function ToastMessage({
  text,
  type = "default",
}: ToastMessageProps) {
  return (
    <Container type={type}>
      {type !== "default" && (
        <img
          src={type === "danger" ? xCircle : checkCircle}
          alt={type === "danger" ? "X" : "Check"}
        />
      )}
      <strong>{text}</strong>
    </Container>
  );
}
