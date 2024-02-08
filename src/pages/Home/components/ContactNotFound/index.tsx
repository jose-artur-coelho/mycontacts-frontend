import magnifier from "../../../../assets/images/icons/magnifier.svg";
import { ContactNotFoundContainer } from "./styles";

interface ContactNotFoundProps {
  searchTerm: string;
  visible: boolean;
}
export default function ContactNotFound({
  searchTerm,
  visible,
}: ContactNotFoundProps) {
  if (!visible) {
    return null;
  }

  return (
    <ContactNotFoundContainer>
      <img src={magnifier} alt="Magnifier with question mark" />
      <span>
        Nenhum resultado foi encontrado para <strong>"{searchTerm}".</strong>
      </span>
    </ContactNotFoundContainer>
  );
}
