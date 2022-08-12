import { takeEvery, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import * as actionTypes from '../constants';
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
