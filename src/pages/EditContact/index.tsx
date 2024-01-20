import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import ContactForm, { ContactFormRef } from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import Loader from "../../components/Loader";

import ContactsService from "../../services/ContactsService";
import ContactWithoutId from "../../types/ContactWithoutId";
import toast from "../../utils/toast";

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const contactFormRef = useRef<ContactFormRef>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);

        if (id) {
          const contactData = await ContactsService.getContactbyId(id);
          contactFormRef.current?.setFieldsValues(contactData);
          setIsLoading(false);
        }
      } catch {
        navigate("/");
        toast({ type: "danger", text: "Contato não encontrado" });
      }
    })();
  }, [id, navigate]);

  async function handleSubmit(contactData: ContactWithoutId) {}

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title="Editar José Artur" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
