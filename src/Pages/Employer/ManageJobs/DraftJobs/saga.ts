import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { JobSearch } from '../../../../service/index';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* jobsInDraft(action: any) {
  const { userId } = action.payload;

  try {
    if (userId) {
      const response: ResponseGenerator = yield call(
        JobSearch.jobsInDraft,
        userId,
      );
      yield put(Actions.jobsInDraftSuccess(response.data));
    }
  } catch (error) {
    yield put(Actions.jobsInDraftFailure(error && error.response.data.message));
  }
}

export default function* draftJobSaga() {
  yield takeLatest(ActionTypes.JOBS_IN_DRAFT_PROGRESS, jobsInDraft);
  // yield takeLatest(ActionTypes.LOGIN_PROGRESS, login);
}
