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

export interface IDeletedApplications {
  deletedApplicationsProgress: boolean;
  deletedApplicationsSuccess: boolean;
  deletedApplicationsFailure: boolean;
  deletedApplicationsErrorMessage: null | string;
  deletedApplicationsData: null | object | any;
}
const initialState: IDeletedApplications = {
  deletedApplicationsProgress: false,
  deletedApplicationsSuccess: false,
  deletedApplicationsFailure: false,
  deletedApplicationsErrorMessage: null,
  deletedApplicationsData: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.DELETED_APPLICATIONS_PROGRESS: {
      return {
        ...state,
        deletedApplicationsProgress: true,
        deletedApplicationsSuccess: false,
        deletedApplicationsFailure: false,
      };
    }
    case ActionTypes.DELETED_APPLICATIONS_SUCCESS: {
      return {
        ...state,
        deletedApplicationsProgress: false,
        deletedApplicationsSuccess: true,
        deletedApplicationsFailure: false,
        deletedApplicationsData: action.payload,
      };
    }
    case ActionTypes.DELETED_APPLICATIONS_FAILURE: {
      return {
        ...state,
        deletedApplicationsProgress: false,
        deletedApplicationsSuccess: false,
        deletedApplicationsFailure: true,
        deletedApplicationsErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
