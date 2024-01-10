import React, { useCallback, useEffect, useMemo, useState } from "react";
import ContactsService from "../services/ContactsService";
import contact from "../types/contact";

export default function useContacts() {
  const [contacts, setContacts] = useState<contact[]>([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(orderBy);
      setContacts(contactsList);
      setHasError(false);
    } catch (error) {
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

  return {
    contacts,
    filteredContacts,
    orderBy,
    search,
    isLoading,
    hasError,
    handleToggleOrderBy,
    handleSearchContact,
    handleTryAgain,
  };
}
