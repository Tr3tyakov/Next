import { IMainInfo } from '../../Interfaces/IUser';
import { UserService } from '../services/userService';

export const updateMainInfo = async (mainInfo: IMainInfo) => {
  try {
    const userData = await UserService.updateMainInfo(mainInfo);
  } catch (e) {
    console.log(e);
  }
};
export const updateSkills = async (skills: string[]) => {
  try {
    const userData = await UserService.updateSkills(skills);
  } catch (e) {
    console.log(e);
  }
};

export const updateDesiredPosition = async (
  position: string,
  salary: string,
  specializations: string[],
) => {
  try {
    const userData = await UserService.updatePosition(position, salary, specializations);
    return userData;
  } catch (e) {
    console.log(e);
  }
};
