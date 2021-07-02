import { Action, ActionTypes } from './actions';

export interface IRejectedApplications {
  rejectedApplicationsProgress: boolean;
  rejectedApplicationsSuccess: boolean;
  rejectedApplicationsFailure: boolean;
  rejectedApplicationsErrorMessage: null | string;
  rejectedApplicationsData: null | object | any;
  applicationRejectProgress: boolean;
  applicationRejectSuccess: boolean;
  applicationRejectFailure: boolean;
  applicationRejectErrorMessage: null | object | any;

}
const initialState: IRejectedApplications = {
  rejectedApplicationsProgress: false,
  rejectedApplicationsSuccess: false,
  rejectedApplicationsFailure: false,
  rejectedApplicationsErrorMessage: null,
  rejectedApplicationsData: [],
  applicationRejectProgress: false,
  applicationRejectSuccess: false,
  applicationRejectFailure: false,
  applicationRejectErrorMessage: null
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.REJECTED_APPLICATIONS_PROGRESS: {
      return {
        ...state,
        rejectedApplicationsProgress: true,
        rejectedApplicationsSuccess: false,
        rejectedApplicationsFailure: false,
      };
    }
    case ActionTypes.REJECTED_APPLICATIONS_SUCCESS: {
      return {
        ...state,
        rejectedApplicationsProgress: false,
        rejectedApplicationsSuccess: true,
        rejectedApplicationsFailure: false,
        rejectedApplicationsData: action.payload,
      };
    }
    case ActionTypes.REJECTED_APPLICATIONS_FAILURE: {
      return {
        ...state,
        rejectedApplicationsProgress: false,
        rejectedApplicationsSuccess: false,
        rejectedApplicationsFailure: true,
        rejectedApplicationsErrorMessage: action.payload,
      };
    }
    case ActionTypes.APPLICATION_REJECT_PROGRESS: {
      return {
        ...state,
        applicationRejectProgress: true,
        applicationRejectSuccess: false,
        applicationRejectFailure: false
      }
    }
    case ActionTypes.APPLICATION_REJECT_SUCCESS: {
      return {
        ...state,
        applicationRejectProgress: false,
        applicationRejectSuccess: true,
        applicationRejectFailure: false
      }
    }
    case ActionTypes.APPLICATION_REJECT_FAILURE: {
      return {
        ...state,
        applicationRejectProgress: false,
        applicationRejectSuccess: false,
        applicationRejectFailure: true,
        applicationRejectErrorMessage: action.payload
      }
    }

    default:
      return state;
  }
};
