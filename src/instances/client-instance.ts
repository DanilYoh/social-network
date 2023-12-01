import { Buffer } from 'buffer';

import axios from 'axios';

export const clientInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

clientInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Basic ${Buffer.from(
      'admin@mail.ru:admin'
    ).toString('base64')}`;
  }
  return config;
});

clientInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (axios.isAxiosError(err)) {
      throw new Error('axios error');
    }
  }
);
