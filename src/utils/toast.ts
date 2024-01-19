import EventManager from "../lib/eventManager";

export const toastEventManager = new EventManager();

export default function toast({
  type = "default",
  text,
  duration = 4000,
}: {
  type?: "default" | "danger" | "success";
  text: string;
  duration?: number;
}) {
  toastEventManager.emit("addtoast", {
    type,
    text,
    duration,
  });
}
