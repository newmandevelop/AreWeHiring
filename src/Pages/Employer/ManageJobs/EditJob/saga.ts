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
  const { jobId } = action.payload;
  try {
    const response: ResponseGenerator = yield call(Job.editJob, jobId);
    if (response) {
      yield put(Actions.editJobSuccess(response.data));
    } else {
      yield put(Actions.editJobFailure('Data Not Found'));
    }
  } catch (error) {
    console.log(error.response.data);
    yield put(Actions.editJobFailure(error.response.data.message));
  }
}

function* updateJob(action: any) {
  const { jobId } = action.payload;
  const { data } = action.payload;
  try {
    const response: ResponseGenerator = yield call(Job.updateJob, jobId, data);
    if (response) {
      yield put(Actions.updateJobSuccess());
    }
  } catch (error) {
    console.log(error.response.data);
    yield put(Actions.updateJobFailure(error.response.data.message));
  }
}
export default function* editJobSaga() {
  yield takeLatest(ActionTypes.EDIT_JOB_PROGRESS, editJob);
  yield takeLatest(ActionTypes.UPDATE_JOB_PROGRESS, updateJob);
}
