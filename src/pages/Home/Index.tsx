import {
  Header,
  Container,
  Card,
  InputSearchContainer,
  ListContainer,
} from "./styles";
import arrow from "../../assets/images/icons/arrow.svg";
import trash from "../../assets/images/icons/trash.svg";
import edit from "../../assets/images/icons/edit.svg";
import { Link } from "react-router-dom";
const CONTACTS = 3;

export default function Home() {
  if (CONTACTS)
    return (
      <>
        <InputSearchContainer>
          <input type="text" placeholder="Pesquisar contato..." />
        </InputSearchContainer>
        <Container>
          <Header>
            <strong>3 contatos</strong>
            <Link to="/new">Novo contato</Link>
          </Header>

          <ListContainer>
            <header>
              <button type="button">
                <span>Nome </span>
                <img src={arrow} alt="Arrow" />
              </button>
            </header>
            <Card>
              <div className="info">
                <div className="contact-name">
                  <strong>José Artur</strong>
                  <small>Instagram</small>
                </div>
                <span>artur@lora.com</span>
                <span>(83)99060916</span>
              </div>
              <div className="buttons">
                <Link to="/edit/16263">
                  <img src={edit} alt="" />
                </Link>
                <button>
                  <img src={trash} alt="" />
                </button>
              </div>
            </Card>
          </ListContainer>
        </Container>
      </>
    );
}
