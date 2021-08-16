import { VacancyService } from '../services/vacancyService';

export const changeFavoriteVacancies = async (id: string) => {
  return await VacancyService.changeFavoriteVacancies(id);
};
