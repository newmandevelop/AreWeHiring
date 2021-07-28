import { put, takeLatest, call } from '@redux-saga/core/effects';
import { ActionTypes, Actions } from './actions';
import { Users } from '../../../service/index';
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* searchUserByCompany(action: any) {
  try {
    const response: ResponseGenerator = yield call(
      Users.searchUserByCompany,
      action.payload.data,
    );
    if (response) {
      yield put(Actions.searchUserSuccess(response));
    }
  } catch (error) {
    yield put(Actions.searchUserFailure(error.response.data.message));
  }
}

export default function* searchStaffSaga() {
  yield takeLatest(
    ActionTypes.SEARCH_USER_BY_COMPANY_PROGRESS,
    searchUserByCompany,
  );
}
