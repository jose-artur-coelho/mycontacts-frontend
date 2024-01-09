import magnifier from "../../../../assets/images/icons/magnifier.svg";

interface ContactNotFoundProps {
  searchTerm: string;
}
export default function ContactNotFound({ searchTerm }: ContactNotFoundProps) {
  return (
    <div>
      <img src={magnifier} alt="Magnifier with question mark" />
      <span>
        Nenhum resultado foi encontrado para <strong>"{searchTerm}".</strong>
      </span>
    </div>
  );
}
