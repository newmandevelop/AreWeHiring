import { Action, ActionTypes } from './actions';

export interface IDeletedApplications {
  deletedApplicationsProgress: boolean;
  deletedApplicationsSuccess: boolean;
  deletedApplicationsFailure: boolean;
  deletedApplicationsErrorMessage: null | string;
  deletedApplicationsData: null | object | any;
  applicationDeleteProgress: boolean;
  applicationDeleteSuccess: boolean;
  applicationDeleteFailure: boolean;
  applicationDeleteErrorMessage: null | object | any;
}
const initialState: IDeletedApplications = {
  deletedApplicationsProgress: false,
  deletedApplicationsSuccess: false,
  deletedApplicationsFailure: false,
  deletedApplicationsErrorMessage: null,
  deletedApplicationsData: [],
  applicationDeleteProgress: false,
  applicationDeleteSuccess: false,
  applicationDeleteFailure: false,
  applicationDeleteErrorMessage: null
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
case ActionTypes.APPLICATION_DELETE_PROGRESS: {
      return {
        ...state,
        applicationDeleteProgress: true,
        applicationDeleteSuccess: false,
        applicationDeleteFailure: false
      }
    }
    case ActionTypes.APPLICATION_DELETE_SUCCESS: {
      return {
        ...state,
        applicationDeleteProgress: false,
        applicationDeleteSuccess: true,
        applicationDeleteFailure: false
      }
    }
    case ActionTypes.APPLICATION_DELETE_FAILURE: {
      return {
        ...state,
        applicationDeleteProgress: false,
        applicationDeleteSuccess: false,
        applicationDeleteFailure: true,
        applicationDeleteErrorMessage: action.payload
      }
    }
    default:
      return state;
  }
};
