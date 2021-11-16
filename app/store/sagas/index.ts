import * as types from '../actions/types';

/**
 *  Redux saga class init
 */
import {all, takeEvery} from 'redux-saga/effects';

import loginSaga from './loginSaga';

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
}
