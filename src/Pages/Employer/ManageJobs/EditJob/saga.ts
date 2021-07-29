import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { Job } from '../../../../service/index';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* editJob(action: any) {
  const { data } = action.payload;
  try {
    const response: ResponseGenerator = yield call(Job.editJob, data);
    console.log(response);
    if (response) {
      yield put(Actions.editJobSuccess(data));
    } else {
      yield put(Actions.editJobFailure('Data Not Found'));
    }
  } catch (error) {
    console.log(error.response.data);
    yield put(Actions.editJobFailure(error.response.data.message));
  }
}

export default function* addJobSaga() {
  yield takeLatest(ActionTypes.EDIT_JOB_PROGRESS, editJob);
}
