import { Action, ActionTypes } from './actions';

export interface ISearchCandidate {
  candidateSearchProgress: boolean;
  candidateSearchSuccess: boolean;
  candidateSearchFailure: boolean;
  candidateSearchErrorMessage: null | string;
  candidateCount: number;
  candidateData: null | Object | any;
}
const initialState: ISearchCandidate = {
  candidateSearchProgress: false,
  candidateSearchSuccess: false,
  candidateSearchFailure: false,
  candidateSearchErrorMessage: null,
  candidateCount: 0,
  candidateData: [],
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
        candidateData: action.payload.content,
        candidateCount: action.payload.numberOfElements
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
