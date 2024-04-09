import { Overlay } from "./styles";
import ReactPortal from "../ReactPortal";
import Spinner from "../Spinner";
import useAnimatedUnmount from "../../hooks/useAnimatedUnmount";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  const { shouldRender, componentRef } =
    useAnimatedUnmount<HTMLDivElement>(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay ref={componentRef} $isLeaving={!isLoading}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}
