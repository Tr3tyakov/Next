import { UserService } from './../../utils/services/userService';
import { Dispatch } from 'react';
import { RootState } from '../reducers/rootReducer';
import { userActions } from '../../Interfaces/IUser';
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

export const setSphere = (
  position: string,
  salary: string,
  sphereActivity: string[],
): userActions => ({
  type: userType.SPHERE,
  payload: { position, salary, sphereActivity },
});

export const setRegistration = (email: string, password: string) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const userData = await UserService.registration(email, password);
      console.log(userData);
    } catch (e) {
      console.log(e);
    }
  };
};
export const setLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const userData = await UserService.login(email, password);
      localStorage.setItem('Token', userData.data.accessToken);

      dispatch(setAuth(true));
      dispatch(setModal(false));
    } catch (e) {
      console.log(e);
    }
  };
};
export const setLogout = () => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const userData = await UserService.logout();
      localStorage.removeItem('Token');

      dispatch(setAuth(false));
    } catch (e) {
      console.log(e);
    }
  };
};
export const checkAuth = () => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const userData = await UserService.refresh();
      localStorage.setItem('Token', userData.data.accessToken);
      dispatch(setAuth(true));
    } catch (e) {
      console.log(e);
    }
  };
};
