export enum ActionTypes {
    CANDIDATE_SEARCH_PROGRESS = 'auth/SIGNUP_PROGRESS',
    CANDIDATE_SEARCH_SUCCESS = 'auth/SIGNUP_SUCCESS',
    CANDIDATE_SEARCH_FAILURE = 'auth/SIGNUP_FAILURE',
  }
  export interface CandidateSearchProgress {
    type: ActionTypes.CANDIDATE_SEARCH_PROGRESS;
    payload: any;
  }
  
  export interface CandidateSearchSuccess {
    type: ActionTypes.CANDIDATE_SEARCH_SUCCESS;
    payload: any;
  }
  
  export interface CandidateSearchFailure {
    type: ActionTypes.CANDIDATE_SEARCH_FAILURE;
    payload: any;
  }
  
  function candidateSearchProgress(payload: any): CandidateSearchProgress {
    return {
      type: ActionTypes.CANDIDATE_SEARCH_PROGRESS,
      payload,
    };
  }
  
  function candidateSearchSuccess(payload: any): CandidateSearchSuccess {
    return {
      type: ActionTypes.CANDIDATE_SEARCH_SUCCESS,
      payload,
    };
  }
  
  function candidateSearchFailure(payload: any): CandidateSearchFailure {
    return {
      type: ActionTypes.CANDIDATE_SEARCH_FAILURE,
      payload,
    };
  }
  
  
  export type Action =
    | CandidateSearchProgress
    | CandidateSearchFailure
    | CandidateSearchSuccess
  
  export const Actions = {
    candidateSearchProgress,
    candidateSearchSuccess,
    candidateSearchFailure,
  };
  