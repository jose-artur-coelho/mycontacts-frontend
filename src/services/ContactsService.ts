import HttpClient from "./utils/HttpClient";

class ContactService {
  httpClient;
  constructor() {
    this.httpClient = new HttpClient("http://localhost:3000");
  }
  async listContacts(orderBy = "asc") {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }
}
export default new ContactService();
