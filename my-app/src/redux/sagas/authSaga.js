import { takeEvery, put, call } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import api from '../../api/api';
import { registrationSuccessed, registrationFailed, loginRequested } from '../actions';

function* registrationSaga({ payload }) {
  try {
    const { data } = yield call(api.post, '/users/', payload);
    yield put(registrationSuccessed(data));
    yield put(loginRequested(payload));
  } catch (error) {
    yield put(registrationFailed(error?.response?.data?.email[0]));
  }
}

export default function* recordSaga() {
  yield takeEvery(actionTypes.REGISTRATION_REQUESTED, registrationSaga);
}
Implementation of authorization