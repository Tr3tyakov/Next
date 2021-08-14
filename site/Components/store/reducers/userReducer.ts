import { userActions, userType, IUser } from '../../Interfaces/IUser';

const initialState: IUser = {
  isAuth: false,
  isLoading: false,
  openModal: false,
  skills: [],
  sphereActivity: [],
  salary: '',
  position: '',
  email: '',
  mainInfo: {
    name: '',
    secondName: '',
    avatar: '',
    bithday: '',
    gender: '',
    phone: '',
    city: '',
    country: '',
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
    case userType.USER:
      return {
        ...state,
        isAuth: true,
        openModal: false,
        mainInfo: action.payload.mainInfo,
        skills: action.payload.skills,
        email: action.payload.email,
        sphereActivity: action.payload.specializations,
        salary: action.payload.desiredPay,
        position: action.payload.desiredPosition,
      };
    case userType.CLEAR:
      return {
        ...state,
        isAuth: false,
        mainInfo: {
          name: '',
          secondName: '',
          avatar: '',
          bithday: '',
          gender: '',
          phone: '',
          city: '',
          country: '',
        },
        skills: [],
        sphereActivity: [],
        salary: '',
        position: '',
        email: '',
      };
    default:
      return state;
  }
};
