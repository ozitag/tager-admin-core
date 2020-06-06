import { localStorageService } from '@/services/storage';
import RequestError from '@/services/RequestError';

export const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
};

class ApiService {
  constructor() {
    this.apiOrigin = process.env.VUE_APP_API_ORIGIN ?? '';
  }

  setApiOrigin(origin) {
    this.apiOrigin = origin;
  }

  getApiOrigin() {
    return this.apiOrigin;
  }

  getAccessToken() {
    return localStorageService.get('accessToken');
  }

  configureHeaders(body) {
    const headers = new Headers();

    const isFormData = body instanceof FormData;
    if (!isFormData) {
      headers.set('Content-Type', 'application/json');
    }

    const accessToken = this.getAccessToken();

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    headers.set('Accept', 'application/json');

    return headers;
  }

  configureBody(body) {
    if (!body) return null;

    if (body instanceof FormData) {
      return body;
    }

    return JSON.stringify(body);
  }

  getSearchParams(params) {
    if (!params || Object.keys(params).length === 0) return '';

    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) =>
      searchParams.append(key, value)
    );

    return `?${searchParams.toString()}`;
  }

  getRequestUrl(path = '', params) {
    const searchParams = this.getSearchParams(params);
    return [this.apiOrigin, '/api/admin', path, searchParams]
      .filter(Boolean)
      .join('');
  }

  configureOptions({ method, body, fetchOptions }) {
    return {
      headers: this.configureHeaders(body),
      method,
      mode: 'cors',
      body: this.configureBody(body),
      ...fetchOptions
    };
  }

  getResponseContent(response) {
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.startsWith('application/json')) {
      return response.json().catch(error => {
        /** empty json body will throw "SyntaxError: Unexpected end of input" */
        if (error instanceof SyntaxError) {
          return response.text();
        } else {
          console.error(
            `Unknown error while parsing response body: ${error.toString()}`
          );
        }
      });
    }

    return response.text();
  }

  handleErrors(response) {
    return this.getResponseContent(response).then(content => {
      if (response.ok) {
        return content;
      }

      return Promise.reject(
        new RequestError(
          {
            code: response.status,
            text: response.statusText
          },
          content
        )
      );
    });
  }

  logRequest(res, options) {
    const formattedLog = `${options.method} ${res.status} ${res.url}`;
    console.log(`%c ${formattedLog}`, 'color: green');
    return res;
  }

  async makeRequest(method, { path, body, params, absoluteUrl, fetchOptions }) {
    const url = absoluteUrl || this.getRequestUrl(path, params);
    const options = this.configureOptions({ method, body, fetchOptions });

    return fetch(url, options)
      .then(response => this.logRequest(response, options))
      .then(this.handleErrors.bind(this));
  }

  bindHttpMethod(method) {
    return this.makeRequest.bind(this, method);
  }
}

const apiService = new ApiService();

export default apiService;
