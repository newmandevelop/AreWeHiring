export enum ActionTypes {
  ARCHIVED_APPLICATIONS_PROGRESS = 'ARCHIVED_APPLICATIONS_PROGRESS',
  ARCHIVED_APPLICATIONS_SUCCESS = 'ARCHIVED_APPLICATIONS_SUCCESS',
  ARCHIVED_APPLICATIONS_FAILURE = 'ARCHIVED_APPLICATIONS_FAILURE',
}
export interface ArchivedApplicationsProgress {
  type: ActionTypes.ARCHIVED_APPLICATIONS_PROGRESS;
  payload: any;
}

export interface ArchivedApplicationsSuccess {
  type: ActionTypes.ARCHIVED_APPLICATIONS_SUCCESS;
  payload: any;
}

export interface ArchivedApplicationsFailure {
  type: ActionTypes.ARCHIVED_APPLICATIONS_FAILURE;
  payload: any;
}

function archivedApplicationsProgress(payload: any): ArchivedApplicationsProgress {
  return {
    type: ActionTypes.ARCHIVED_APPLICATIONS_PROGRESS,
    payload,
  };
}

function archivedApplicationsSuccess(payload: any): ArchivedApplicationsSuccess {
  return {
    type: ActionTypes.ARCHIVED_APPLICATIONS_SUCCESS,
    payload,
  };
}

function archivedApplicationsFailure(payload: any): ArchivedApplicationsFailure {
  return {
    type: ActionTypes.ARCHIVED_APPLICATIONS_FAILURE,
    payload,
  };
}

export type Action =
  | ArchivedApplicationsProgress
  | ArchivedApplicationsFailure
  | ArchivedApplicationsSuccess

export const Actions = {
  archivedApplicationsProgress,
  archivedApplicationsSuccess,
  archivedApplicationsFailure,
};
