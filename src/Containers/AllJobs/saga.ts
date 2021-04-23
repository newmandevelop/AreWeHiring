import { put, takeLatest, call } from "redux-saga/effects";
import { ActionTypes, Actions } from "./actions";
import { JobSearch } from "../../service/index";
function* allJobs(action: any) {
  try {
    const res = yield call(JobSearch.allJobsSearch);
    if (res) {
      yield put(Actions.allJobsSuccess(res));
    } else {
      yield put(Actions.allJobsFailure("Data Not Found"));
    }
  } catch (error) {
    yield put(Actions.allJobsFailure(error));
  }
}

export default function* allJobsSaga() {
  yield takeLatest(ActionTypes.ALL_JOBS_PROGRESS, allJobs);
}
