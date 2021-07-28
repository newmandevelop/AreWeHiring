export enum ActionTypes {
  ADD_STAFF_PROGRESS = 'ADD_STAFF_PROGRESS',
  ADD_STAFF_SUCCESS = 'ADD_STAFF_SUCCESS',
  ADD_STAFF_FAILURE = 'ADD_STAFF_FAILURE',
}

export interface AddStaffProgress {
  type: ActionTypes.ADD_STAFF_PROGRESS;
}

export interface AddStaffSuccess {
  type: ActionTypes.ADD_STAFF_SUCCESS;
}

export interface AddStaffFailure {
  type: ActionTypes.ADD_STAFF_FAILURE;
  payload: any;
}

function addStaffProgress(): AddStaffProgress {
  return {
    type: ActionTypes.ADD_STAFF_PROGRESS,
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
