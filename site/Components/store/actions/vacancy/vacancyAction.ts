import { IFullVacancy, vacancyActions, vacancyType } from './../../../Interfaces/IVacancy';

export const setVacancies = (vacancies: []): vacancyActions => ({
  type: vacancyType.VACANCIES,
  payload: vacancies,
});

export const setCurrentVacancy = (vacancy: any) => ({
  type: vacancyType.VACANCY,
  payload: vacancy,
});
