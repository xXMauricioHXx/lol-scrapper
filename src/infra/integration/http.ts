import axios, { AxiosInstance, AxiosResponse } from 'axios';

export abstract class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
  }

  isNoContentStatus(result: AxiosResponse): boolean {
    return result.status === 204;
  }
}
