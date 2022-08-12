import { takeEvery, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import * as actionTypes from '../constants';
import { loginSuccessed, registrationFailed } from '../actions';

function* loginSaga({ payload }) {
  try {
    const { data } = yield call(api.post, '/login/', payload);
    localStorage.setItem('token', data.access);
    yield put(loginSuccessed(data.id));
  } catch (error) {
    yield put(registrationFailed(error.message));
  }
}

export default function* logSaga() {
  yield takeEvery(actionTypes.LOGIN_REQUESTED, loginSaga);
}
