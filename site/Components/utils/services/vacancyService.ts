import axios from 'axios';
import { INewVacancy } from '../../../pages/CreateOffer';
import { URL } from '../http/utils';

export class VacancyService {
  static async createVacancy(newVacancy: INewVacancy) {
    return axios.post(`${URL}/vacancy`, { newVacancy }, { withCredentials: true });
  }
  static async changeFavoriteVacancies(id: string) {
    return axios.post(`${URL}/vacancy/favorite`, { id }, { withCredentials: true });
  }
}
