import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { Candidate } from '../../service/index';

function* applyJob(action: any) {
  const { data } = action.payload;

  try {
    const response = yield call(Candidate.applyJob, data);
    console.log(response);
    if (response) {
      yield put(Actions.applyJobSuccess());
    } else {
      yield put(Actions.applyJobFailure('Data Not Found'));
    }
  } catch (error) {
    console.log(error);
    yield put(Actions.applyJobFailure(error.message));
  }
}

export default function* applyJobSaga() {
  yield takeLatest(ActionTypes.APPLY_JOB_PROGRESS, applyJob);
}
