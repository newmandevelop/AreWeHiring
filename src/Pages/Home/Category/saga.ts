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
function* jobCategories() {
  try {
    const response: ResponseGenerator = yield call(Job.popularCategories);
    if (response) {
      yield put(Actions.jobCategoriesSuccess(response));
    } else {
      yield put(Actions.jobCategoriesFailure('Data Not Found'));
    }
  } catch (error) {
    yield put(Actions.jobCategoriesFailure(error));
  }
}

export default function* jobCategoriesSaga() {
  yield takeLatest(ActionTypes.JOB_CATEGORIES_PROGRESS, jobCategories);
}
