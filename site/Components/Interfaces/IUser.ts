export enum userType {
  AUTH = 'AUTH',
  LOADING = 'LOADING',
  MODAL = 'MODAL',
  USER = 'USER',
  CLEAR = 'CLEAR',
}
export interface IUser {
  isAuth: boolean;
  isLoading: boolean;
  openModal: boolean;
  skills: string[];
  position: string;
  salary: string;
  sphereActivity: string[];
  email: string;
  mainInfo: IMainInfo;
}

export interface IMainInfo {
  name: string;
  secondName: string;
  avatar: string;
  bithday: string;
  gender: string;
  phone: string;
  city: string;
  country: string;
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
interface usersAction {
  type: userType.USER;
  payload: any;
}
interface clearAction {
  type: userType.CLEAR;
}

export type userActions = authAction | loadingAction | modalAction | usersAction | clearAction;
