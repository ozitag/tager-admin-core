import Vue, { VueConstructor } from 'vue';

declare module '@tager/admin-core' {
  type QueryParams = { [key: string]: any };
  type BodyParam = { [key: string]: any } | BodyInit;

  type RequestParams = {
    path?: string;
    body?: BodyParam;
    params?: QueryParams;
    absoluteUrl?: string;
    fetchOptions?: RequestInit;
  };

  type ApiRequest = (options: RequestParams) => Promise<any>;
  type ApiType = {
    setApiOrigin: (origin: string) => void;
    get: ApiRequest;
    post: ApiRequest;
    put: ApiRequest;
    patch: ApiRequest;
    delete: ApiRequest;
  };

  type ConfigService = {
    setConfig: (config: any) => void;
    getConfig: <T = any>() => T;
  };

  export const BaseLayout: VueConstructor<Vue>;
  export const api: ApiType;
  export const configStore: ConfigService;
}
