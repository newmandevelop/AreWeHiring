export enum ActionTypes {
  JOBS_IN_DRAFT_PROGRESS = 'JOBS_IN_DRAFT_PROGRESS',
  JOBS_IN_DRAFT_SUCCESS = 'JOBS_IN_DRAFT_SUCCESS',
  JOBS_IN_DRAFT_FAILURE = 'JOBS_IN_DRAFT_FAILURE',
}
export interface JobsInDraftProgress {
  type: ActionTypes.JOBS_IN_DRAFT_PROGRESS;
  payload: any;
}

export interface JobsInDraftSuccess {
  type: ActionTypes.JOBS_IN_DRAFT_SUCCESS;
  payload: any;
}

export interface JobsInDraftFailure {
  type: ActionTypes.JOBS_IN_DRAFT_FAILURE;
  payload: any;
}

function jobsInDraftProgress(payload: any): JobsInDraftProgress {
  return {
    type: ActionTypes.JOBS_IN_DRAFT_PROGRESS,
    payload,
  };
}

function jobsInDraftSuccess(payload: any): JobsInDraftSuccess {
  return {
    type: ActionTypes.JOBS_IN_DRAFT_SUCCESS,
    payload,
  };
}

function jobsInDraftFailure(payload: any): JobsInDraftFailure {
  return {
    type: ActionTypes.JOBS_IN_DRAFT_FAILURE,
    payload,
  };
}

export type Action =
  | JobsInDraftProgress
  | JobsInDraftFailure
  | JobsInDraftSuccess;

export const Actions = {
  jobsInDraftProgress,
  jobsInDraftSuccess,
  jobsInDraftFailure,
};
