import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { Company } from '../../service/index';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* addCompany(action: any) {
  const { data } = action.payload;
  try {
    const response: ResponseGenerator = yield call(Company.addCompany, data);
    console.log(response);
    if (response) {
      yield put(Actions.addCompanySuccess());
    } else {
      yield put(Actions.addCompanyFailure('Data Not Found'));
    }
  } catch (error) {
    console.log(error);
    yield put(Actions.addCompanyFailure(error.response.data.message));
  }
}

export default function* addCompanySaga() {
  yield takeLatest(ActionTypes.ADD_COMPANY_PROGRESS, addCompany);
}