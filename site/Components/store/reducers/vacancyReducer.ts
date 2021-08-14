import { IVacancyState, vacancyActions, vacancyType } from '../../Interfaces/IVacancy';

const initialState: IVacancyState = {
  vacancies: [],
  currentVacancy: {},
};

export const vacancyReducer = (state = initialState, action: vacancyActions): IVacancyState => {
  switch (action.type) {
    case vacancyType.VACANCIES:
      return { ...state, vacancies: action.payload };
    case vacancyType.VACANCY:
      return { ...state, currentVacancy: action.payload };
    default:
      return state;
  }
};
