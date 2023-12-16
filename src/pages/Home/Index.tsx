import ContactsList from "../../components/ContactsList";
import { InputSearchContainer } from "./styles";
const CONTACTS = 3;

export default function Home() {
  if (CONTACTS)
    return (
      <>
        <InputSearchContainer>
          <input type="text" placeholder="Pesquisar contato..." />
        </InputSearchContainer>
        <ContactsList />
      </>
    );
}
