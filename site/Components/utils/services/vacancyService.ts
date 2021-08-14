import axios from 'axios';
import { INewVacancy } from '../../../pages/CreateOffer';
import { URL } from '../http/utils';

export class VacancyService {
  static async createVacancy(newVacancy: INewVacancy) {
    return axios.post(`${URL}/vacancy`, { newVacancy }, { withCredentials: true });
  }
  static async getVacancies() {
    return axios.get(`${URL}/vacancy`);
  }
  static async getCurrentVacancy(id: string) {
    return axios.get(`${URL}/vacancy/${id}`);
  }

  static async deleteVacancy(idVacancy: string) {
    return axios.post(`${URL}/vacancy`, { idVacancy });
  }
}
