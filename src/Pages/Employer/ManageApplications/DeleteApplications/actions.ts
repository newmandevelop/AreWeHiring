export enum ActionTypes {
  DELETED_APPLICATIONS_PROGRESS = 'DELETED_APPLICATIONS_PROGRESS',
  DELETED_APPLICATIONS_SUCCESS = 'DELETED_APPLICATIONS_SUCCESS',
  DELETED_APPLICATIONS_FAILURE = 'DELETED_APPLICATIONS_FAILURE',
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

export type Action =
  | DeletedApplicationsProgress
  | DeletedApplicationsFailure
  | DeletedApplicationsSuccess

export const Actions = {
  deletedApplicationsProgress,
  deletedApplicationsSuccess,
  deletedApplicationsFailure,
};
