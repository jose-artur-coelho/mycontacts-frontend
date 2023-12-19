import { createPortal } from "react-dom";
import Button from "../Button";
import { Container, Footer, Overlay } from "./styles";

interface ModalProps {
  danger?: boolean;
}

const defaultProps: ModalProps = {
  danger: false,
};

export default function Modal({ danger = defaultProps.danger }: ModalProps) {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  return createPortal(
    <Overlay>
      <Container $danger={danger}>
        <h1>title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          asperiores est neque, totam accusamus nisi assumenda sapiente hic
          reprehenderit minus consequuntur expedita laudantium temporibus
          architecto vitae molestias repellat consequatur a.
        </p>
        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" $danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    modalRoot
  );
}
