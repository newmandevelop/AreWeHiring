export enum ActionTypes {
  JOB_CATEGORIES_PROGRESS = 'auth/JOB_CATEGORIES_PROGRESS',
  JOB_CATEGORIES_SUCCESS = 'auth/JOB_CATEGORIES_SUCCESS',
  JOB_CATEGORIES_FAILURE = 'auth/JOB_CATEGORIES_FAILURE',
}

export interface JobCategoriesProgress {
  type: ActionTypes.JOB_CATEGORIES_PROGRESS;
}

export interface JobCategoriesSuccess {
  type: ActionTypes.JOB_CATEGORIES_SUCCESS;
  payload: any;
}

export interface JobCategoriesFailure {
  type: ActionTypes.JOB_CATEGORIES_FAILURE;
  payload: any;
}

function jobCategoriesProgress(): JobCategoriesProgress {
  return {
    type: ActionTypes.JOB_CATEGORIES_PROGRESS,
  };
}
function jobCategoriesSuccess(payload: any): JobCategoriesSuccess {
  return {
    type: ActionTypes.JOB_CATEGORIES_SUCCESS,
    payload,
  };
}

function jobCategoriesFailure(payload: any): JobCategoriesFailure {
  return {
    type: ActionTypes.JOB_CATEGORIES_FAILURE,
    payload,
  };
}

export type Action =
  | JobCategoriesProgress
  | JobCategoriesFailure
  | JobCategoriesSuccess;

export const Actions = {
  jobCategoriesProgress,
  jobCategoriesSuccess,
  jobCategoriesFailure,
};
