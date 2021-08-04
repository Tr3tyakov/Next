import axios from 'axios';
export const URL = 'http://localhost:5000';

export const api = axios.create({
  withCredentials: true,
  baseURL: URL,
});
