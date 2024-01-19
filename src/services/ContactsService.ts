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

  createContact(options: { body: object; headers?: object }) {
    return this.httpClient.post(`/contacts`, options);
  }
}
export default new ContactService();
