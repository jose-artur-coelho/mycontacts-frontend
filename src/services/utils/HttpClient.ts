import APIError from "../../errors/APIError";

interface Options {
  method: string;
  body?: object;
  headers?: object;
}

class HttpClient {
  baseURL;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }
  get(path: string, options?: { headers: object }) {
    return this.MakeRequest(path, {
      method: "GET",
      headers: options?.headers,
    });
  }

  post(path: string, options: { body: object; headers?: object }) {
    return this.MakeRequest(path, {
      method: "POST",
      body: options?.body,
      headers: options?.headers,
    });
  }
  async MakeRequest(path: string, options: Options) {
    const headers = new Headers();

    if (options.body) headers.append("Content-Type", "application/json");

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, value]) =>
        headers.append(name, value)
      );
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      headers,
      body: JSON.stringify(options.body),
    });

    let body = null;
    const contentType = response.headers.get("Content-Type");
    if (contentType?.includes("application/json")) {
      body = await response.json();
      if (response.ok) return body;
      throw new APIError(body.error);
    } else {
      throw new APIError(`${response.status} - ${response.statusText}`);
    }
  }
}

export default HttpClient;
