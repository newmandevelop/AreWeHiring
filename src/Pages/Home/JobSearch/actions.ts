export enum ActionTypes {
  JOB_SEARCH_PROGRESS = 'auth/JOB_SEARCH_PROGRESS',
  JOB_SEARCH_SUCCESS = 'auth/JOB_SEARCH_SUCCESS',
  JOB_SEARCH_FAILURE = 'auth/JOB_SEARCH_FAILURE',
}
export interface JobSearchProgress {
  type: ActionTypes.JOB_SEARCH_PROGRESS;
  payload: any;
}

export interface JobSearchSuccess {
  type: ActionTypes.JOB_SEARCH_SUCCESS;
  payload: any;
}

export interface JobSearchFailure {
  type: ActionTypes.JOB_SEARCH_FAILURE;
  payload: any;
}

function jobSearchProgress(payload: any): JobSearchProgress {
  return {
    type: ActionTypes.JOB_SEARCH_PROGRESS,
    payload,
  };
}

function jobSearchSuccess(payload: any): JobSearchSuccess {
  return {
    type: ActionTypes.JOB_SEARCH_SUCCESS,
    payload,
  };
}

function jobSearchFailure(payload: any): JobSearchFailure {
  return {
    type: ActionTypes.JOB_SEARCH_FAILURE,
    payload,
  };
}

export type Action = JobSearchProgress | JobSearchFailure | JobSearchSuccess;

export const Actions = {
  jobSearchProgress,
  jobSearchSuccess,
  jobSearchFailure,
};
