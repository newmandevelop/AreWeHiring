export enum ActionTypes {
  ADD_CANDIDATE_PROGRESS = 'auth/ADD_CANDIDATE_PROGRESS',
  ADD_CANDIDATE_SUCCESS = 'auth/ADD_CANDIDATE_SUCCESS',
  ADD_CANDIDATE_FAILURE = 'auth/ADD_CANDIDATE_FAILURE',
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

export type Action =
  | AddCandidateProgress
  | AddCandidateFailure
  | AddCandidateSuccess;

export const Actions = {
  addCandidateProgress,
  addCandidateSuccess,
  addCandidateFailure,
};
