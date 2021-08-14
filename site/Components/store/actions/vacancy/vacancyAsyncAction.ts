import { VacancyService } from './../../../utils/services/vacancyService';
import { Dispatch } from 'react';
import { vacancyActions } from '../../../Interfaces/IVacancy';
import { setVacancies, setCurrentVacancy } from './vacancyAction';
import { INewVacancy } from '../../../../pages/CreateOffer';

export const setNewVacancy = (newVacancy: INewVacancy) => {
  return async (dispatch: Dispatch<vacancyActions>) => {
    try {
      const vacancyData = await VacancyService.createVacancy(newVacancy);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getVacancies = () => {
  return async (dispatch: Dispatch<vacancyActions>) => {
    try {
      const vacancyData = await VacancyService.getVacancies();
      console.log(vacancyData);
      dispatch(setVacancies(vacancyData.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCurrentVacancy = (id: any) => {
  return async (dispatch: Dispatch<vacancyActions>) => {
    console.log(id);
    try {
      const vacancyData = await VacancyService.getCurrentVacancy(id);
      console.log(vacancyData);
      dispatch(setCurrentVacancy(vacancyData.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteVacancy = (idVacancy: string) => {
  return async (dispatch: Dispatch<vacancyActions>) => {
    try {
      const vacancyData = await VacancyService.deleteVacancy(idVacancy);
      // dispatch()
    } catch (error) {
      console.log(error);
    }
  };
};
