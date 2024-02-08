import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

interface HeaderProps {
  numOfContacts: number;
  showNumContacts: boolean;
  visible: boolean;
}

export default function Header({
  visible,
  numOfContacts,
  showNumContacts,
}: HeaderProps) {
  if (!visible) {
    return null;
  }

  return (
    <HeaderContainer $showNumOfContacts={showNumContacts}>
      {showNumContacts && (
        <strong>
          {numOfContacts} {numOfContacts === 1 ? "contato" : "Contatos"}
        </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </HeaderContainer>
  );
}
