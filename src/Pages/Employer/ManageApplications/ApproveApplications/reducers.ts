import { Action, ActionTypes } from './actions';

// interface IJob {
//   id?: string;
//   nameOfJob?: string;
//   status?: string;
//   datePosted?: string;
//   employer?: boolean;
//   expiryDate?: string;
//   dateDeleted?: string;
//   dateArchived?: string;
//   dateApproved?: string;
// }

export interface IApprovedApplications {
  approvedApplicationsProgress: boolean;
  approvedApplicationsSuccess: boolean;
  approvedApplicationsFailure: boolean;
  approvedApplicationsErrorMessage: null | string;
  approvedApplicationsData: null | object | any;
}
const initialState: IApprovedApplications = {
  approvedApplicationsProgress: false,
  approvedApplicationsSuccess: false,
  approvedApplicationsFailure: false,
  approvedApplicationsErrorMessage: null,
  approvedApplicationsData: [],
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

    default:
      return state;
  }
};
