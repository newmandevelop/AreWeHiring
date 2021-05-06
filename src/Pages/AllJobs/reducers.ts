import { Action, ActionTypes } from "./actions";

export interface IAllJobSearch {
  allJobsProgress: boolean;
  allJobsSuccess: boolean;
  allJobsFailure: boolean;
  allJobsErrorMessage: null | String;
  allJobsData: null | Object | any;
}
const initialState: IAllJobSearch = {
  allJobsProgress: false,
  allJobsSuccess: false,
  allJobsFailure: false,
  allJobsErrorMessage: null,
  allJobsData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ALL_JOBS_PROGRESS: {
      return {
        ...state,
        allJobsProgress: true,
        allJobsSuccess: false,
        allJobsFailure: false,
      };
    }
    case ActionTypes.ALL_JOBS_SUCCESS: {
      return {
        ...state,
        allJobsProgress: false,
        allJobsSuccess: true,
        allJobsFailure: false,
        allJobsData: action.payload,
      };
    }
    case ActionTypes.ALL_JOBS_FAILURE: {
      return {
        ...state,
        allJobsProgress: false,
        allJobsSuccess: false,
        allJobsFailure: true,
        allJobsErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
