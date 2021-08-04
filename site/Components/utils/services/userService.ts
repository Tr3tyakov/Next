import axios from 'axios';
import { api, URL } from '../http/utils';

export class UserService {
  static async registration(email: string, password: string) {
    return await api.post('/registration', { email, password });
  }
  static async login(email: string, password: string) {
    return await api.post('/login', { email, password });
  }
  static async logout() {
    return await api.get('/logout');
  }
  static async refresh() {
    return await axios.get(`${URL}/refresh`, { withCredentials: true });
  }
}
