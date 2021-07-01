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

export interface IArchivedApplications {
  archivedApplicationsProgress: boolean;
  archivedApplicationsSuccess: boolean;
  archivedApplicationsFailure: boolean;
  archivedApplicationsErrorMessage: null | string;
  archivedApplicationsData: null | object | any;
}
const initialState: IArchivedApplications = {
  archivedApplicationsProgress: false,
  archivedApplicationsSuccess: false,
  archivedApplicationsFailure: false,
  archivedApplicationsErrorMessage: null,
  archivedApplicationsData: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ARCHIVED_APPLICATIONS_PROGRESS: {
      return {
        ...state,
        archivedApplicationsProgress: true,
        archivedApplicationsSuccess: false,
        archivedApplicationsFailure: false,
      };
    }
    case ActionTypes.ARCHIVED_APPLICATIONS_SUCCESS: {
      return {
        ...state,
        archivedApplicationsProgress: false,
        archivedApplicationsSuccess: true,
        archivedApplicationsFailure: false,
        archivedApplicationsData: action.payload,
      };
    }
    case ActionTypes.ARCHIVED_APPLICATIONS_FAILURE: {
      return {
        ...state,
        archivedApplicationsProgress: false,
        archivedApplicationsSuccess: false,
        archivedApplicationsFailure: true,
        archivedApplicationsErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
