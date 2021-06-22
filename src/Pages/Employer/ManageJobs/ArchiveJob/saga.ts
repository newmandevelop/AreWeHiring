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
function* jobsInArchive(action: any) {
  const { userId } = action.payload;
  try {
    if (userId) {
      const response: ResponseGenerator = yield call(
        JobSearch.jobsInArchive,
        userId,
      );
      console.log(`response.data`, response.data);
      yield put(Actions.jobsInArchiveSuccess(response.data));
    }
  } catch (error) {
    yield put(
      Actions.jobsInArchiveFailure(error && error.response.data.message),
    );
  }
}

function* ArchiveJob(action: any) {
  const { userId, jobId } = action.payload;
  try {
    if (userId && jobId) {
      const response: ResponseGenerator = yield call(
        JobSearch.archiveJob,
        userId,
        jobId,
      );
      notification.success({
        type: 'success',
        message: 'Job Archived Successfully',
        closeIcon: true,
        placement: 'topRight',
      });
      yield put(Actions.archiveJobSuccess(response.data));
    }
  } catch (error) {
    notification.error({
      type: 'error',
      message: error.response.data.message,
      closeIcon: true,
      placement: 'topRight',
    });
    yield put(Actions.archiveJobFailure(error && error.response.data.message));
  }
}

export default function* archiveJobSaga() {
  yield takeLatest(ActionTypes.JOBS_IN_ARCHIVE_PROGRESS, jobsInArchive);
  yield takeLatest(ActionTypes.ARCHIVE_JOB_PROGRESS, ArchiveJob);
}
