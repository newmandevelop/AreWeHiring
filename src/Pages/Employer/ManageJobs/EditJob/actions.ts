export enum ActionTypes {
  EDIT_JOB_PROGRESS = 'auth/EDIT_JOB_PROGRESS',
  EDIT_JOB_SUCCESS = 'auth/EDIT_JOB_SUCCESS',
  EDIT_JOB_FAILURE = 'auth/EDIT_JOB_FAILURE',
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

export type Action = EditJobProgress | EditJobFailure | EditJobSuccess;

export const Actions = {
  editJobProgress,
  editJobSuccess,
  editJobFailure,
};
