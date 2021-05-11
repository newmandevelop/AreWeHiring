import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { Job } from '../../../service/index';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* recentJobs() {
  try {
    const response: ResponseGenerator = yield call(Job.recentJobsSearch);
    if (response) {
      yield put(Actions.recentJobsSuccess(response));
    } else {
      yield put(Actions.recentJobsFailure('Data Not Found'));
    }
  } catch (error) {
    yield put(Actions.recentJobsFailure(error));
  }
}

export default function* recentJobsSaga() {
  yield takeLatest(ActionTypes.RECENT_JOBS_PROGRESS, recentJobs);
}
