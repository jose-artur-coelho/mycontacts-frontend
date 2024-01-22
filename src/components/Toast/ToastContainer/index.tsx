import { useCallback, useEffect, useState } from "react";
import ToastMessage from "../ToastMessage";
import { Container } from "./styles";
import { toastEventManager } from "../../../utils/toast";
import reverseArray from "../../../utils/reverseArray";

export interface Message {
  id: number;
  type: "default" | "danger" | "success";
  text: string;
  duration: number;
}

export default function ToastContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const reversedMessages = reverseArray<Message>(messages);
  useEffect(() => {
    function handleAddToast({ type = "default", text, duration }: Message) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    }

    toastEventManager.on("addtoast", handleAddToast);

    return () => {
      toastEventManager.removeListener("addtoast", handleAddToast);
    };
  });

  const handleRemoveToast = useCallback((id: number) => {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id)
    );
  }, []);

  return (
    <Container>
      {reversedMessages.map((message) => (
        <ToastMessage
          key={message.id}
          onRemoveToast={handleRemoveToast}
          message={message}
        />
      ))}
    </Container>
  );
}
