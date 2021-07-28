export enum ActionTypes {
  SEARCH_USER_BY_COMPANY_PROGRESS = 'SEARCH_USER_BY_COMPANY_PROGRESS',
  SEARCH_USER_BY_COMPANY_SUCCESS = 'SEARCH_USER_BY_COMPANY_SUCCESS',
  SEARCH_USER_BY_COMPANY_FAILURE = 'SEARCH_USER_BY_COMPANY_FAILURE',
}

export interface SearchUserProgress {
  type: ActionTypes.SEARCH_USER_BY_COMPANY_PROGRESS;
  payload: any;
}

export interface SearchUserSuccess {
  type: ActionTypes.SEARCH_USER_BY_COMPANY_SUCCESS;
  payload: any;
}

export interface SearchUserFailure {
  type: ActionTypes.SEARCH_USER_BY_COMPANY_FAILURE;
  payload: any;
}

function searchUserProgress(payload: any): SearchUserProgress {
  return {
    type: ActionTypes.SEARCH_USER_BY_COMPANY_PROGRESS,
    payload,
  };
}

function searchUserSuccess(payload: any): SearchUserSuccess {
  return {
    type: ActionTypes.SEARCH_USER_BY_COMPANY_SUCCESS,
    payload,
  };
}

function searchUserFailure(payload: any): SearchUserFailure {
  return {
    type: ActionTypes.SEARCH_USER_BY_COMPANY_FAILURE,
    payload,
  };
}

export type Action = SearchUserProgress | SearchUserSuccess | SearchUserFailure;

export const Actions = {
  searchUserProgress,
  searchUserSuccess,
  searchUserFailure,
};
