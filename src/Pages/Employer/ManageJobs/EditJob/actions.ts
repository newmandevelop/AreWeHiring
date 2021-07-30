export enum ActionTypes {
  EDIT_JOB_PROGRESS = 'auth/EDIT_JOB_PROGRESS',
  EDIT_JOB_SUCCESS = 'auth/EDIT_JOB_SUCCESS',
  EDIT_JOB_FAILURE = 'auth/EDIT_JOB_FAILURE',
  UPDATE_JOB_PROGRESS = 'auth/UPDATE_JOB_PROGRESS',
  UPDATE_JOB_SUCCESS = 'auth/UPDATE_JOB_SUCCESS',
  UPDATE_JOB_FAILURE = 'auth/UPDATE_JOB_FAILURE',
}

export interface EditJobProgress {
  type: ActionTypes.EDIT_JOB_PROGRESS;
  payload: any;
}

export interface EditJobSuccess {
  type: ActionTypes.EDIT_JOB_SUCCESS;
  payload: any;
}

export interface EditJobFailure {
  type: ActionTypes.EDIT_JOB_FAILURE;
  payload: any;
}
export interface UpdateJobProgress {
  type: ActionTypes.UPDATE_JOB_PROGRESS;
  payload: any;
}

export interface UpdateJobSuccess {
  type: ActionTypes.UPDATE_JOB_SUCCESS;
  // payload: any;
}

export interface UpdateJobFailure {
  type: ActionTypes.UPDATE_JOB_FAILURE;
  payload: any;
}

function editJobProgress(payload: any): EditJobProgress {
  return {
    type: ActionTypes.EDIT_JOB_PROGRESS,
    payload,
  };
}
function editJobSuccess(payload: any): EditJobSuccess {
  return {
    type: ActionTypes.EDIT_JOB_SUCCESS,
    payload,
  };
}

function editJobFailure(payload: any): EditJobFailure {
  return {
    type: ActionTypes.EDIT_JOB_FAILURE,
    payload,
  };
}

function updateJobProgress(payload: any): UpdateJobProgress {
  return {
    type: ActionTypes.UPDATE_JOB_PROGRESS,
    payload,
  };
}
function updateJobSuccess(): UpdateJobSuccess {
  return {
    type: ActionTypes.UPDATE_JOB_SUCCESS,
  };
}

function updateJobFailure(payload: any): UpdateJobFailure {
  return {
    type: ActionTypes.UPDATE_JOB_FAILURE,
    payload,
  };
}

export type Action =
  | EditJobProgress
  | EditJobFailure
  | EditJobSuccess
  | UpdateJobProgress
  | UpdateJobSuccess
  | UpdateJobFailure;

export const Actions = {
  editJobProgress,
  editJobSuccess,
  editJobFailure,
  updateJobProgress,
  updateJobSuccess,
  updateJobFailure,
};
