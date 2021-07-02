export enum ActionTypes {
  ARCHIVED_APPLICATIONS_PROGRESS = 'ARCHIVED_APPLICATIONS_PROGRESS',
  ARCHIVED_APPLICATIONS_SUCCESS = 'ARCHIVED_APPLICATIONS_SUCCESS',
  ARCHIVED_APPLICATIONS_FAILURE = 'ARCHIVED_APPLICATIONS_FAILURE',
  SEND_APPLICATION_TO_ARCHIVE_PROGRESS = 'SEND_APPLICATION_TO_ARCHIVE_PROGRESS',
  SEND_APPLICATION_TO_ARCHIVE_SUCCESS = 'SEND_APPLICATION_TO_ARCHIVE_SUCCESS',
  SEND_APPLICATION_TO_ARCHIVE_FAILURE = 'SEND_APPLICATION_TO_ARCHIVE_FAILURE'
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

export interface SendApplicationToArchiveProgress {
  type: ActionTypes.SEND_APPLICATION_TO_ARCHIVE_PROGRESS;
  payload: any;
}

export interface SendApplicationToArchiveSuccess {
  type: ActionTypes.SEND_APPLICATION_TO_ARCHIVE_SUCCESS;
  payload: any;
}


export interface SendApplicationToArchiveFailure {
  type: ActionTypes.SEND_APPLICATION_TO_ARCHIVE_FAILURE,
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
function sendApplicationToArchiveProgress (payload: any): SendApplicationToArchiveProgress {
  return {
    type: ActionTypes.SEND_APPLICATION_TO_ARCHIVE_PROGRESS,
    payload
  }
}

function sendApplicationToArchiveSuccess (payload: any): SendApplicationToArchiveSuccess {
  return {
    type: ActionTypes.SEND_APPLICATION_TO_ARCHIVE_SUCCESS,
    payload
  }
}

function sendApplicationToArchiveFailure (payload: any): SendApplicationToArchiveFailure {
  return {
    type: ActionTypes.SEND_APPLICATION_TO_ARCHIVE_FAILURE,
    payload
  }
}

export type Action =
  | ArchivedApplicationsProgress
  | ArchivedApplicationsFailure
  | ArchivedApplicationsSuccess
  | SendApplicationToArchiveProgress
  | SendApplicationToArchiveSuccess
  | SendApplicationToArchiveFailure

export const Actions = {
  archivedApplicationsProgress,
  archivedApplicationsSuccess,
  archivedApplicationsFailure,
  sendApplicationToArchiveProgress,
  sendApplicationToArchiveSuccess,
  sendApplicationToArchiveFailure
};
