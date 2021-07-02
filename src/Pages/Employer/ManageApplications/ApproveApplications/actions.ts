export enum ActionTypes {
  APPROVED_APPLICATIONS_PROGRESS = 'APPROVED_APPLICATIONS_PROGRESS',
  APPROVED_APPLICATIONS_SUCCESS = 'APPROVED_APPLICATIONS_SUCCESS',
  APPROVED_APPLICATIONS_FAILURE = 'APPROVED_APPLICATIONS_FAILURE',
  APPLICATION_APPROVE_PROGRESS = 'APPLICATION_APPROVE_PROGRESS',
  APPLICATION_APPROVE_SUCCESS = 'APPLICATION_APPROVE_SUCCESS',
  APPLICATION_APPROVE_FAILURE = 'APPLICATION_APPROVE_FAILURE'
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

export interface ApplicationApproveProgress {
  type: ActionTypes.APPLICATION_APPROVE_PROGRESS;
  payload: any;
}

export interface ApplicationApproveSuccess {
  type: ActionTypes.APPLICATION_APPROVE_SUCCESS;
  payload: any;
}


export interface ApplicationApproveFailure {
  type: ActionTypes.APPLICATION_APPROVE_FAILURE,
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

function applicationApproveProgress (payload: any): ApplicationApproveProgress {
  return {
    type: ActionTypes.APPLICATION_APPROVE_PROGRESS,
    payload
  }
}

function applicationApproveSuccess (payload: any): ApplicationApproveSuccess {
  return {
    type: ActionTypes.APPLICATION_APPROVE_SUCCESS,
    payload
  }
}

function applicationApproveFailure (payload: any): ApplicationApproveFailure {
  return {
    type: ActionTypes.APPLICATION_APPROVE_FAILURE,
    payload
  }
}

export type Action =
  | ApprovedApplicationsProgress
  | ApprovedApplicationsFailure
  | ApprovedApplicationsSuccess
  | ApplicationApproveProgress
  | ApplicationApproveSuccess
  | ApplicationApproveFailure

export const Actions = {
  approvedApplicationsProgress,
  approvedApplicationsSuccess,
  approvedApplicationsFailure,
  applicationApproveProgress,
  applicationApproveSuccess,
  applicationApproveFailure
};
