import ContactWithoutId from "./ContactWithoutId";

export default interface Contact extends ContactWithoutId {
  id: string;
  category_name: null | string;
}
