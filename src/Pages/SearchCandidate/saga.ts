import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { searchCandidate } from '../../service/candidate';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* candidateSearch(action: any) {
  const { email } = action.payload;
  try {
    if (email) {
      const response: ResponseGenerator = yield call(
        searchCandidate,
        email,
      );
      yield put(Actions.searchCandidateSuccess(response.data));
    }
  } catch (error) {
    yield put(Actions.searchCandidateFailure(error && error.response.data.message));
  }
}

export default function* authSaga() {
  yield takeLatest(ActionTypes.SIGNUP_PROGRESS, candidateSearch);
}
