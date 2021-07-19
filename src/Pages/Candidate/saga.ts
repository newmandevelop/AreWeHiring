import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { Candidate } from '../../service/index';
import { ApplicationSearch } from '../../service/index';
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

function* getApplications(action: any) {
  const { email } = action.payload;

  try {
    const response: ResponseGenerator = yield call(
      ApplicationSearch.applicationsSearchByEmail,
      email,
    );
    if (response) {
      yield put(Actions.getCandidateApplicationsSuccess(response.data));
    } else {
      yield put(Actions.addCandidateFailure('Data Not Found'));
    }
  } catch (error) {
    yield put(Actions.addCandidateFailure(error.response.data.message));
  }
}

function* getNotifications() {
  try {
    const response: ResponseGenerator = yield call(Candidate.getNotifications);
    console.log('noti res', response);
    if (response) {
      yield put(Actions.getCandidateApplicationsSuccess(response));
    } else {
      yield put(Actions.getCandidateApplicationsFailure('Data Not Found'));
    }
  } catch (error) {
    console.log(error);
    yield put(Actions.getCandidateApplicationsFailure(error.message));
  }
}
export default function* CandidateSaga() {
  yield takeLatest(ActionTypes.ADD_CANDIDATE_PROGRESS, addCandidate);
  yield takeLatest(
    ActionTypes.GET_CANDIDATE_APPLICATIONS_PROGRESS,
    getApplications,
  );
  yield takeLatest(ActionTypes.GET_NOTIFICATIONS_PROGRESS, getNotifications);
}
