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

function* doApplicationReject(action: any) {
  const { applicationId } = action.payload;
  try {
    if (applicationId) {
      const response: ResponseGenerator = yield call(
        ApplicationSearch.doApplicationReject,
        applicationId,
      );
      yield put(Actions.applicationRejectSuccess(response.data));
    }
  } catch (error) {
    yield put(
      Actions.applicationRejectFailure(error && error.response.data.message),
    );
  }
}
export default function* rejectedApplicationsSaga() {
  yield takeLatest(
    ActionTypes.REJECTED_APPLICATIONS_PROGRESS,
    rejectedApplications,
  );
  yield takeLatest(
    ActionTypes.APPLICATION_REJECT_PROGRESS,
    doApplicationReject,
  );
}
