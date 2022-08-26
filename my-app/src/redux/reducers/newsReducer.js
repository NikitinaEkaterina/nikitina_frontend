import {
  NEWS_REQUESTED,
  NEWS_SUCCESSED,
  NEWS_FAILED,
  ADD_NEWS_REQUESTED,
  ADD_NEWS_SUCCESSED,
  ADD_NEWS_FAILED,
  TOGGLE_ADD_NEWS_MODAL,
} from '../constants';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
  isNewsModalOpen: false,
};

const newsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEWS_REQUESTED:
      return {
        ...state,
        news: [],
        error: null,
        isLoading: true,
      };
    case NEWS_SUCCESSED:
      return {
        ...state,
        news: action.payload,
        error: null,
        isLoading: false,
      };
    case NEWS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case ADD_NEWS_REQUESTED:
      return {
        ...state,
        error: null,
        isloading: true,
      };
    case ADD_NEWS_SUCCESSED:
      return {
        ...state,
        error: null,
        isLoading: false,
        isNewsModalOpen: false,
      };
    case ADD_NEWS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case TOGGLE_ADD_NEWS_MODAL:
      return {
        ...state,
        isNewsModalOpen: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
