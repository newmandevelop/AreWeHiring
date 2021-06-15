import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { Candidate } from '../../service/index';
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* addCandidate(action: any) {
  const { data } = action.payload;
  console.log('payload--------', data);

  try {
    const response: ResponseGenerator = yield call(
      Candidate.addCandidate,
      data,
    );
    console.log(response);
    if (response) {
      yield put(Actions.addCandidateSuccess());
    } else {
      yield put(Actions.addCandidateFailure('Data Not Found'));
    }
  } catch (error) {
    console.log(error);
    yield put(Actions.addCandidateFailure(error.message));
  }
}

function* getCandidate(action: any) {
  const { email } = action.payload;
  try {
    const response: ResponseGenerator = yield call(
      Candidate.getCandidate,
      email,
    );
    console.log(response);
    if (response) {
      yield put(Actions.getCandidateSuccess(response.data));
    } else {
      yield put(Actions.getCandidateFailure('Data Not Found'));
    }
  } catch (error) {
    console.log(error);
    yield put(Actions.getCandidateFailure(error.message));
  }
}

export function* addCandidateSaga() {
  yield takeLatest(ActionTypes.ADD_CANDIDATE_PROGRESS, addCandidate);
}

export function* getCandidateSaga() {
  yield takeLatest(ActionTypes.GET_CANDIDATE_PROGRESS, getCandidate);
}
