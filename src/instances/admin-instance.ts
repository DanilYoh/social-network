/* eslint-disable no-param-reassign */
import axios from 'axios';

export const adminInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Accept: 'application/json',
  },
});

adminInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
