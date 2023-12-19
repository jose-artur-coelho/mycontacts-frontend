import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ReactPortalProps {
  children: ReactNode;
  containerId?: "portal-root" | string;
}

export default function ReactPortal({
  children,
  containerId = "portal-root",
}: ReactPortalProps) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", containerId);
    document.body.appendChild(container);
  }

  return createPortal(children, container);
}
