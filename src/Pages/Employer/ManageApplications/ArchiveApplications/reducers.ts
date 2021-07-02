import { Action, ActionTypes } from './actions';

export interface IArchivedApplications {
  archivedApplicationsProgress: boolean;
  archivedApplicationsSuccess: boolean;
  archivedApplicationsFailure: boolean;
  archivedApplicationsErrorMessage: null | string;
  archivedApplicationsData: null | object | any;
  sendApplicationToArchiveProgress: boolean;
  sendApplicationToArchiveSuccess: boolean;
  sendApplicationToArchiveFailure: boolean;
  sendApplicationToArchiveErrorMessage: null | object | any;
}
const initialState: IArchivedApplications = {
  archivedApplicationsProgress: false,
  archivedApplicationsSuccess: false,
  archivedApplicationsFailure: false,
  archivedApplicationsErrorMessage: null,
  archivedApplicationsData: [],
  sendApplicationToArchiveProgress: false,
  sendApplicationToArchiveSuccess: false,
  sendApplicationToArchiveFailure: false,
  sendApplicationToArchiveErrorMessage: null
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
    case ActionTypes.SEND_APPLICATION_TO_ARCHIVE_PROGRESS: {
      return {
        ...state,
        sendApplicationToArchiveProgress: true,
        sendApplicationToArchiveSuccess: false,
        sendApplicationToArchiveFailure: false
      }
    }
    case ActionTypes.SEND_APPLICATION_TO_ARCHIVE_SUCCESS: {
      return {
        ...state,
        sendApplicationToArchiveProgress: false,
        sendApplicationToArchiveSuccess: true,
        sendApplicationToArchiveFailure: false
      }
    }
    case ActionTypes.SEND_APPLICATION_TO_ARCHIVE_FAILURE: {
      return {
        ...state,
        sendApplicationToArchiveProgress: false,
        sendApplicationToArchiveSuccess: false,
        sendApplicationToArchiveFailure: true,
        sendApplicationToArchiveErrorMessage: action.payload
      }
    }

    default:
      return state;
  }
};
