export enum userType {
  AUTH = 'AUTH',
  LOADING = 'LOADING',
  MODAL = 'MODAL',
}
export interface IUser {
  isAuth: boolean;
  isLoading: boolean;
  openModal: boolean;
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
interface modalAction {
  type: userType.MODAL;
  payload: boolean;
}

export type userActions = authAction | loadingAction | modalAction;
