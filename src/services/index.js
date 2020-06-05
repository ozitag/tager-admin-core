import apiService, { HttpMethods } from './api';
import { uploadFile } from './upload';
export { default as RequestError } from './RequestError';
export { default as configStore } from './configuration';

export const api = {
  setApiOrigin: origin => apiService.setApiOrigin(origin),
  get: apiService.bindHttpMethod(HttpMethods.GET),
  post: apiService.bindHttpMethod(HttpMethods.POST),
  put: apiService.bindHttpMethod(HttpMethods.PUT),
  delete: apiService.bindHttpMethod(HttpMethods.DELETE),
  patch: apiService.bindHttpMethod(HttpMethods.PATCH),
  uploadFile
};
