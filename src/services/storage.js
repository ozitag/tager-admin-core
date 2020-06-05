class StorageService {
  constructor(storage) {
    this.storage = storage;
  }

  get(field) {
    return this.storage.getItem(field);
  }

  getJSON(field) {
    const value = this.get(field);

    if (value === null) return value;

    try {
      return JSON.parse(value);
    } catch (error) {
      console.error(
        `Storage service error while parsing field: "${field}"`,
        error
      );
      return null;
    }
  }

  set(key, value) {
    const stringifiedValue =
      typeof value === 'string' ? value : JSON.stringify(value);
    this.storage.setItem(key, stringifiedValue);
  }
}

export const localStorageService = new StorageService(localStorage);
export const sessionStorageService = new StorageService(sessionStorage);
