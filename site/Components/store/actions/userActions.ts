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

export const setSkills = (skills: string[]) => ({
  type: userType.SKILLS,
  payload: skills,
});
