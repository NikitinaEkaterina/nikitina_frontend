import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import * as actionTypes from '../constants';
import { addNewsSuccessed, addNewsFailed } from '../actions';

function* addNewsSaga({ payload }) {
  try {
    const { data } = yield call(api.post, '/news/', payload);
    yield put(addNewsSuccessed(data));
  } catch (error) {
    yield put(addNewsFailed(error.message));
  }
}

export default function* addingNewsSaga() {
  yield takeLatest(actionTypes.ADD_NEWS_REQUESTED, addNewsSaga);
}
