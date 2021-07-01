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
function* archivedApplications(action: any) {
  const { userId } = action.payload;
  try {
    if (userId) {
      const response: ResponseGenerator = yield call(
        ApplicationSearch.archivedApplications,
        userId,
      );
      yield put(Actions.archivedApplicationsSuccess(response.data));
    }
  } catch (error) {
    yield put(
      Actions.archivedApplicationsFailure(error && error.response.data.message),
    );
  }
}
export default function* archivedApplicationsSaga() {
  yield takeLatest(ActionTypes.ARCHIVED_APPLICATIONS_PROGRESS, archivedApplications);
}
