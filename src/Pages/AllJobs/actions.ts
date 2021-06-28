export enum ActionTypes {
  ALL_JOBS_PROGRESS = "auth/ALL_JOBS_PROGRESS",
  ALL_JOBS_SUCCESS = "auth/ALL_JOBS_SUCCESS",
  ALL_JOBS_FAILURE = "auth/ALL_JOBS_FAILURE",
}

export interface AllJobsProgress {
  type: ActionTypes.ALL_JOBS_PROGRESS;
  payload: any
}

export interface AllJobsSuccess {
  type: ActionTypes.ALL_JOBS_SUCCESS;
  payload: any;
}

export interface AllJobsFailure {
  type: ActionTypes.ALL_JOBS_FAILURE;
  payload: any;
}

function allJobsProgress(payload: any): AllJobsProgress {
  return {
    type: ActionTypes.ALL_JOBS_PROGRESS,
    payload
  };
}
function allJobsSuccess(payload: any): AllJobsSuccess {
  return {
    type: ActionTypes.ALL_JOBS_SUCCESS,
    payload,
  };
}

function allJobsFailure(payload: any): AllJobsFailure {
  return {
    type: ActionTypes.ALL_JOBS_FAILURE,
    payload,
  };
}

export type Action = AllJobsProgress | AllJobsFailure | AllJobsSuccess;

export const Actions = {
  allJobsProgress,
  allJobsSuccess,
  allJobsFailure,
};
