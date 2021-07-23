import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { Authentication } from '../../service/index';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* signUp(action: any) {
  const { signUp } = action.payload;
  try {
    if (signUp) {
      const response: ResponseGenerator = yield call(
        Authentication.signUp,
        signUp,
      );
      yield put(Actions.signUpSuccess(response.data));
    }
  } catch (error) {
    yield put(Actions.signUpFailure(error && error.response.data.message));
  }
}

function* login(action: any) {
  const { login } = action.payload;
  login.email = login.email.replace(/ /g, '');
  try {
    if (login) {
      const response: ResponseGenerator = yield call(
        Authentication.login,
        login,
      );
      console.log('login responce', response);
      if (response) yield put(Actions.loginSuccess(response.data));
    }
  } catch (error) {
    console.log('err', error);
    yield put(Actions.loginFailure(error && error.response.data.message));
  }
}

function* forgetPassword(action: any) {
  const { email } = action.payload.email;
  try {
    if (email) {
      const response: ResponseGenerator = yield call(
        Authentication.forgetPassword,
        email,
      );
      if (response) yield put(Actions.forgetPasswordSuccess());
    }
  } catch (error) {
    console.log('err', error);
    yield put(
      Actions.forgetPasswordFailure(error && error.response.data.message),
    );
  }
}

export default function* authSaga() {
  yield takeLatest(ActionTypes.SIGNUP_PROGRESS, signUp);
  yield takeLatest(ActionTypes.LOGIN_PROGRESS, login);
  yield takeLatest(ActionTypes.FORGET_PASSWORD_PROGRESS, forgetPassword);
  //   yield takeLatest(ActionTypes.FORGET_PASSWORD_PROGRESS, forgetPassword)
}
