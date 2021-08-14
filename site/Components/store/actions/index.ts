import * as UserActionCreators from './user/userActions';
import * as UserAsyncActionCreators from './user/userAsyncAction';
import * as VacancyActionCreators from './vacancy/vacancyAction';
import * as VacancyAsyncActionCreators from './vacancy/vacancyAsyncAction';

export default {
  ...UserActionCreators,
  ...UserAsyncActionCreators,
  ...VacancyActionCreators,
  ...VacancyAsyncActionCreators,
};
