import EventManager from "../lib/eventManager";

export const toastEventManager = new EventManager();

export default function toast({
  type = "default",
  text,
}: {
  type?: "default" | "danger" | "success";
  text: string;
}) {
  toastEventManager.emit("addtoast", {
    type,
    text,
  });
}
