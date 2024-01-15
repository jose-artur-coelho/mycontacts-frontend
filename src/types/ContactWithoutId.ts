export default interface ContactWithoutId {
  name: string;
  email: string | null;
  phone: string | null;
  category_id: string | null;
}
