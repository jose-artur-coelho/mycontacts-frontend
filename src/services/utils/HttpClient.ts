class HttpClient {
  baseURL;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }
  async get(path: string) {
    const response = await fetch(`${this.baseURL}${path}`);
    return response.json;
  }
}

export default HttpClient;
