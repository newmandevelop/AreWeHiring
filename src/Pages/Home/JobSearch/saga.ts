import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { JobSearch } from '../../../service/index';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* findJob(action: any) {
  const { findJob } = action.payload;
  try {
    if (findJob) {
      const response: ResponseGenerator = yield call(
        JobSearch.findJob,
        findJob,
      );
      console.log(response.data);
      if (response.data && Object.values(response.data).length > 0)
        yield put(Actions.jobSearchSuccess(response.data));
      else {
        yield put(Actions.jobSearchFailure('Data Not Found'));
      }
    }
  } catch (error) {
    yield put(Actions.jobSearchFailure(error && error.response.data.message));
  }
}

export default function* findJobSaga() {
  yield takeLatest(ActionTypes.JOB_SEARCH_PROGRESS, findJob);
}
