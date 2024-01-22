import ContactWithoutId from "../types/ContactWithoutId";
import HttpClient from "./utils/HttpClient";

class ContactService {
  private httpClient;
  constructor() {
    this.httpClient = new HttpClient("http://localhost:3000");
  }
  listContacts(orderBy = "asc") {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  getContactbyId(id: string) {
    return this.httpClient.get(`/contacts/${id}`);
  }
  createContact(options: { body: ContactWithoutId; headers?: object }) {
    return this.httpClient.post(`/contacts`, options);
  }
  updateContact(
    id: string,
    options: { body: ContactWithoutId; headers?: object }
  ) {
    return this.httpClient.put(`/contacts/${id}`, options);
  }
  deleteContact(id: string, options?: { headers: object }) {
    return this.httpClient.delete(`/contacts/${id}`, options);
  }
}
export default new ContactService();
