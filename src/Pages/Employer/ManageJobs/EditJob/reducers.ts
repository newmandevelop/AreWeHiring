import { Action, ActionTypes } from './actions';

export interface IEditJob {
  editJobProgress: boolean;
  editJobSuccess: boolean;
  editJobFailure: boolean;
  editJobErrorMessage: null | String;
  editJobData: [] | object | null;
}
const initialState: IEditJob = {
  editJobProgress: false,
  editJobSuccess: false,
  editJobFailure: false,
  editJobErrorMessage: null,
  editJobData: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.EDIT_JOB_PROGRESS: {
      return {
        ...state,
        editJobProgress: true,
        editJobSuccess: false,
        editJobFailure: false,
      };
    }
    case ActionTypes.EDIT_JOB_SUCCESS: {
      return {
        ...state,
        editJobProgress: false,
        editJobSuccess: true,
        editJobFailure: false,
      };
    }
    case ActionTypes.EDIT_JOB_FAILURE: {
      return {
        ...state,
        editJobProgress: false,
        editJobSuccess: false,
        editJobFailure: true,
        editJobErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
