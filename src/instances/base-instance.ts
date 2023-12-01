import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Accept: 'application/json',
  },
});
baseInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (axios.isAxiosError(err)) {
      throw new Error('axios error');
    }
  }
);
