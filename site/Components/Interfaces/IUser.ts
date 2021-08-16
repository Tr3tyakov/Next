export enum userType {
  AUTH = 'AUTH',
  LOADING = 'LOADING',
  MODAL = 'MODAL',
  USER = 'USER',
  CLEAR = 'CLEAR',
}
export interface IUser {
  isAuth: boolean;
  openModal: boolean;
  mainInfo: IMainInfo;
}

export interface IMainInfo {
  name?: string;
  secondName?: string;
  avatar?: string;
  bithday?: string;
  gender?: string;
  phone?: string;
  city?: string;
  country?: string;
}

//actions
interface authAction {
  type: userType.AUTH;
  payload: { value: boolean; mainInfo: IMainInfo };
}

interface modalAction {
  type: userType.MODAL;
  payload: boolean;
}

export type userActions = authAction | modalAction;
