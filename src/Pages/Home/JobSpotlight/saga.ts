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
function* jobSpotlight() {
  try {
    const response: ResponseGenerator = yield call(Job.jobSpotlight);
    if (response) {
      yield put(Actions.jobSpotlightSuccess(response));
    } else {
      yield put(Actions.jobSpotlightFailure('Data Not Found'));
    }
  } catch (error) {
    yield put(Actions.jobSpotlightFailure(error));
  }
}

export default function* jobSpotlightSaga() {
  yield takeLatest(ActionTypes.JOB_SPOTLIGHT_PROGRESS, jobSpotlight);
}
