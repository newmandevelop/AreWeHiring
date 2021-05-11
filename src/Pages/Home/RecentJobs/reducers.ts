import { Action, ActionTypes } from './actions';

export interface IRecentJobs {
  recentJobsProgress: boolean;
  recentJobsSuccess: boolean;
  recentJobsFailure: boolean;
  recentJobsErrorMessage: null | String;
  recentJobsData: null | Object | any;
}
const initialState: IRecentJobs = {
  recentJobsProgress: false,
  recentJobsSuccess: false,
  recentJobsFailure: false,
  recentJobsErrorMessage: null,
  recentJobsData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.RECENT_JOBS_PROGRESS: {
      return {
        ...state,
        recentJobsProgress: true,
        recentJobsSuccess: false,
        recentJobsFailure: false,
      };
    }
    case ActionTypes.RECENT_JOBS_SUCCESS: {
      return {
        ...state,
        recentJobsProgress: false,
        recentJobsSuccess: true,
        recentJobsFailure: false,
        recentJobsData: action.payload,
      };
    }
    case ActionTypes.RECENT_JOBS_FAILURE: {
      return {
        ...state,
        recentJobsProgress: false,
        recentJobsSuccess: false,
        recentJobsFailure: true,
        recentJobsErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
