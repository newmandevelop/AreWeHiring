import { Action, ActionTypes } from './actions';

export interface IAddCandidate {
  addCandidateProgress: boolean;
  addCandidateSuccess: boolean;
  addCandidateFailure: boolean;
  addCandidateErrorMessage: null | String;
}
const initialState: IAddCandidate = {
  addCandidateProgress: false,
  addCandidateSuccess: false,
  addCandidateFailure: false,
  addCandidateErrorMessage: null,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_CANDIDATE_PROGRESS: {
      return {
        ...state,
        addCandidateProgress: true,
        addCandidateSuccess: false,
        addCandidateFailure: false,
      };
    }
    case ActionTypes.ADD_CANDIDATE_SUCCESS: {
      return {
        ...state,
        addCandidateProgress: false,
        addCandidateSuccess: true,
        addCandidateFailure: false,
      };
    }
    case ActionTypes.ADD_CANDIDATE_FAILURE: {
      return {
        ...state,
        addCandidateProgress: false,
        addCandidateSuccess: false,
        addCandidateFailure: true,
        addCandidateErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
