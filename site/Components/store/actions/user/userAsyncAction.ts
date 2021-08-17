import { userActions } from '../../../Interfaces/IUser';
import { UserService } from '../../../utils/services/userService';
import { Dispatch } from 'react';
import { setAuth } from './userActions';
import Router from 'next/router';
export const setRegistration = (email: string, password: string) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      await UserService.registration(email, password);
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
      dispatch(setAuth(true, userData.data.mainInfo));
      Router.push('/FindVacancies');
    } catch (e) {
      console.log(e);
    }
  };
};
export const setLogout = () => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      await UserService.logout();
      localStorage.removeItem('Token');
      dispatch(setAuth(false));
      Router.push('/');
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
      dispatch(setAuth(true, userData.data.mainInfo));
    } catch (e) {
      console.log(e, 'Пользователь не авторизован');
    }
  };
};
