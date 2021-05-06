import { put, takeLatest, call } from "redux-saga/effects";
import { ActionTypes, Actions } from "./actions";
import { JobSearch } from "../../service/index";
function* searchJobById(action: any) {
  const { id } = action.payload;
  try {
    const res = yield call(JobSearch.jobSearchById, id);
    if (res) {
      yield put(Actions.jobByIdSuccess(res));
    } else {
      yield put(Actions.jobByIdFailure("Data Not Found"));
    }
  } catch (error) {
    yield put(Actions.jobByIdFailure(error));
  }
}

export default function* jobSearchSaga() {
  yield takeLatest(ActionTypes.JOB_BY_ID_PROGRESS, searchJobById);
}
