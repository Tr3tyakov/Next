import { Dispatch } from 'react';
import { RootState } from './../reducers/rootReducer';

import { userActions } from '../../Interfaces/IUser';
import { userType } from './../../Interfaces/IUser';

export const setLoading = (value: boolean) => ({
  type: userType.LOADING,
  payload: value,
});
export const setAuth = (value: boolean) => ({
  type: userType.AUTH,
  payload: value,
});

export const setRegistration = (email: string, password: string) => {
  return (dispatch: Dispatch<userActions>) => {
    dispatch(setLoading(true));

    dispatch(setAuth(true));
  };
};
export const setLogin = (email: string, password: string) => {
  return (dispatch: Dispatch<userActions>) => {
    dispatch(setLoading(true));
    try {
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(true));
    }
    dispatch(setAuth(true));
  };
};
export const setLogout = () => {
  return (dispatch: Dispatch<userActions>) => {
    dispatch(setLoading(true));
    try {
      dispatch(setAuth(false));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(true));
    }
  };
};
