import { Action, ActionTypes } from "./actions";

export interface IJobSearch {
  jobByIdProgress: boolean;
  jobByIdSuccess: boolean;
  jobByIdFailure: boolean;
  jobByIdErrorMessage: null | String;
  jobData: null | Object;
}
const initialState: IJobSearch = {
  jobByIdProgress: false,
  jobByIdSuccess: false,
  jobByIdFailure: false,
  jobByIdErrorMessage: null,
  jobData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.JOB_BY_ID_PROGRESS: {
      return {
        ...state,
        jobByIdProgress: true,
        jobByIdSuccess: false,
        jobByIdFailure: false,
      };
    }
    case ActionTypes.JOB_BY_ID_SUCCESS: {
      return {
        ...state,
        jobByIdProgress: false,
        jobByIdSuccess: true,
        jobByIdFailure: false,
        jobData: action.payload,
      };
    }
    case ActionTypes.JOB_BY_ID_FAILURE: {
      return {
        ...state,
        jobByIdProgress: false,
        jobByIdSuccess: false,
        jobByIdFailure: true,
        jobByIdErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
