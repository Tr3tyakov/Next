export enum userType {
  AUTH = 'AUTH',
  LOADING = 'LOADING',
  MODAL = 'MODAL',
  SPHERE = 'SPHERE',
  SKILLS = 'SKILLS',
  MAIN_INFO = 'MAIN_INFO',
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
interface skillsAction {
  type: userType.SKILLS;
  payload: string[];
}
interface usersAction {
  type: userType.USER;
  payload: any;
}
interface sphereAction {
  type: userType.SPHERE;
  payload: {
    position: string;
    salary: string;
    sphereActivity: string[];
  };
}
interface clearAction {
  type: userType.CLEAR;
}
interface mainInfoAction {
  type: userType.MAIN_INFO;
  payload: {
    avatar: string;
    gender: string;
    name: string;
    secondName: string;
    bithday: string;
    email: string;
    phone: string;
    city: string;
    country: string;
  };
}

export type userActions =
  | authAction
  | loadingAction
  | modalAction
  | sphereAction
  | skillsAction
  | mainInfoAction
  | usersAction
  | clearAction;
