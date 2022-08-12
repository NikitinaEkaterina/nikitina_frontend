import {
  CHANGE_MODAL_STATE, LOGIN_SUCCESSED, LOGOUT, REGISTRATION_FAILED,
} from '../constants/index';

const initState = {
  isModalOpen: false,
  modalType: 'login',
  isLoggedIn: Boolean(localStorage.getItem('token')),
  authError: null,
  userId: null,
};

const authReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case CHANGE_MODAL_STATE:
      return {
        ...state,
        isModalOpen: action.payload.status,
        modalType: action.payload.type,
        authError: null,
      };
    case LOGIN_SUCCESSED:
      return {
        ...state,
        isModalOpen: false,
        isLoggedIn: true,
        userId: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTRATION_FAILED:
      return {
        ...state,
        authError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
