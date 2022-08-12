import { takeEvery, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import * as actionTypes from '../constants';
import { getUserSuccessed, getUserFailed } from '../actions';

function* getUserSaga({ payload }) {
  try {
    const { data } = yield call(api.get, `users/${payload}`);
    yield put(getUserSuccessed(data));
  } catch (error) {
    yield put(getUserFailed(error.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.GET_USER_REQUESTED, getUserSaga);
}
