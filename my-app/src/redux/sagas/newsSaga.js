import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import * as actionTypes from '../constants';
import { getNewsReceived, getNewsFailed } from '../actions';

function* getPostSaga() {
  try {
    const { data } = yield call(api.get, '/news/');
    yield put(getNewsReceived(data));
  } catch (error) {
    yield put(getNewsFailed(error.message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.NEWS_REQUESTED, getPostSaga);
}
