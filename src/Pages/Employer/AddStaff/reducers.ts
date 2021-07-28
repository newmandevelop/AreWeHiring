import { Action, ActionTypes } from './actions';

export interface IAddStaff {
  addStaffProgress: boolean;
  addStaffSuccess: boolean;
  addStaffFailure: boolean;
  errorMessage: null | String;
}

const initialState: IAddStaff = {
  addStaffProgress: false,
  addStaffSuccess: false,
  addStaffFailure: false,
  errorMessage: null,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFF_PROGRESS: {
      return {
        ...state,
        addStaffProgress: true,
        addStaffSuccess: false,
        addStaffFailure: false,
      };
    }

    case ActionTypes.ADD_STAFF_SUCCESS: {
      return {
        ...state,
        addStaffProgress: false,
        addStaffSuccess: true,
        addStaffFailure: false,
      };
    }

    case ActionTypes.ADD_STAFF_FAILURE: {
      return {
        ...state,
        addStaffProgress: false,
        addStaffSuccess: false,
        addStaffFailure: true,
        errorMessage: action.payload,
      };
    }
  }
};
