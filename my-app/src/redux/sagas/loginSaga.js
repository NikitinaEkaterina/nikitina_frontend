import { takeEvery, put, call } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import api from '../../api/api';
import { loginSuccessed, registrationFailed } from '../actions';

function* loginSaga({ payload }) {
  try {
    const { data } = yield call(api.post, '/token/', payload);
    window.localStorage.setItem('token', data.access);
    yield put(loginSuccessed(data));
  } catch (error) {
    yield put(registrationFailed(error.message));
  }
}

export default function* logSaga() {
  yield takeEvery(actionTypes.LOGIN_REQUESTED, loginSaga);
}
