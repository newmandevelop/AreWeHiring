export enum ActionTypes {
  APPROVED_APPLICATIONS_PROGRESS = 'APPROVED_APPLICATIONS_PROGRESS',
  APPROVED_APPLICATIONS_SUCCESS = 'APPROVED_APPLICATIONS_SUCCESS',
  APPROVED_APPLICATIONS_FAILURE = 'APPROVED_APPLICATIONS_FAILURE',
}
export interface ApprovedApplicationsProgress {
  type: ActionTypes.APPROVED_APPLICATIONS_PROGRESS;
  payload: any;
}

export interface ApprovedApplicationsSuccess {
  type: ActionTypes.APPROVED_APPLICATIONS_SUCCESS;
  payload: any;
}

export interface ApprovedApplicationsFailure {
  type: ActionTypes.APPROVED_APPLICATIONS_FAILURE;
  payload: any;
}

function approvedApplicationsProgress(payload: any): ApprovedApplicationsProgress {
  return {
    type: ActionTypes.APPROVED_APPLICATIONS_PROGRESS,
    payload,
  };
}

function approvedApplicationsSuccess(payload: any): ApprovedApplicationsSuccess {
  return {
    type: ActionTypes.APPROVED_APPLICATIONS_SUCCESS,
    payload,
  };
}

function approvedApplicationsFailure(payload: any): ApprovedApplicationsFailure {
  return {
    type: ActionTypes.APPROVED_APPLICATIONS_FAILURE,
    payload,
  };
}

export type Action =
  | ApprovedApplicationsProgress
  | ApprovedApplicationsFailure
  | ApprovedApplicationsSuccess

export const Actions = {
  approvedApplicationsProgress,
  approvedApplicationsSuccess,
  approvedApplicationsFailure,
};
