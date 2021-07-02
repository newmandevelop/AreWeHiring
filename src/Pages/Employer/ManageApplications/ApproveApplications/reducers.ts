import { Action, ActionTypes } from './actions';

export interface IApprovedApplications {
  approvedApplicationsProgress: boolean;
  approvedApplicationsSuccess: boolean;
  approvedApplicationsFailure: boolean;
  approvedApplicationsErrorMessage: null | string;
  approvedApplicationsData: null | object | any;
  applicationApproveProgress: boolean;
  applicationApproveSuccess: boolean;
  applicationApproveFailure: boolean;
  applicationApproveErrorMessage: null | object | any;
}
const initialState: IApprovedApplications = {
  approvedApplicationsProgress: false,
  approvedApplicationsSuccess: false,
  approvedApplicationsFailure: false,
  approvedApplicationsErrorMessage: null,
  approvedApplicationsData: [],
  applicationApproveProgress: false,
  applicationApproveSuccess: false,
  applicationApproveFailure: false,
  applicationApproveErrorMessage: null
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.APPROVED_APPLICATIONS_PROGRESS: {
      return {
        ...state,
        approvedApplicationsProgress: true,
        approvedApplicationsSuccess: false,
        approvedApplicationsFailure: false,
      };
    }
    case ActionTypes.APPROVED_APPLICATIONS_SUCCESS: {
      return {
        ...state,
        approvedApplicationsProgress: false,
        approvedApplicationsSuccess: true,
        approvedApplicationsFailure: false,
        approvedApplicationsData: action.payload,
      };
    }
    case ActionTypes.APPROVED_APPLICATIONS_FAILURE: {
      return {
        ...state,
        approvedApplicationsProgress: false,
        approvedApplicationsSuccess: false,
        approvedApplicationsFailure: true,
        approvedApplicationsErrorMessage: action.payload,
      };
    }
    case ActionTypes.APPLICATION_APPROVE_PROGRESS: {
      return {
        ...state,
        applicationApproveProgress: true,
        applicationApproveSuccess: false,
        applicationApproveFailure: false
      }
    }
    case ActionTypes.APPLICATION_APPROVE_SUCCESS: {
      return {
        ...state,
        applicationApproveProgress: false,
        applicationApproveSuccess: true,
        applicationApproveFailure: false
      }
    }
    case ActionTypes.APPLICATION_APPROVE_FAILURE: {
      return {
        ...state,
        applicationApproveProgress: false,
        applicationApproveSuccess: false,
        applicationApproveFailure: true,
        applicationApproveErrorMessage: action.payload
      }
    }

    default:
      return state;
  }
};
