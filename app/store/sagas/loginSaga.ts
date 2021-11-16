// import loginUser from '../../services/loginUser';
import * as loginActions from '../actions/loginActions';

import {Alert} from 'react-native';
/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import {put} from 'redux-saga/effects';

// import { delay } from 'redux-saga';

// Our worker Saga that logins the user
export default function* loginAsync() {
  yield put(loginActions.enableLoader());

  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  const response = {success: true, data: {id: 1}, message: 'Success'};

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data));
    yield put(loginActions.disableLoader());

    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Error', response.message);
    }, 200);
  }
}
