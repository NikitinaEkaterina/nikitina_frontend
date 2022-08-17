import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import newsSaga from './newsSaga';
import loginSaga from './loginSaga';
import userSaga from './userSaga';
import userNewsSaga from './userNewsSaga';

export default function* rootSaga() {
  yield all([
    newsSaga(),
    authSaga(),
    loginSaga(),
    userSaga(),
    userNewsSaga(),
  ]);
}
