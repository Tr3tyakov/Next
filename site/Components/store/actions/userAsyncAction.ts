import { specializations } from './../../account/ModalPosition';
import { IMainInfo, userActions } from './../../Interfaces/IUser';
import { UserService } from './../../utils/services/userService';
import { Dispatch } from 'react';
import { setAuth, setModal, setUser, setClear } from './userActions';

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
      dispatch(setUser(userData.data));
      dispatch(setModal(false));
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
      dispatch(setClear());
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
      dispatch(setUser(userData.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getUser = () => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const userData = await UserService.getUser();
      console.log(userData.data, 'USERDATA');
      dispatch(setUser(userData.data));
    } catch (e) {
      console.log(e);
    }
  };
};

//update
export const updateMainInfo = (mainInfo: IMainInfo) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const userData = await UserService.updateMainInfo(mainInfo);
      dispatch(setUser(userData.data));
    } catch (e) {
      console.log(e);
    }
  };
};
export const updateSkills = (skills: string[]) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const userData = await UserService.updateSkills(skills);
      dispatch(setUser(userData.data));
    } catch (e) {
      console.log(e);
    }
  };
};
export const updateDesiredPosition = (
  position: string,
  salary: string,
  specializations: string[],
) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const userData = await UserService.updatePosition(position, salary, specializations);
      dispatch(setUser(userData.data));
    } catch (e) {
      console.log(e);
    }
  };
};
