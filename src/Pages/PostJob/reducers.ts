import { Action, ActionTypes } from './actions';

export interface IAddJob {
  addJobProgress: boolean;
  addJobSuccess: boolean;
  addJobFailure: boolean;
  addJobErrorMessage: null | String;
}
const initialState: IAddJob = {
  addJobProgress: false,
  addJobSuccess: false,
  addJobFailure: false,
  addJobErrorMessage: null,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_JOB_PROGRESS: {
      return {
        ...state,
        addJobProgress: true,
        addJobSuccess: false,
        addJobFailure: false,
      };
    }
    case ActionTypes.ADD_JOB_SUCCESS: {
      return {
        ...state,
        addJobProgress: false,
        addJobSuccess: true,
        addJobFailure: false,
      };
    }
    case ActionTypes.ADD_JOB_FAILURE: {
      return {
        ...state,
        addJobProgress: false,
        addJobSuccess: false,
        addJobFailure: true,
        addJobErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
