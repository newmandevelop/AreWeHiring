export enum ActionTypes {
  DELETED_APPLICATIONS_PROGRESS = 'DELETED_APPLICATIONS_PROGRESS',
  DELETED_APPLICATIONS_SUCCESS = 'DELETED_APPLICATIONS_SUCCESS',
  DELETED_APPLICATIONS_FAILURE = 'DELETED_APPLICATIONS_FAILURE',
  APPLICATION_DELETE_PROGRESS = 'APPLICATION_DELETE_PROGRESS',
  APPLICATION_DELETE_SUCCESS = 'APPLICATION_DELETE_SUCCESS',
  APPLICATION_DELETE_FAILURE = 'APPLICATION_DELETE_FAILURE'
}
export interface DeletedApplicationsProgress {
  type: ActionTypes.DELETED_APPLICATIONS_PROGRESS;
  payload: any;
}

export interface DeletedApplicationsSuccess {
  type: ActionTypes.DELETED_APPLICATIONS_SUCCESS;
  payload: any;
}

export interface DeletedApplicationsFailure {
  type: ActionTypes.DELETED_APPLICATIONS_FAILURE;
  payload: any;
}

export interface ApplicationDeleteProgress {
  type: ActionTypes.APPLICATION_DELETE_PROGRESS;
  payload: any;
}

export interface ApplicationDeleteSuccess {
  type: ActionTypes.APPLICATION_DELETE_SUCCESS;
  payload: any;
}


export interface ApplicationDeleteFailure {
  type: ActionTypes.APPLICATION_DELETE_FAILURE,
  payload: any;
}

function deletedApplicationsProgress(payload: any): DeletedApplicationsProgress {
  return {
    type: ActionTypes.DELETED_APPLICATIONS_PROGRESS,
    payload,
  };
}

function deletedApplicationsSuccess(payload: any): DeletedApplicationsSuccess {
  return {
    type: ActionTypes.DELETED_APPLICATIONS_SUCCESS,
    payload,
  };
}

function deletedApplicationsFailure(payload: any): DeletedApplicationsFailure {
  return {
    type: ActionTypes.DELETED_APPLICATIONS_FAILURE,
    payload,
  };
}

function applicationDeleteProgress (payload: any): ApplicationDeleteProgress {
  return {
    type: ActionTypes.APPLICATION_DELETE_PROGRESS,
    payload
  }
}

function applicationDeleteSuccess (payload: any): ApplicationDeleteSuccess {
  return {
    type: ActionTypes.APPLICATION_DELETE_SUCCESS,
    payload
  }
}

function applicationDeleteFailure (payload: any): ApplicationDeleteFailure {
  return {
    type: ActionTypes.APPLICATION_DELETE_FAILURE,
    payload
  }
}
export type Action =
  | DeletedApplicationsProgress
  | DeletedApplicationsFailure
  | DeletedApplicationsSuccess
  | ApplicationDeleteProgress
  | ApplicationDeleteSuccess
  | ApplicationDeleteFailure

export const Actions = {
  deletedApplicationsProgress,
  deletedApplicationsSuccess,
  deletedApplicationsFailure,
  applicationDeleteProgress,
  applicationDeleteSuccess,
  applicationDeleteFailure
};
