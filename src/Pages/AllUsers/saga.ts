import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { Users } from '../../service/index';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* allUsers() {
  try {
    const response: ResponseGenerator = yield call(Users.allUsersSearch);
    if (response) {
      yield put(Actions.allUsersSuccess(response));
    } else {
      yield put(Actions.allUsersFailure('Users Not Found'));
    }
  } catch (error) {
    yield put(Actions.allUsersFailure(error));
  }
}

export default function* allUSersSaga() {
  yield takeLatest(ActionTypes.ALL_USERS_PROGRESS, allUsers);
}
