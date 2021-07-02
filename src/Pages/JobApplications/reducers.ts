import { Action, ActionTypes } from './actions';

export interface IFetchApplications {
  fetchApplicationsProgress: boolean;
  fetchApplicationsSuccess: boolean;
  fetchApplicationsFailure: boolean;
  fetchApplicationsErrorMessage: null | string;
  fetchApplicationsData: null | object | any;
}
const initialState: IFetchApplications = {
  fetchApplicationsProgress: false,
  fetchApplicationsSuccess: false,
  fetchApplicationsFailure: false,
  fetchApplicationsErrorMessage: null,
  fetchApplicationsData: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_APPLICATIONS_PROGRESS: {
      return {
        ...state,
        fetchApplicationsProgress: true,
        fetchApplicationsSuccess: false,
        fetchApplicationsFailure: false,
      };
    }
    case ActionTypes.FETCH_APPLICATIONS_SUCCESS: {
      return {
        ...state,
        fetchApplicationsProgress: false,
        fetchApplicationsSuccess: true,
        fetchApplicationsFailure: false,
        fetchApplicationsData: action.payload,
      };
    }
    case ActionTypes.FETCH_APPLICATIONS_FAILURE: {
      return {
        ...state,
        fetchApplicationsProgress: false,
        fetchApplicationsSuccess: false,
        fetchApplicationsFailure: true,
        fetchApplicationsErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
