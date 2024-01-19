import xCircle from "../../../assets/images/icons/x-circle.svg";
import checkCircle from "../../../assets/images/icons/check-circle.svg";

import { Container } from "./styles";

import { Message } from "../ToastContainer";
import { useEffect } from "react";

interface ToastMessageProps {
  message: Message;
  onRemoveToast: (id: number) => void;
}

export default function ToastMessage({
  message,
  onRemoveToast,
}: ToastMessageProps) {
  const { id, type, text, duration } = message;

  function handleRemoveToast() {
    onRemoveToast(id);
  }
  useEffect(() => {
    const timeOut = setTimeout(() => onRemoveToast(id), duration || 4000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [id, duration, onRemoveToast]);

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
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
