import { IUser, userActions } from './../../Interfaces/IUser';
import { userType } from '../../Interfaces/IUser';

export const setLoading = (value: boolean): userActions => ({
  type: userType.LOADING,
  payload: value,
});
export const setAuth = (value: boolean): userActions => ({
  type: userType.AUTH,
  payload: value,
});
export const setModal = (value: boolean): userActions => ({
  type: userType.MODAL,
  payload: value,
});
export const setClear = (): userActions => ({
  type: userType.CLEAR,
});
export const setSphere = (
  position: string,
  salary: string,
  sphereActivity: string[],
): userActions => ({
  type: userType.SPHERE,
  payload: { position, salary, sphereActivity },
});

export const setSkills = (skills: string[]) => ({
  type: userType.SKILLS,
  payload: skills,
});

export const setUser = (data: IUser): userActions => ({
  type: userType.USER,
  payload: data,
});

export const setMainInfo = (
  avatar: string,
  gender: string,
  name: string,
  lastName: string,
  date: string,
  email: string,
  phone: string,
  city: string,
) => ({
  type: userType.MAIN_INFO,
  payload: {
    avatar,
    gender,
    name,
    lastName,
    date,
    email,
    phone,
    city,
  },
});
