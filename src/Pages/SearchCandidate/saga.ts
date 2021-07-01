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
  try {
    if (action.payload.data) {
      const response: ResponseGenerator = yield call(
        searchCandidate,
        action.payload.data,
        action.payload.limit
      );
      response.status === 200 ?
      yield put(Actions.candidateSearchSuccess(response.data)) 
      : console.log("Responce error",response)
    }
  } catch (error) {
    yield put(Actions.candidateSearchFailure(error && error.response.data.message));
  }
}

export default function* searchCandidateSaga() {
  yield takeLatest(ActionTypes.CANDIDATE_SEARCH_PROGRESS, candidateSearch);
}
