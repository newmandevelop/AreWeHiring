export enum ActionTypes {
  ADD_JOB_PROGRESS = 'auth/ADD_JOB_PROGRESS',
  ADD_JOB_SUCCESS = 'auth/ADD_JOB_SUCCESS',
  ADD_JOB_FAILURE = 'auth/ADD_JOB_FAILURE',
}

export interface AddJobProgress {
  type: ActionTypes.ADD_JOB_PROGRESS;
  payload: any;
}

export interface AddJobSuccess {
  type: ActionTypes.ADD_JOB_SUCCESS;
}

export interface AddJobFailure {
  type: ActionTypes.ADD_JOB_FAILURE;
  payload: any;
}

function addJobProgress(payload: any): AddJobProgress {
  return {
    type: ActionTypes.ADD_JOB_PROGRESS,
    payload,
  };
}
function addJobSuccess(): AddJobSuccess {
  return {
    type: ActionTypes.ADD_JOB_SUCCESS,
  };
}

function addJobFailure(payload: any): AddJobFailure {
  return {
    type: ActionTypes.ADD_JOB_FAILURE,
    payload,
  };
}

export type Action = AddJobProgress | AddJobFailure | AddJobSuccess;

export const Actions = {
  addJobProgress,
  addJobSuccess,
  addJobFailure,
};
