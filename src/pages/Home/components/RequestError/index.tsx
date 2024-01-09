import Button from "../../../../components/Button";
import { ErrorContainer } from "./styles";
import sadFace from "../../../../assets/images/icons/sadFace.svg";
interface RequestErrorProps {
  retryFunction: () => void;
}

export default function RequestError({ retryFunction }: RequestErrorProps) {
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
