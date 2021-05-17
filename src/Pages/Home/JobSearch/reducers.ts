import { Action, ActionTypes } from './actions';

export interface IFindJob {
  jobSearchProgress: boolean;
  jobSearchSuccess: boolean;
  jobSearchFailure: boolean;
  jobSearchErrorMessage: null | string;

  jobDataData: Object;
}
const initialState: IFindJob = {
  jobSearchProgress: false,
  jobSearchSuccess: false,
  jobSearchFailure: false,
  jobSearchErrorMessage: null,

  jobDataData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.JOB_SEARCH_PROGRESS: {
      return {
        ...state,
        jobSearchProgress: true,
        jobSearchSuccess: false,
        jobSearchFailure: false,
      };
    }
    case ActionTypes.JOB_SEARCH_SUCCESS: {
      return {
        ...state,
        jobSearchProgress: false,
        jobSearchSuccess: true,
        jobSearchFailure: false,
        jobData: action.payload,
      };
    }
    case ActionTypes.JOB_SEARCH_FAILURE: {
      return {
        ...state,
        jobSearchProgress: false,
        jobSearchSuccess: false,
        jobSearchFailure: true,
        jobSearchErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
