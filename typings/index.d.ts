import Vue, { VueConstructor } from 'vue';

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
  getApiOrigin: () => string;
  get: ApiRequest;
  post: ApiRequest;
  put: ApiRequest;
  patch: ApiRequest;
  delete: ApiRequest;
  uploadFile: <T>(params: {
    scenario?: string;
    file: File;
    onProgress?: (progressData: {
      event: ProgressEvent;
      loaded: number;
      total: number;
      progress: number;
    }) => void;
  }) => Promise<T>;
};

type ConfigService = {
  setConfig: (config: any) => void;
  getConfig: <T = any>() => T;
};

type CoreConstants = {
  BASE_PATH: string;
};

export type ParsedResponseBody =
  | boolean
  | string
  | { [key: string]: any }
  | null
  | undefined;

declare class RequestError extends Error {
  status: { code: number; text: string };
  body: ParsedResponseBody;

  constructor(status: { code: number; text: string }, body: ParsedResponseBody);
}

export const BaseLayout: VueConstructor<Vue>;
export const api: ApiType;
export const configStore: ConfigService;
export const CONSTANTS: CoreConstants;

export type ToastVariant = 'success' | 'warning' | 'danger';

export type ToastParams = {
  variant: ToastVariant;
  title: string;
  body: string;
};

export type ToastItem = ToastParams & {
  id: number;
};

export type ToastFunction = (params: ToastParams) => void;

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    $toast: ToastFunction;
  }
  interface VueConstructor {
    $toast: ToastFunction;
  }
}
