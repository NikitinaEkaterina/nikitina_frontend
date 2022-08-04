import { takeEvery, put, call } from 'redux-saga/effects';
import * as actionTypes from '../constants';
import api from '../../api/api';
import { registrationSuccessed, registrationFailed } from '../actions';

function* registrationSaga({ payload }) {
  console.log(payload);
  try {
    const { data } = yield call(api.post, '/users/', payload);
    yield put(registrationSuccessed(data));
  } catch (error) {
    yield put(registrationFailed(error.message));
  }
}

export default function* recordSaga() {
  yield takeEvery(actionTypes.REGISTRATION_REQUESTED, registrationSaga);
}
