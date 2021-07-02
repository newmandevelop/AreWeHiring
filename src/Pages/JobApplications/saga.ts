import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { ApplicationSearch } from '../../service/index';
import { notification } from 'antd';
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* fetchApplications(action: any) {
  const { userId } = action.payload;
  try {
    if (userId) {
      const response: ResponseGenerator = yield call(
        ApplicationSearch.applicationsPostedByUser,
        userId,
      );
      yield put(Actions.fetchApplicationsSuccess(response.data));
    }
  } catch (error) {
    yield put(
      Actions.fetchApplicationsFailure(error && error.response.data.message),
    );
  }
}
export default function* fetchApplicationsSaga() {
  yield takeLatest(ActionTypes.FETCH_APPLICATIONS_PROGRESS, fetchApplications);
}
