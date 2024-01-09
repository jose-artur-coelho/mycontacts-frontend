import { Container } from "./styles";
import Loader from "../../components/Loader";
import ContactsList from "./components/ContactsList";
import RequestError from "./components/RequestError";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmptyList from "./components/EmptyList";
import ContactNotFound from "./components/ContactNotFound";

import useContacts from "../../hooks/useContacts";

export default function Home() {
  const {
    contacts,
    filteredContacts,
    orderBy,
    search,
    isLoading,
    hasError,
    handleToggleOrderBy,
    handleSearchContact,
    handleTryAgain,
  } = useContacts();

  return (
    <>
      <Loader isLoading={isLoading} />

      {!hasError && contacts.length > 0 && (
        <SearchInput searchValue={search} onChange={handleSearchContact} />
      )}

      <Container>
        {!hasError && (
          <>
            <Header
              numOfContacts={filteredContacts.length}
              showNumContacts={Boolean(contacts.length)}
            />

            {filteredContacts.length > 0 && (
              <ContactsList
                contacts={filteredContacts}
                orderBy={orderBy}
                handleToggleOrderBy={handleToggleOrderBy}
              />
            )}
            {contacts.length < 1 && !isLoading && <EmptyList />}

            {contacts.length > 0 && filteredContacts.length < 1 && (
              <ContactNotFound searchTerm={search} />
            )}
          </>
        )}

        {hasError && <RequestError retryFunction={handleTryAgain} />}
      </Container>
    </>
  );
}
