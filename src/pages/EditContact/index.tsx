import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import ContactForm, { ContactFormRef } from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import Loader from "../../components/Loader";

import ContactsService from "../../services/ContactsService";
import ContactWithoutId from "../../types/ContactWithoutId";
import toast from "../../utils/toast";
import APIError from "../../errors/APIError";
import useSafeAsyncAction from "../../hooks/useSafeAsyncAction";

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState("");
  const contactFormRef = useRef<ContactFormRef>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    async function loadContact() {
      try {
        setIsLoading(true);

        if (id) {
          const contactData = await ContactsService.getContactbyId(id);
          safeAsyncAction(() => {
            setContactName(contactData.name);
            contactFormRef.current?.setFieldsValues(contactData);
            setIsLoading(false);
          });
        }
      } catch {
        safeAsyncAction(() => {
          navigate("/");
          toast({ type: "danger", text: "Contato não encontrado" });
        });
      }
    }
    loadContact();
  }, [id, navigate, safeAsyncAction]);

  async function handleSubmit(contactData: ContactWithoutId) {
    try {
      if (id) {
        await ContactsService.updateContact(id, { body: contactData });
        toast({
          type: "success",
          text: "Contato editado com sucesso!",
          duration: 8000,
        });
        navigate("/");
      }
    } catch (error) {
      if (error instanceof APIError) {
        toast({
          type: "danger",
          text: error.message,
        });
      } else {
        toast({
          type: "danger",
          text: "Ocorreu um erro ao cadastrar o contato.",
        });
      }
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? "Carregando..." : `Editar ${contactName}`}
      />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
