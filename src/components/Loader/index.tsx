import { Overlay } from "./styles";
import { createPortal } from "react-dom";

export default function Loader() {
  const loaderRoot = document.getElementById("loader-root");

  if (!loaderRoot) return null;

  return createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    loaderRoot
  );
}
