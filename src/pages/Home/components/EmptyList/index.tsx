import { EmptyListContainer } from "./styles";

import emptyBox from "../../../../assets/images/icons/box.svg";

export default function EmptyList() {
  return (
    <EmptyListContainer>
      <img src={emptyBox} alt="Empty box" />
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <strong>"Novo contato"</strong> acima para cadastrar o seu primeiro!
      </p>
    </EmptyListContainer>
  );
}
