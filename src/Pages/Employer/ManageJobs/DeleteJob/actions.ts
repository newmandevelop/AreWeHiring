export enum ActionTypes {
  JOBS_IN_DELETE_PROGRESS = 'JOBS_IN_DELETE_PROGRESS',
  JOBS_IN_DELETE_SUCCESS = 'JOBS_IN_DELETE_SUCCESS',
  JOBS_IN_DELETE_FAILURE = 'JOBS_IN_DELETE_FAILURE',
  DELETE_JOB_PROGRESS = 'DELETE_JOB_PROGRESS',
  DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS',
  DELETE_JOB_FAILURE = 'DELETE_JOB_FAILURE',
}
export interface JobsInDeleteProgress {
  type: ActionTypes.JOBS_IN_DELETE_PROGRESS;
  payload: any;
}

export interface JobsInDeleteSuccess {
  type: ActionTypes.JOBS_IN_DELETE_SUCCESS;
  payload: any;
}

export interface JobsInDeleteFailure {
  type: ActionTypes.JOBS_IN_DELETE_FAILURE;
  payload: any;
}

function jobsInDeleteProgress(payload: any): JobsInDeleteProgress {
  return {
    type: ActionTypes.JOBS_IN_DELETE_PROGRESS,
    payload,
  };
}

function jobsInDeleteSuccess(payload: any): JobsInDeleteSuccess {
  return {
    type: ActionTypes.JOBS_IN_DELETE_SUCCESS,
    payload,
  };
}

function jobsInDeleteFailure(payload: any): JobsInDeleteFailure {
  return {
    type: ActionTypes.JOBS_IN_DELETE_FAILURE,
    payload,
  };
}

export interface DeleteJobProgress {
  type: ActionTypes.DELETE_JOB_PROGRESS;
  payload: any;
}

export interface DeleteJobSuccess {
  type: ActionTypes.DELETE_JOB_SUCCESS;
  payload: any;
}

export interface DeleteJobFailure {
  type: ActionTypes.DELETE_JOB_FAILURE;
  payload: any;
}

function deleteJobProgress(payload: any): DeleteJobProgress {
  return {
    type: ActionTypes.DELETE_JOB_PROGRESS,
    payload,
  };
}

function deleteJobSuccess(payload: any): DeleteJobSuccess {
  return {
    type: ActionTypes.DELETE_JOB_SUCCESS,
    payload,
  };
}

function deleteJobFailure(payload: any): DeleteJobFailure {
  return {
    type: ActionTypes.DELETE_JOB_FAILURE,
    payload,
  };
}

export type Action =
  | JobsInDeleteProgress
  | JobsInDeleteFailure
  | JobsInDeleteSuccess
  | DeleteJobProgress
  | DeleteJobFailure
  | DeleteJobSuccess;

export const Actions = {
  jobsInDeleteProgress,
  jobsInDeleteSuccess,
  jobsInDeleteFailure,
  deleteJobProgress,
  deleteJobSuccess,
  deleteJobFailure,
};
