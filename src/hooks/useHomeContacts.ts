import React, { useEffect, useMemo, useState } from "react";
import ContactsServices from "../services/ContactsServices";

interface contact {
  id: string;
  name: string;
  email: null | string;
  phone: null | string;
  category_name: null | string;
  category_id: null | string;
}

export default function useHomeContacts() {
  const [contacts, setContacts] = useState<contact[]>([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);
        const contactsList = await ContactsServices.listContacts(orderBy);

        setContacts(contactsList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  }

  function handleSearchContact(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
      ),
    [contacts, search]
  );

  return {
    filteredContacts,
    orderBy,
    search,
    isLoading,
    handleToggleOrderBy,
    handleSearchContact,
  };
}
