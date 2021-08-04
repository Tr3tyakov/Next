import { userActions, userType, IUser } from '../../Interfaces/IUser';

const initialState: IUser = {
  isAuth: false,
  isLoading: false,
  openModal: false,
};

export const userReducer = (state = initialState, action: userActions): IUser => {
  switch (action.type) {
    case userType.AUTH:
      return { ...state, isAuth: action.payload };
    case userType.LOADING:
      return { ...state, isLoading: action.payload };
    case userType.MODAL:
      return { ...state, openModal: action.payload };
    default:
      return state;
  }
};
