import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { JobSearch } from '../../service/index';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  content?: any
}
function* allJobs(action: any) {
  const {limit} = action.payload
  try {
    const response: ResponseGenerator = yield call(JobSearch.allJobsSearch, limit);
    if (response) {
      yield put(Actions.allJobsSuccess(response.content));
    } else {
      yield put(Actions.allJobsFailure('Data Not Found'));
    }
  } catch (error) {
    yield put(Actions.allJobsFailure(error));
  }
}

export default function* allJobsSaga() {
  yield takeLatest(ActionTypes.ALL_JOBS_PROGRESS, allJobs);
}
