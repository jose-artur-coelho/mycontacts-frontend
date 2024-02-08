import { useState, useCallback, useEffect, useMemo } from "react";
import ContactsService from "../../services/ContactsService";
import Contact from "../../types/Contact";
import toast from "../../utils/toast";

export default function useHome() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(orderBy);
      setContacts(contactsList);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
      ),
    [contacts, search]
  );

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  }

  function handleSearchContact(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

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

  return {
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
    isModalVisible,
    contactToDelete,
    isDeleting,
    handleOpenModal,
    handleCloseModal,
    handleConfirmDeleteContact,
  };
}
