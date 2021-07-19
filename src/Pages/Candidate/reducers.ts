import { Action, ActionTypes } from './actions';

export interface IAddCandidate {
  addCandidateProgress: boolean;
  addCandidateSuccess: boolean;
  addCandidateFailure: boolean;
  addCandidateErrorMessage: null | String;
  getApplicationsProgress: boolean;
  getApplicationsSuccess: boolean;
  getApplicationsFailure: boolean;
  ApplicationsErrorMessage: null | string;
  candidateApplicationsData: null | object | any;
  getCandidateNotificationsProgress: boolean;
  getCandidateNotificationsSuccess: boolean;
  getCandidateNotificationsFailure: boolean;
  notificationErrorMessage: null | string;
  notificationsData: null | object | any;
}
const initialState: IAddCandidate = {
  addCandidateProgress: false,
  addCandidateSuccess: false,
  addCandidateFailure: false,
  addCandidateErrorMessage: null,
  getApplicationsSuccess: false,
  getApplicationsProgress: false,
  getApplicationsFailure: false,
  ApplicationsErrorMessage: null,
  candidateApplicationsData: [],
  getCandidateNotificationsProgress: false,
  getCandidateNotificationsSuccess: false,
  getCandidateNotificationsFailure: false,
  notificationErrorMessage: null,
  notificationsData: [],
};

export default (state = { initialState }, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_CANDIDATE_PROGRESS: {
      return {
        ...state,
        addCandidateProgress: true,
        addCandidateSuccess: false,
        addCandidateFailure: false,
      };
    }
    case ActionTypes.ADD_CANDIDATE_SUCCESS: {
      return {
        ...state,
        addCandidateProgress: false,
        addCandidateSuccess: true,
        addCandidateFailure: false,
      };
    }
    case ActionTypes.ADD_CANDIDATE_FAILURE: {
      return {
        ...state,
        addCandidateProgress: false,
        addCandidateSuccess: false,
        addCandidateFailure: true,
        addCandidateErrorMessage: action.payload,
      };
    }
    case ActionTypes.GET_CANDIDATE_APPLICATIONS_PROGRESS: {
      return {
        ...state,
        getApplicationsProgress: true,
        getApplicationsSuccess: false,
        getApplicationsFailure: false,
      };
    }
    case ActionTypes.GET_CANDIDATE_APPLICATIONS_SUCCESS: {
      return {
        ...state,
        getApplicationsProgress: false,
        getApplicationsSuccess: true,
        getApplicationsFailure: false,
        candidateApplicationsData: action.payload,
      };
    }
    case ActionTypes.GET_CANDIDATE_APPLICATIONS_FAILURE: {
      return {
        ...state,
        getApplicationsProgress: false,
        getApplicationsSuccess: false,
        getApplicationsFailure: true,
        ErrorMessage: action.payload,
      };
    }
    case ActionTypes.GET_NOTIFICATIONS_PROGRESS: {
      return {
        ...state,
        getCandidateNotificationsProgress: true,
        getCandidateNotificationsSuccess: false,
        getCandidateNotificationsFailure: false,
      };
    }
    case ActionTypes.GET_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        getCandidateNotificationsProgress: false,
        getCandidateNotificationsSuccess: true,
        getCandidateNotificationsFailure: false,
      };
    }
    case ActionTypes.GET_NOTIFICATIONS_FAILURE: {
      return {
        ...state,
        getCandidateNotificationsProgress: false,
        getCandidateNotificationsSuccess: false,
        getCandidateNotificationsFailure: true,
        notificationErrorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};
