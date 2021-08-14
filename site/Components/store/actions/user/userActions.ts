import { IUser, userActions } from '../../../Interfaces/IUser';
import { userType } from '../../../Interfaces/IUser';

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
export const setUser = (data: IUser): userActions => ({
  type: userType.USER,
  payload: data,
});
export const setClear = (): userActions => ({
  type: userType.CLEAR,
});
