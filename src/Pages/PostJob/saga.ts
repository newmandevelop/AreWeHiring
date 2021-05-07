import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { Job } from '../../service/index';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* addJob(action: any) {
  const { data } = action.payload;
  try {
    const response: ResponseGenerator = yield call(Job.addJob, data);
    console.log(response);
    if (response) {
      yield put(Actions.addJobSuccess());
    } else {
      yield put(Actions.addJobFailure('Data Not Found'));
    }
  } catch (error) {
    console.log(error);
    yield put(Actions.addJobFailure(error.message));
  }
}

export default function* addJobSaga() {
  yield takeLatest(ActionTypes.ADD_JOB_PROGRESS, addJob);
}
