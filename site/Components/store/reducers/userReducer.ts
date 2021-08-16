import { userActions, userType, IUser } from '../../Interfaces/IUser';

const initialState: IUser = {
  isAuth: false,
  openModal: false,
  mainInfo: {},
  favorite: {},
};

export const userReducer = (state = initialState, action: userActions): IUser => {
  switch (action.type) {
    case userType.AUTH: {
      const mainInfo = action.payload.mainInfo;
      if (mainInfo) {
        return { ...state, isAuth: action.payload.value, mainInfo };
      }
      return { ...state, isAuth: action.payload.value };
    }
    case userType.FAVORITE:
      return { ...state, favorite: action.payload };
    case userType.MODAL:
      return { ...state, openModal: action.payload };
    default:
      return state;
  }
};
