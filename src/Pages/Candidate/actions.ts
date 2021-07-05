export enum ActionTypes {
  ADD_CANDIDATE_PROGRESS = 'auth/ADD_CANDIDATE_PROGRESS',
  ADD_CANDIDATE_SUCCESS = 'auth/ADD_CANDIDATE_SUCCESS',
  ADD_CANDIDATE_FAILURE = 'auth/ADD_CANDIDATE_FAILURE',
  GET_CANDIDATE_APPLICATIONS_PROGRESS = 'auth/GET_CANDIDATE_APPLICATIONS_PROGRESS',
  GET_CANDIDATE_APPLICATIONS_SUCCESS = 'auth/GET_CANDIDATE_APPLICATIONS_SUCCESS',
  GET_CANDIDATE_APPLICATIONS_FAILURE = 'auth/GET_CANDIDATE_APPLICATIONS_FAILURE',
}

export interface AddCandidateProgress {
  type: ActionTypes.ADD_CANDIDATE_PROGRESS;
  payload: any;
}

export interface AddCandidateSuccess {
  type: ActionTypes.ADD_CANDIDATE_SUCCESS;
}

export interface AddCandidateFailure {
  type: ActionTypes.ADD_CANDIDATE_FAILURE;
  payload: any;
}

function addCandidateProgress(payload: any): AddCandidateProgress {
  return {
    type: ActionTypes.ADD_CANDIDATE_PROGRESS,
    payload,
  };
}
function addCandidateSuccess(): AddCandidateSuccess {
  return {
    type: ActionTypes.ADD_CANDIDATE_SUCCESS,
  };
}

function addCandidateFailure(payload: any): AddCandidateFailure {
  return {
    type: ActionTypes.ADD_CANDIDATE_FAILURE,
    payload,
  };
}

export interface GetCandidateApplicationsProgress {
  type: ActionTypes.GET_CANDIDATE_APPLICATIONS_PROGRESS;
  payload: any;
}

export interface GetCandidateApplicationsSuccess {
  type: ActionTypes.GET_CANDIDATE_APPLICATIONS_SUCCESS;
  payload: any;
}

export interface GetCandidateApplicationsFailure {
  type: ActionTypes.GET_CANDIDATE_APPLICATIONS_FAILURE;
  payload: any;
}

function getCandidateApplicationsProgress(
  payload: any,
): GetCandidateApplicationsProgress {
  return {
    type: ActionTypes.GET_CANDIDATE_APPLICATIONS_PROGRESS,
    payload,
  };
}

function getCandidateApplicationsSuccess(
  payload: any,
): GetCandidateApplicationsSuccess {
  return {
    type: ActionTypes.GET_CANDIDATE_APPLICATIONS_SUCCESS,
    payload,
  };
}

function getCandidateApplicationsFailure(
  payload: any,
): GetCandidateApplicationsFailure {
  return {
    type: ActionTypes.GET_CANDIDATE_APPLICATIONS_FAILURE,
    payload,
  };
}
export type Action =
  | AddCandidateProgress
  | AddCandidateFailure
  | AddCandidateSuccess
  | GetCandidateApplicationsProgress
  | GetCandidateApplicationsSuccess
  | GetCandidateApplicationsFailure;

export const Actions = {
  addCandidateProgress,
  addCandidateSuccess,
  addCandidateFailure,
  getCandidateApplicationsProgress,
  getCandidateApplicationsSuccess,
  getCandidateApplicationsFailure,
};
