export enum ActionTypes {
  JOBS_IN_ARCHIVE_PROGRESS = 'JOBS_IN_ARCHIVE_PROGRESS',
  JOBS_IN_ARCHIVE_SUCCESS = 'JOBS_IN_ARCHIVE_SUCCESS',
  JOBS_IN_ARCHIVE_FAILURE = 'JOBS_IN_ARCHIVE_FAILURE',
  ARCHIVE_JOB_PROGRESS = 'ARCHIVE_JOB_PROGRESS',
  ARCHIVE_JOB_SUCCESS = 'ARCHIVE_JOB_SUCCESS',
  ARCHIVE_JOB_FAILURE = 'ARCHIVE_JOB_FAILURE',
}
export interface JobsInArchiveProgress {
  type: ActionTypes.JOBS_IN_ARCHIVE_PROGRESS;
  payload: any;
}

export interface JobsInArchiveSuccess {
  type: ActionTypes.JOBS_IN_ARCHIVE_SUCCESS;
  payload: any;
}

export interface JobsInArchiveFailure {
  type: ActionTypes.JOBS_IN_ARCHIVE_FAILURE;
  payload: any;
}

function jobsInArchiveProgress(payload: any): JobsInArchiveProgress {
  return {
    type: ActionTypes.JOBS_IN_ARCHIVE_PROGRESS,
    payload,
  };
}

function jobsInArchiveSuccess(payload: any): JobsInArchiveSuccess {
  return {
    type: ActionTypes.JOBS_IN_ARCHIVE_SUCCESS,
    payload,
  };
}

function jobsInArchiveFailure(payload: any): JobsInArchiveFailure {
  return {
    type: ActionTypes.JOBS_IN_ARCHIVE_FAILURE,
    payload,
  };
}

export interface ArchiveJobProgress {
  type: ActionTypes.ARCHIVE_JOB_PROGRESS;
  payload: any;
}

export interface ArchiveJobSuccess {
  type: ActionTypes.ARCHIVE_JOB_SUCCESS;
  payload: any;
}

export interface ArchiveJobFailure {
  type: ActionTypes.ARCHIVE_JOB_FAILURE;
  payload: any;
}

function archiveJobProgress(payload: any): ArchiveJobProgress {
  return {
    type: ActionTypes.ARCHIVE_JOB_PROGRESS,
    payload,
  };
}

function archiveJobSuccess(payload: any): ArchiveJobSuccess {
  return {
    type: ActionTypes.ARCHIVE_JOB_SUCCESS,
    payload,
  };
}

function archiveJobFailure(payload: any): ArchiveJobFailure {
  return {
    type: ActionTypes.ARCHIVE_JOB_FAILURE,
    payload,
  };
}

export type Action =
  | JobsInArchiveProgress
  | JobsInArchiveFailure
  | JobsInArchiveSuccess
  | ArchiveJobProgress
  | ArchiveJobFailure
  | ArchiveJobSuccess;

export const Actions = {
  jobsInArchiveProgress,
  jobsInArchiveSuccess,
  jobsInArchiveFailure,
  archiveJobProgress,
  archiveJobSuccess,
  archiveJobFailure,
};
