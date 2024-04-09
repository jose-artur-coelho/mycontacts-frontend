import { Container } from "./styles";

import Loader from "../../components/Loader";
import ContactsList from "./components/ContactsList";
import RequestError from "./components/RequestError";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmptyList from "./components/EmptyList";
import ContactNotFound from "./components/ContactNotFound";
import Modal from "../../components/Modal";
import useHome from "./useHome";

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
    isModalVisible,
    contactToDelete,
    isDeleting,
    handleOpenModal,
    handleCloseModal,
    handleConfirmDeleteContact,
  } = useHome();

  return (
    <>
      <Loader isLoading={isLoading} />

      <SearchInput
        searchValue={search}
        onChange={handleSearchContact}
        visible={!hasError || filteredContacts.length > 0}
      />

      <Container>
        <Header
          visible={!hasError}
          numOfContacts={filteredContacts.length}
          showNumContacts={contacts.length > 0}
        />

        <ContactsList
          contacts={filteredContacts}
          orderBy={orderBy}
          handleToggleOrderBy={handleToggleOrderBy}
          onDeleteContact={handleOpenModal}
        />

        <EmptyList visible={contacts.length < 1 && !isLoading && !hasError} />

        <ContactNotFound
          searchTerm={search}
          visible={contacts.length > 0 && filteredContacts.length < 1}
        />
      </Container>

      <Modal
        title={`Tem certeza que deseja remover o contato "${contactToDelete?.name}"?`}
        onCancel={handleCloseModal}
        onConfirm={handleConfirmDeleteContact}
        isVisible={isModalVisible}
        cancelLabel="Cancelar"
        confirmLabel="Deletar"
        danger
        isLoading={isDeleting}
      >
        <p>Essa ação não poderá ser desfeita.</p>
      </Modal>

      <RequestError visible={hasError} retryFunction={handleTryAgain} />
    </>
  );
}
