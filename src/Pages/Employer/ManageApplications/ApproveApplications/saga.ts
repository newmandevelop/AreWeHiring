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
function* approvedApplications(action: any) {
  const { userId } = action.payload;
  try {
    if (userId) {
      const response: ResponseGenerator = yield call(
        ApplicationSearch.approvedApplications,
        userId,
      );
      yield put(Actions.approvedApplicationsSuccess(response.data));
    }
  } catch (error) {
    yield put(
      Actions.approvedApplicationsFailure(error && error.response.data.message),
    );
  }
}
export default function* approvedApplicationsSaga() {
  yield takeLatest(ActionTypes.APPROVED_APPLICATIONS_PROGRESS, approvedApplications);
}
