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

export interface IRejectedApplications {
  rejectedApplicationsProgress: boolean;
  rejectedApplicationsSuccess: boolean;
  rejectedApplicationsFailure: boolean;
  rejectedApplicationsErrorMessage: null | string;
  rejectedApplicationsData: null | object | any;
}
const initialState: IRejectedApplications = {
  rejectedApplicationsProgress: false,
  rejectedApplicationsSuccess: false,
  rejectedApplicationsFailure: false,
  rejectedApplicationsErrorMessage: null,
  rejectedApplicationsData: [],
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

    default:
      return state;
  }
};
