export enum ActionTypes {
  REJECTED_APPLICATIONS_PROGRESS = 'REJECTED_APPLICATIONS_PROGRESS',
  REJECTED_APPLICATIONS_SUCCESS = 'REJECTED_APPLICATIONS_SUCCESS',
  REJECTED_APPLICATIONS_FAILURE = 'REJECTED_APPLICATIONS_FAILURE',
  APPLICATION_REJECT_PROGRESS = 'APPLICATION_REJECT_PROGRESS',
  APPLICATION_REJECT_SUCCESS = 'APPLICATION_REJECT_SUCCESS',
  APPLICATION_REJECT_FAILURE = 'APPLICATION_REJECT_FAILURE'
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
export interface ApplicationRejectProgress {
  type: ActionTypes.APPLICATION_REJECT_PROGRESS;
  payload: any;
}

export interface ApplicationRejectSuccess {
  type: ActionTypes.APPLICATION_REJECT_SUCCESS;
  payload: any;
}


export interface ApplicationRejectFailure {
  type: ActionTypes.APPLICATION_REJECT_FAILURE,
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
function applicationRejectProgress (payload: any): ApplicationRejectProgress {
  return {
    type: ActionTypes.APPLICATION_REJECT_PROGRESS,
    payload
  }
}

function applicationRejectSuccess (payload: any): ApplicationRejectSuccess {
  return {
    type: ActionTypes.APPLICATION_REJECT_SUCCESS,
    payload
  }
}

function applicationRejectFailure (payload: any): ApplicationRejectFailure {
  return {
    type: ActionTypes.APPLICATION_REJECT_FAILURE,
    payload
  }
}
export type Action =
  | RejectedApplicationsProgress
  | RejectedApplicationsFailure
  | RejectedApplicationsSuccess
  | ApplicationRejectProgress
  | ApplicationRejectSuccess
  | ApplicationRejectFailure

export const Actions = {
  rejectedApplicationsProgress,
  rejectedApplicationsSuccess,
  rejectedApplicationsFailure,
  applicationRejectProgress,
  applicationRejectSuccess,
  applicationRejectFailure
};
