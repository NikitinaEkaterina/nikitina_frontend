import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import * as actionTypes from '../constants';
import { getUserSuccessed, getUserFailed, getUserNewsRequested } from '../actions';

function* getUserSaga({ payload }) {
  try {
    const { data } = yield call(api.get, `users/${payload}`);
    yield put(getUserSuccessed(data));
    yield put(getUserNewsRequested(payload));
  } catch (error) {
    yield put(getUserFailed(error.message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.GET_USER_REQUESTED, getUserSaga);
}
