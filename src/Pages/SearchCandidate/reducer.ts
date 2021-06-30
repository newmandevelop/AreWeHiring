import { isUserLoggedIn } from '../../utils/sessionStorage';
import { Action, ActionTypes } from './actions';

interface ICandidate {
  userRole?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  filledDetails?: boolean;
  id?: string;
}

export interface ICandidateState {
  candidateSearchProgress: boolean;
  candidateSearchSuccess: boolean;
  candidateSearchFailure: boolean;
  candidateSearchErrorMessage: null | string;
  candidateData: ICandidate;
}
const initialState: ICandidateState = {
  candidateSearchProgress: false,
  candidateSearchSuccess: false,
  candidateSearchFailure: false,
  candidateSearchErrorMessage: null,
  candidateData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.CANDIDATE_SEARCH_PROGRESS: {
      return {
        ...state,
        candidateSearchProgress: true,
        candidateSearchSuccess: false,
        candidateSearchFailure: false,
      };
    }
    case ActionTypes.CANDIDATE_SEARCH_SUCCESS: {
      return {
        ...state,
        candidateSearchProgress: false,
        candidateSearchSuccess: true,
        candidateSearchFailure: false,
        candidateSearchErrorMessage: action.payload,
      };
    }
    case ActionTypes.CANDIDATE_SEARCH_FAILURE: {
      return {
        ...state,
        candidateSearchProgress: false,
        candidateSearchSuccess: false,
        candidateSearchFailure: true,
        candidateSearchErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
