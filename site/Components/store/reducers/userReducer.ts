import { userActions, userType, IUser } from '../../Interfaces/IUser';

const initialState: IUser = {
  isAuth: false,
  isLoading: false,
  openModal: false,
  skills: [],
  sphereActivity: [],
  salary: '',
  position: '',
  mainInfo: {
    avatar: '',
    gender: '',
    name: '',
    lastName: '',
    date: '',
    email: '',
    phone: '',
    city: '',
  },
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
    case userType.MAIN_INFO:
      return {
        ...state,
        mainInfo: {
          ...state.mainInfo,
          avatar: action.payload.avatar,
          gender: action.payload.gender,
          name: action.payload.name,
          lastName: action.payload.lastName,
          date: action.payload.date,
          email: action.payload.email,
          phone: action.payload.phone,
          city: action.payload.city,
        },
      };
    default:
      return state;
  }
};
