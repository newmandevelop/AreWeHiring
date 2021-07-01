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
function* draftApplications(action: any) {
  const { userId } = action.payload;
  try {
    if (userId) {
      const response: ResponseGenerator = yield call(
        ApplicationSearch.applicationsInDraft,
        userId,
      );
      yield put(Actions.draftApplicationsSuccess(response.data));
    }
  } catch (error) {
    yield put(
      Actions.draftApplicationsFailure(error && error.response.data.message),
    );
  }
}
export default function* draftApplicationsSaga() {
  yield takeLatest(ActionTypes.DRAFT_APPLICATIONS_PROGRESS, draftApplications);
}
