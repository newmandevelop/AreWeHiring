import { Action, ActionTypes } from './actions';

export interface IJobSpotlight {
  jobSpotlightProgress: boolean;
  jobSpotlightSuccess: boolean;
  jobSpotlightFailure: boolean;
  jobSpotlightErrorMessage: null | String;
  jobSpotlightData: null | Object | any;
}
const initialState: IJobSpotlight = {
  jobSpotlightProgress: false,
  jobSpotlightSuccess: false,
  jobSpotlightFailure: false,
  jobSpotlightErrorMessage: null,
  jobSpotlightData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.JOB_SPOTLIGHT_PROGRESS: {
      return {
        ...state,
        jobSpotlightProgress: true,
        jobSpotlightSuccess: false,
        jobSpotlightFailure: false,
      };
    }
    case ActionTypes.JOB_SPOTLIGHT_SUCCESS: {
      return {
        ...state,
        jobSpotlightProgress: false,
        jobSpotlightSuccess: true,
        jobSpotlightFailure: false,
        jobSpotlightData: action.payload,
      };
    }
    case ActionTypes.JOB_SPOTLIGHT_FAILURE: {
      return {
        ...state,
        jobSpotlightProgress: false,
        jobSpotlightSuccess: false,
        jobSpotlightFailure: true,
        jobSpotlightErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
