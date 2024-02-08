import { EmptyListContainer } from "./styles";

import emptyBox from "../../../../assets/images/icons/box.svg";

interface EmpetyListProps {
  visible: boolean;
}
export default function EmptyList({ visible }: EmpetyListProps) {
  if (!visible) {
    return null;
  }

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
