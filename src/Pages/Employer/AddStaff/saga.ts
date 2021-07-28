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

function* addStaff(action: any) {
  const { data } = action.payload;
  try {
    const response: ResponseGenerator = yield call(Users.addStaff, data);
    if (response) {
      yield put(Actions.addStaffSuccess());
    }
  } catch (error) {
    yield put(Actions.addStaffFailure(error.response.data.message));
  }
}

export default function* staffSaga() {
  yield takeLatest(ActionTypes.ADD_STAFF_PROGRESS, addStaff);
}
