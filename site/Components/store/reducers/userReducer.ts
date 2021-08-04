import { userActions, userType, IUser } from '../../Interfaces/IUser';

const initialState: IUser = {
  isAuth: false,
  isLoading: false,
};

export const userReducer = (state = initialState, action: userActions): IUser => {
  switch (action.type) {
    case userType.AUTH:
      return { ...state, isAuth: action.payload };
    case userType.LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
