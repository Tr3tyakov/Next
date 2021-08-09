export enum userType {
  AUTH = 'AUTH',
  LOADING = 'LOADING',
  MODAL = 'MODAL',
  SPHERE = 'SPHERE',
}
export interface IUser {
  isAuth: boolean;
  isLoading: boolean;
  openModal: boolean;
  position: string;
  salary: string;
  sphereActivity: string[];
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
interface sphereAction {
  type: userType.SPHERE;
  payload: {
    position: string;
    salary: string;
    sphereActivity: string[];
  };
}

export type userActions = authAction | loadingAction | modalAction | sphereAction;
