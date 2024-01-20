import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import ContactsService from "../../services/ContactsService";
import ContactWithoutId from "../../types/ContactWithoutId";
import toast from "../../utils/toast";
import APIError from "../../errors/APIError";

export default function NewContact() {
  async function handleSubmit(contactData: ContactWithoutId) {
    try {
      await ContactsService.createContact({ body: contactData });
      toast({
        type: "success",
        text: "Contato cadastrado com sucesso!",
        duration: 8000,
      });
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
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
