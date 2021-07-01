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
function* deletedApplications(action: any) {
  const { userId } = action.payload;
  try {
    if (userId) {
      const response: ResponseGenerator = yield call(
        ApplicationSearch.deletedApplications,
        userId,
      );
      yield put(Actions.deletedApplicationsSuccess(response.data));
    }
  } catch (error) {
    yield put(
      Actions.deletedApplicationsFailure(error && error.response.data.message),
    );
  }
}
export default function* deletedApplicationsSaga() {
  yield takeLatest(ActionTypes.DELETED_APPLICATIONS_PROGRESS, deletedApplications);
}
