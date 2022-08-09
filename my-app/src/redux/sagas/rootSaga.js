import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import newsSaga from './newsSaga';
import loginSaga from './loginSaga';

export default function* rootSaga() {
  yield all([
    newsSaga(),
    authSaga(),
    loginSaga(),
  ]);
}
