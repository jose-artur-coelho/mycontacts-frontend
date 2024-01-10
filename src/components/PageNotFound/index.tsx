import { Link } from "react-router-dom";
import sadFace from "../../assets/images/icons/sadFace.svg";
import { ErrorContainer } from "./styles";

export default function PageNotFound() {
  return (
    <ErrorContainer>
      <img src={sadFace} alt="sad face emoji" />
      <div className="details">
        <strong>Página não encontrada.</strong>
        <Link to="/">Ir para página inicial</Link>
      </div>
    </ErrorContainer>
  );
}
