import { userActions, userType, IUser } from '../../Interfaces/IUser';

const initialState: IUser = {
  isAuth: false,
  isLoading: false,
  openModal: false,
  skills: [],
  sphereActivity: [],
  salary: '',
  position: '',
};

export const userReducer = (state = initialState, action: userActions): IUser => {
  switch (action.type) {
    case userType.AUTH:
      return { ...state, isAuth: action.payload };
    case userType.LOADING:
      return { ...state, isLoading: action.payload };
    case userType.MODAL:
      return { ...state, openModal: action.payload };
    case userType.SPHERE:
      return {
        ...state,
        salary: action.payload.salary,
        position: action.payload.position,
        sphereActivity: action.payload.sphereActivity,
      };
    case userType.SKILLS:
      return {
        ...state,
        skills: action.payload,
      };
    default:
      return state;
  }
};
