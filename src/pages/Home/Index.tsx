import { Container } from "./styles";

import Loader from "../../components/Loader";
import ContactsList from "./components/ContactsList";
import RequestError from "./components/RequestError";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmptyList from "./components/EmptyList";
import ContactNotFound from "./components/ContactNotFound";
import Modal from "../../components/Modal";

import { useState } from "react";
import useContacts from "../../hooks/useContacts";

import Contact from "../../types/Contact";
import ContactsService from "../../services/ContactsService";
import toast from "../../utils/toast";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    contacts,
    setContacts,
    filteredContacts,
    orderBy,
    search,
    isLoading,
    hasError,
    handleToggleOrderBy,
    handleSearchContact,
    handleTryAgain,
  } = useContacts();

  function handleCloseModal() {
    setIsModalVisible(false);
    setContactToDelete(null);
  }
  function handleOpenModal(contact: Contact) {
    setIsModalVisible(true);
    setContactToDelete(contact);
  }
  async function handleConfirmDeleteContact() {
    try {
      setIsDeleting(true);
      if (contactToDelete?.id) {
        await ContactsService.deleteContact(contactToDelete?.id);

        setContacts((prevState) =>
          prevState.filter((contact) => contact.id !== contactToDelete.id)
        );

        handleCloseModal();

        toast({
          type: "success",
          text: "Contato removido com sucesso!",
          duration: 8000,
        });
      }
    } catch (error) {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao remover o contato.",
      });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />

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
                onDeleteContact={handleOpenModal}
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
