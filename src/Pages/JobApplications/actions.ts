export enum ActionTypes  {
    FETCH_APPLICATIONS_PROGRESS = 'FETCH_APPLICATIONS_PROGRESS',
    FETCH_APPLICATIONS_SUCCESS = 'FETCH_APPLICATIONS_SUCCESS',
    FETCH_APPLICATIONS_FAILURE = 'FETCH_APPLICATIONS_FAILURE',
}

export interface FetchApplicationsProgress {
    type: ActionTypes.FETCH_APPLICATIONS_PROGRESS;
    payload: any;
  }
  
  export interface FetchApplicationsSuccess {
    type: ActionTypes.FETCH_APPLICATIONS_SUCCESS;
    payload: any;
  }
  
  export interface FetchApplicationsFailure {
    type: ActionTypes.FETCH_APPLICATIONS_FAILURE;
    payload: any;
  }

  function fetchApplicationsProgress(payload: any): FetchApplicationsProgress {
    return {
      type: ActionTypes.FETCH_APPLICATIONS_PROGRESS,
      payload,
    };
  }
  
  function fetchApplicationsSuccess(payload: any): FetchApplicationsSuccess {
      console.log("pay",payload)
    return {
      type: ActionTypes.FETCH_APPLICATIONS_SUCCESS,
      payload,
    };
  }
  
  function fetchApplicationsFailure(payload: any): FetchApplicationsFailure {
    return {
      type: ActionTypes.FETCH_APPLICATIONS_FAILURE,
      payload,
    };
  }

  export type Action =
  | FetchApplicationsProgress
  | FetchApplicationsFailure
  | FetchApplicationsSuccess

export const Actions = {
    fetchApplicationsProgress,
    fetchApplicationsSuccess,
    fetchApplicationsFailure
};