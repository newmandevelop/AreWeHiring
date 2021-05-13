import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { CompanySearch, JobSearch } from '../../service/index';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* allCompanies() {
  try {
    const response: ResponseGenerator = yield call(CompanySearch.allCompaniesSearch);
    if (response) {
      yield put(Actions.allCompaniesSuccess(response));
    } else {
      yield put(Actions.allCompaniesFailure('Companies Not Found'));
    }
  } catch (error) {
    yield put(Actions.allCompaniesFailure(error));
  }
}

export default function* allCompaniesSaga() {
  yield takeLatest(ActionTypes.ALL_COMPANIES_PROGRESS, allCompanies);
}
