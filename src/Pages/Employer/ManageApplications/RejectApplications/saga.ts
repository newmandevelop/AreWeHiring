import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { ApplicationSearch } from '../../../../service/index';
import { notification } from 'antd';
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* rejectedApplications(action: any) {
  const { userId } = action.payload;
  try {
    if (userId) {
      const response: ResponseGenerator = yield call(
        ApplicationSearch.rejectedApplications,
        userId,
      );
      yield put(Actions.rejectedApplicationsSuccess(response.data));
    }
  } catch (error) {
    yield put(
      Actions.rejectedApplicationsFailure(error && error.response.data.message),
    );
  }
}
export default function* rejectedApplicationsSaga() {
  yield takeLatest(ActionTypes.REJECTED_APPLICATIONS_PROGRESS, rejectedApplications);
}
