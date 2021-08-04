export enum userType {
  AUTH = 'AUTH',
  LOADING = 'LOADING',
}
export interface IUser {
  isAuth: boolean;
  isLoading: boolean;
}

//actions
interface authAction {
  type: userType.AUTH;
  payload: boolean;
}
interface loadingAction {
  type: userType.LOADING;
  payload: boolean;
}

export type userActions = authAction | loadingAction;
