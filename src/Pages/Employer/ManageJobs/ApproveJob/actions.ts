export enum ActionTypes {
  JOBS_IN_APPROVE_PROGRESS = 'JOBS_IN_APPROVE_PROGRESS',
  JOBS_IN_APPROVE_SUCCESS = 'JOBS_IN_APPROVE_SUCCESS',
  JOBS_IN_APPROVE_FAILURE = 'JOBS_IN_APPROVE_FAILURE',
  APPROVE_JOB_PROGRESS = 'APPROVE_JOB_PROGRESS',
  APPROVE_JOB_SUCCESS = 'APPROVE_JOB_SUCCESS',
  APPROVE_JOB_FAILURE = 'APPROVE_JOB_FAILURE',
}
export interface JobsInApproveProgress {
  type: ActionTypes.JOBS_IN_APPROVE_PROGRESS;
  payload: any;
}

export interface JobsInApproveSuccess {
  type: ActionTypes.JOBS_IN_APPROVE_SUCCESS;
  payload: any;
}

export interface JobsInApproveFailure {
  type: ActionTypes.JOBS_IN_APPROVE_FAILURE;
  payload: any;
}

function jobsInApproveProgress(payload: any): JobsInApproveProgress {
  return {
    type: ActionTypes.JOBS_IN_APPROVE_PROGRESS,
    payload,
  };
}

function jobsInApproveSuccess(payload: any): JobsInApproveSuccess {
  return {
    type: ActionTypes.JOBS_IN_APPROVE_SUCCESS,
    payload,
  };
}

function jobsInApproveFailure(payload: any): JobsInApproveFailure {
  return {
    type: ActionTypes.JOBS_IN_APPROVE_FAILURE,
    payload,
  };
}

export interface ApproveJobProgress {
  type: ActionTypes.APPROVE_JOB_PROGRESS;
  payload: any;
}

export interface ApproveJobSuccess {
  type: ActionTypes.APPROVE_JOB_SUCCESS;
  payload: any;
}

export interface ApproveJobFailure {
  type: ActionTypes.APPROVE_JOB_FAILURE;
  payload: any;
}

function approveJobProgress(payload: any): ApproveJobProgress {
  return {
    type: ActionTypes.APPROVE_JOB_PROGRESS,
    payload,
  };
}

function approveJobSuccess(payload: any): ApproveJobSuccess {
  return {
    type: ActionTypes.APPROVE_JOB_SUCCESS,
    payload,
  };
}

function approveJobFailure(payload: any): ApproveJobFailure {
  return {
    type: ActionTypes.APPROVE_JOB_FAILURE,
    payload,
  };
}

export type Action =
  | JobsInApproveProgress
  | JobsInApproveFailure
  | JobsInApproveSuccess
  | ApproveJobProgress
  | ApproveJobFailure
  | ApproveJobSuccess;

export const Actions = {
  jobsInApproveProgress,
  jobsInApproveSuccess,
  jobsInApproveFailure,
  approveJobProgress,
  approveJobSuccess,
  approveJobFailure,
};
