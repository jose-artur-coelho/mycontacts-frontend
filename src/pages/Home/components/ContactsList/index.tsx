import { Link } from "react-router-dom";
import contact from "../../../../types/contact";
import { Card } from "./styles";
import trash from "../../../../assets/images/icons/trash.svg";
import edit from "../../../../assets/images/icons/edit.svg";
import ListHeader from "../ListHeader";

interface ContactsListProps {
  contacts: contact[];
  orderBy: string;
  handleToggleOrderBy: () => void;
}

export default function ContactsList({
  contacts,
  orderBy,
  handleToggleOrderBy,
}: ContactsListProps) {
  return (
    <>
      <ListHeader orderBy={orderBy} handleToggleOrderBy={handleToggleOrderBy} />

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="buttons">
            <Link to={`edit/${contact.id}`}>
              <img src={edit} alt="" />
            </Link>
            <button>
              <img src={trash} alt="" />
            </button>
          </div>
        </Card>
      ))}
    </>
  );
}
