export enum ActionTypes {
  JOB_BY_ID_PROGRESS = "auth/JOB_BY_ID_PROGRESS",
  JOB_BY_ID_SUCCESS = "auth/JOB_BY_ID_SUCCESS",
  JOB_BY_ID_FAILURE = "auth/JOB_BY_ID_FAILURE",
}

export interface JobByIdProgress {
  type: ActionTypes.JOB_BY_ID_PROGRESS;
  payload: any;
}

export interface JobByIdSuccess {
  type: ActionTypes.JOB_BY_ID_SUCCESS;
  payload: any;
}

export interface JobByIdFailure {
  type: ActionTypes.JOB_BY_ID_FAILURE;
  payload: any;
}

function jobByIdProgress(payload: any): JobByIdProgress {
  return {
    type: ActionTypes.JOB_BY_ID_PROGRESS,
    payload,
  };
}
function jobByIdSuccess(payload: any): JobByIdSuccess {
  return {
    type: ActionTypes.JOB_BY_ID_SUCCESS,
    payload,
  };
}

function jobByIdFailure(payload: any): JobByIdFailure {
  return {
    type: ActionTypes.JOB_BY_ID_FAILURE,
    payload,
  };
}

export type Action = JobByIdProgress | JobByIdFailure | JobByIdSuccess;

export const Actions = {
  jobByIdProgress,
  jobByIdSuccess,
  jobByIdFailure,
};
