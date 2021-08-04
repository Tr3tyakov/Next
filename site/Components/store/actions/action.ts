import { userType } from './../../Interfaces/IUser';

export const setLoading = (value: boolean) => ({
  type: userType.LOADING,
  payload: value,
});
export const setAuth = (value: boolean) => ({
  type: userType.AUTH,
  payload: value,
});
