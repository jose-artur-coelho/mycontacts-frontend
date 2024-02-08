import Button from "../../../../components/Button";
import { ErrorContainer } from "./styles";
import sadFace from "../../../../assets/images/icons/sadFace.svg";
interface RequestErrorProps {
  retryFunction: () => void;
  visible: boolean;
}

export default function RequestError({
  retryFunction,
  visible,
}: RequestErrorProps) {
  if (!visible) {
    return null;
  }

  return (
    <ErrorContainer>
      <img src={sadFace} alt="sad" />
      <div className="details">
        <strong>Ocorreu um erro ao obter os seus contatos!</strong>
        <Button type="button" onClick={retryFunction}>
          Tentar novamente
        </Button>
      </div>
    </ErrorContainer>
  );
}
