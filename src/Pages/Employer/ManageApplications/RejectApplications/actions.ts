export enum ActionTypes {
  REJECTED_APPLICATIONS_PROGRESS = 'REJECTED_APPLICATIONS_PROGRESS',
  REJECTED_APPLICATIONS_SUCCESS = 'REJECTED_APPLICATIONS_SUCCESS',
  REJECTED_APPLICATIONS_FAILURE = 'REJECTED_APPLICATIONS_FAILURE',
}
export interface RejectedApplicationsProgress {
  type: ActionTypes.REJECTED_APPLICATIONS_PROGRESS;
  payload: any;
}

export interface RejectedApplicationsSuccess {
  type: ActionTypes.REJECTED_APPLICATIONS_SUCCESS;
  payload: any;
}

export interface RejectedApplicationsFailure {
  type: ActionTypes.REJECTED_APPLICATIONS_FAILURE;
  payload: any;
}

function rejectedApplicationsProgress(payload: any): RejectedApplicationsProgress {
  return {
    type: ActionTypes.REJECTED_APPLICATIONS_PROGRESS,
    payload,
  };
}

function rejectedApplicationsSuccess(payload: any): RejectedApplicationsSuccess {
  return {
    type: ActionTypes.REJECTED_APPLICATIONS_SUCCESS,
    payload,
  };
}

function rejectedApplicationsFailure(payload: any): RejectedApplicationsFailure {
  return {
    type: ActionTypes.REJECTED_APPLICATIONS_FAILURE,
    payload,
  };
}

export type Action =
  | RejectedApplicationsProgress
  | RejectedApplicationsFailure
  | RejectedApplicationsSuccess

export const Actions = {
  rejectedApplicationsProgress,
  rejectedApplicationsSuccess,
  rejectedApplicationsFailure,
};
