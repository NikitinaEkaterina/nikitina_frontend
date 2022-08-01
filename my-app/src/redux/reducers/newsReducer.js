import { NEWS_REQUESTED, NEWS_SUCCESSED, NEWS_FAILED } from '../constants';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
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
    default:
      return state;
  }
};

export default newsReducer;
