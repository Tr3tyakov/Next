import { IMainInfo, userActions } from '../../../Interfaces/IUser';
import { userType } from '../../../Interfaces/IUser';

export const setAuth = (value: boolean, mainInfo?: IMainInfo): userActions => ({
  type: userType.AUTH,
  payload: { value, mainInfo },
});
export const setModal = (value: boolean): userActions => ({
  type: userType.MODAL,
  payload: value,
});

export const setFavorite = (value: object): userActions => ({
  type: userType.FAVORITE,
  payload: value,
});
