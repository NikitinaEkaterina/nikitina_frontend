import {
  GET_USER_REQUESTED,
  GET_USER_SUCCESSED,
  GET_USER_FAILED,
  GET_USER_NEWS_REQUESTED,
  GET_USER_NEWS_SUCCESSED,
  GET_USER_NEWS_FAILED,
  ADD_NEWS_SUCCESSED,
} from '../constants';

const initialState = {
  userNews: null,
  isLoading: false,
  error: null,
  user: null,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_REQUESTED:
      return {
        ...state,
        user: null,
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
        userNews: null,
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
    case ADD_NEWS_SUCCESSED:
      return {
        ...state,
        userNews: [...state.userNews, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
