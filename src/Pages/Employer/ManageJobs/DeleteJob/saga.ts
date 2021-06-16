import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, Actions } from './actions';
import { JobSearch } from '../../../../service/index';
import { notification } from 'antd';
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* jobsInDelete(action: any) {
  const { userId } = action.payload;
  try {
    if (userId) {
      const response: ResponseGenerator = yield call(
        JobSearch.jobsInDelete,
        userId,
      );
      yield put(Actions.jobsInDeleteSuccess(response.data));
    }
  } catch (error) {
    yield put(
      Actions.jobsInDeleteFailure(error && error.response.data.message),
    );
  }
}

function* DeleteJob(action: any) {
  const { userId, jobId } = action.payload;
  try {
    if (userId && jobId) {
      const response: ResponseGenerator = yield call(
        JobSearch.deleteJob,
        userId,
        jobId,
      );
      notification.success({
        type: 'success',
        message: 'Job Deleted Successfully',
        closeIcon: true,
        placement: 'topRight',
      });
      yield put(Actions.deleteJobSuccess(response.data));
    }
  } catch (error) {
    notification.error({
      type: 'error',
      message: error.response.data.message,
      closeIcon: true,
      placement: 'topRight',
    });
    yield put(Actions.deleteJobFailure(error && error.response.data.message));
  }
}

export default function* deleteJobSaga() {
  yield takeLatest(ActionTypes.JOBS_IN_DELETE_PROGRESS, jobsInDelete);
  yield takeLatest(ActionTypes.DELETE_JOB_PROGRESS, DeleteJob);
}
