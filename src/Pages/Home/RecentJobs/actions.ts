export enum ActionTypes {
  RECENT_JOBS_PROGRESS = 'auth/RECENT_JOBS_PROGRESS',
  RECENT_JOBS_SUCCESS = 'auth/RECENT_JOBS_SUCCESS',
  RECENT_JOBS_FAILURE = 'auth/RECENT_JOBS_FAILURE',
}

export interface RecentJobsProgress {
  type: ActionTypes.RECENT_JOBS_PROGRESS;
}

export interface RecentJobsSuccess {
  type: ActionTypes.RECENT_JOBS_SUCCESS;
  payload: any;
}

export interface RecentJobsFailure {
  type: ActionTypes.RECENT_JOBS_FAILURE;
  payload: any;
}

function recentJobsProgress(): RecentJobsProgress {
  return {
    type: ActionTypes.RECENT_JOBS_PROGRESS,
  };
}
function recentJobsSuccess(payload: any): RecentJobsSuccess {
  return {
    type: ActionTypes.RECENT_JOBS_SUCCESS,
    payload,
  };
}

function recentJobsFailure(payload: any): RecentJobsFailure {
  return {
    type: ActionTypes.RECENT_JOBS_FAILURE,
    payload,
  };
}

export type Action = RecentJobsProgress | RecentJobsFailure | RecentJobsSuccess;

export const Actions = {
  recentJobsProgress,
  recentJobsSuccess,
  recentJobsFailure,
};
