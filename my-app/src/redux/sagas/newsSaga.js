import { takeEvery, put, call } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import api from '../../api/api';
import { getNewsReceived, getNewsFailed } from '../actions';

function* getPostSaga() {
  try {
    const { data } = yield call(api.get, '/news/');
    yield put(getNewsReceived(data));
  } catch (error) {
    yield put(getNewsFailed(error));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.NEWS_REQUESTED, getPostSaga);
}
