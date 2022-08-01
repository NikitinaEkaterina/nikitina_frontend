import * as actionTypes from '../constants';

export const getNewsRequest = () => ({
  type: actionTypes.NEWS_REQUESTED,
});

export const getNewsReceived = (payload) => ({
  type: actionTypes.NEWS_SUCCESSED,
  payload,
});

export const getNewsFailed = (error) => ({
  type: actionTypes.NEWS_FAILED,
  error,
});
