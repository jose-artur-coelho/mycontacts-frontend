import {
  Header,
  Container,
  Card,
  InputSearchContainer,
  ListHeader,
} from "./styles";
import arrow from "../../assets/images/icons/arrow.svg";
import trash from "../../assets/images/icons/trash.svg";
import edit from "../../assets/images/icons/edit.svg";
import { Link } from "react-router-dom";
import useHomeContacts from "../../hooks/useHomeContacts";
import Loader from "../../components/Loader";

export default function Home() {
  const {
    filteredContacts,
    orderBy,
    search,
    isLoading,
    handleToggleOrderBy,
    handleSearchContact,
  } = useHomeContacts();

  console.log(search);
  return (
    <>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          type="text"
          value={search}
          placeholder="Pesquisar contato..."
          onChange={handleSearchContact}
        />
      </InputSearchContainer>
      <Container>
        <Header>
          <strong>
            {filteredContacts.length}{" "}
            {filteredContacts.length === 1 ? "contato" : "Contatos"}
          </strong>
          <Link to="/new">Novo contato</Link>
        </Header>

        {filteredContacts.length > 0 && (
          <ListHeader $orderBy={orderBy}>
            <button type="button" onClick={handleToggleOrderBy}>
              <span>Nome </span>
              <img src={arrow} alt="Arrow" />
            </button>
          </ListHeader>
        )}

        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && (
                  <small>{contact.category_name}</small>
                )}
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
      </Container>
    </>
  );
}
