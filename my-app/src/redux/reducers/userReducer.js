import {
  GET_USER_REQUESTED, GET_USER_SUCCESSED, GET_USER_FAILED, GET_USER_NEWS_REQUESTED,
  GET_USER_NEWS_SUCCESSED, GET_USER_NEWS_FAILED,
} from '../constants';

const initialState = {
  userNews: [],
  isLoading: false,
  error: null,
  user: {},
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_REQUESTED:
      return {
        ...state,
        userNews: [],
        error: null,
        isLoading: true,
      };
    case GET_USER_SUCCESSED:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoading: false,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case GET_USER_NEWS_REQUESTED:
      return {
        ...state,
        user: {},
        isLoading: true,
      };
    case GET_USER_NEWS_SUCCESSED:
      return {
        ...state,
        userNews: action.payload,
        isLoading: false,
      };
    case GET_USER_NEWS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;