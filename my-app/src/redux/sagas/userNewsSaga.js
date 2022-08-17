import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import * as actionTypes from '../constants';
import { getUserNewsSuccessed, getUserNewsFailed } from '../actions';

function* getUserNewsSaga({ payload }) {
  try {
    const { data } = yield call(api.get, `news/?author=${payload}`);
    yield put(getUserNewsSuccessed(data));
  } catch (error) {
    yield put(getUserNewsFailed(error.message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.GET_USER_NEWS_REQUESTED, getUserNewsSaga);
}
