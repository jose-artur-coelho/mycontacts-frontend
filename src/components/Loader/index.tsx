import { Overlay } from "./styles";
import ReactPortal from "../ReactPortal";

export default function Loader() {
  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <div className="loader" />
      </Overlay>
    </ReactPortal>
  );
}
