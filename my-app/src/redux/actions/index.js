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

export const changeModalState = (payload) => ({
  type: actionTypes.CHANGE_MODAL_STATE,
  payload,
});

export const registrationRequested = (payload) => ({
  type: actionTypes.REGISTRATION_REQUESTED,
  payload,
});
export const registrationSuccessed = (payload) => ({
  type: actionTypes.REGISTRATION_SUCCESSED,
  payload,
});
export const registrationFailed = (payload) => ({
  type: actionTypes.REGISTRATION_FAILED,
  payload,
});

export const loginRequested = (payload) => ({
  type: actionTypes.LOGIN_REQUESTED,
  payload,
});
export const loginSuccessed = (payload) => ({
  type: actionTypes.LOGIN_SUCCESSED,
  payload,
});

export const logOut = () => ({
  type: actionTypes.LOGOUT,
});

export const getUserRequested = (payload) => ({
  type: actionTypes.GET_USER_REQUESTED,
  payload,
});
export const getUserSuccessed = (payload) => ({
  type: actionTypes.GET_USER_SUCCESSED,
  payload,
});
export const getUserFailed = (error) => ({
  type: actionTypes.GET_USER_FAILED,
  error,
});

export const getUserNewsRequested = (payload) => ({
  type: actionTypes.GET_USER_NEWS_REQUESTED,
  payload,
});
export const getUserNewsSuccessed = (payload) => ({
  type: actionTypes.GET_USER_NEWS_SUCCESSED,
  payload,
});
export const getUserNewsFailed = (error) => ({
  type: actionTypes.GET_USER_NEWS_FAILED,
  error,
});
