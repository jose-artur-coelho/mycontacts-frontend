import APIError from "../../errors/APIError";

class HttpClient {
  baseURL;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }
  async get(path: string) {
    const response = await fetch(`${this.baseURL}${path}`);

    const contentType = response.headers.get("Content-Type");

    if (contentType?.includes("application/json")) {
      const body = await response.json();
      if (response.ok) return body;
      throw new APIError(body.error);
    } else {
      throw new APIError(`${response.status} - ${response.statusText}`);
    }
  }

  async post(path: string, data: object) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const body = await response.json();
      return body;
    }
    if (response.status >= 400 && response.status < 500) {
      const body = await response.json();
      throw new APIError(body.error);
    }
  }
}

export default HttpClient;
