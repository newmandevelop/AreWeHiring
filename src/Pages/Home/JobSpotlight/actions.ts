export enum ActionTypes {
  JOB_SPOTLIGHT_PROGRESS = 'auth/JOB_SPOTLIGHT_PROGRESS',
  JOB_SPOTLIGHT_SUCCESS = 'auth/JOB_SPOTLIGHT_SUCCESS',
  JOB_SPOTLIGHT_FAILURE = 'auth/JOB_SPOTLIGHT_FAILURE',
}

export interface JobSpotlightProgress {
  type: ActionTypes.JOB_SPOTLIGHT_PROGRESS;
}

export interface JobSpotlightSuccess {
  type: ActionTypes.JOB_SPOTLIGHT_SUCCESS;
  payload: any;
}

export interface JobSpotlightFailure {
  type: ActionTypes.JOB_SPOTLIGHT_FAILURE;
  payload: any;
}

function jobSpotlightProgress(): JobSpotlightProgress {
  return {
    type: ActionTypes.JOB_SPOTLIGHT_PROGRESS,
  };
}
function jobSpotlightSuccess(payload: any): JobSpotlightSuccess {
  return {
    type: ActionTypes.JOB_SPOTLIGHT_SUCCESS,
    payload,
  };
}

function jobSpotlightFailure(payload: any): JobSpotlightFailure {
  return {
    type: ActionTypes.JOB_SPOTLIGHT_FAILURE,
    payload,
  };
}

export type Action =
  | JobSpotlightProgress
  | JobSpotlightFailure
  | JobSpotlightSuccess;

export const Actions = {
  jobSpotlightProgress,
  jobSpotlightSuccess,
  jobSpotlightFailure,
};
