import { ReactNode } from "react";
import Button from "../Button";
import ReactPortal from "../ReactPortal";
import { Container, Footer, Overlay } from "./styles";
import useAnimatedUnmount from "../../hooks/useAnimatedUnmount";

interface ModalProps {
  title: string;
  children: ReactNode;
  danger?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
  isVisible: boolean;
  isLoading?: boolean;
}

export default function Modal({
  title,
  children,
  danger = false,
  cancelLabel = "Cancelar",
  confirmLabel = "Confirmar",
  onCancel,
  onConfirm,
  isVisible,
  isLoading = false,
}: ModalProps) {
  const { shouldRender, componentRef } =
    useAnimatedUnmount<HTMLDivElement>(isVisible);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay $isLeaving={!isVisible} ref={componentRef}>
        <Container $danger={danger} $isLeaving={!isVisible}>
          <h1>{title}</h1>

          <div className="modal-body">{children}</div>

          <Footer>
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>
            <Button
              type="button"
              danger={danger}
              onClick={onConfirm}
              isLoading={isLoading}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
