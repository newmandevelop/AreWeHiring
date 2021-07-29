export enum ActionTypes {
  ADD_STAFF_PROGRESS = 'ADD_STAFF_PROGRESS',
  ADD_STAFF_SUCCESS = 'ADD_STAFF_SUCCESS',
  ADD_STAFF_FAILURE = 'ADD_STAFF_FAILURE',
}

export interface AddStaffProgress {
  type: ActionTypes.ADD_STAFF_PROGRESS;
  payload: any;
}

export interface AddStaffSuccess {
  type: ActionTypes.ADD_STAFF_SUCCESS;
}

export interface AddStaffFailure {
  type: ActionTypes.ADD_STAFF_FAILURE;
  payload: any;
}

function addStaffProgress(payload: any): AddStaffProgress {
  return {
    type: ActionTypes.ADD_STAFF_PROGRESS,
    payload,
  };
}

function addStaffSuccess(): AddStaffSuccess {
  return {
    type: ActionTypes.ADD_STAFF_SUCCESS,
  };
}

function addStaffFailure(payload: any): AddStaffFailure {
  return {
    type: ActionTypes.ADD_STAFF_FAILURE,
    payload,
  };
}

export type Action = AddStaffProgress | AddStaffSuccess | AddStaffFailure;

export const Actions = {
  addStaffProgress,
  addStaffSuccess,
  addStaffFailure,
};
