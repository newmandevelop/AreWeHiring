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

export interface IDraftApplications {
  draftApplicationsProgress: boolean;
  draftApplicationsSuccess: boolean;
  draftApplicationsFailure: boolean;
  draftApplicationsErrorMessage: null | string;
  draftApplicationsData: null | object | any;
}
const initialState: IDraftApplications = {
  draftApplicationsProgress: false,
  draftApplicationsSuccess: false,
  draftApplicationsFailure: false,
  draftApplicationsErrorMessage: null,
  draftApplicationsData: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.DRAFT_APPLICATIONS_PROGRESS: {
      return {
        ...state,
        draftApplicationsProgress: true,
        draftApplicationsSuccess: false,
        draftApplicationsFailure: false,
      };
    }
    case ActionTypes.DRAFT_APPLICATIONS_SUCCESS: {
      return {
        ...state,
        draftApplicationsProgress: false,
        draftApplicationsSuccess: true,
        draftApplicationsFailure: false,
        draftApplicationsData: action.payload,
      };
    }
    case ActionTypes.DRAFT_APPLICATIONS_FAILURE: {
      return {
        ...state,
        draftApplicationsProgress: false,
        draftApplicationsSuccess: false,
        draftApplicationsFailure: true,
        draftApplicationsErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
