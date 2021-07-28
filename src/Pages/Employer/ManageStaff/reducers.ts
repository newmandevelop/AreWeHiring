import { Action, ActionTypes } from './actions';

export interface ISearchStaff {
  searchUserProgress: boolean;
  searchUserSuccess: boolean;
  searchUserFailure: boolean;
  errorMessage: null | String;
  searchedUsers: [] | object | any;
}

export const initialState: ISearchStaff = {
  searchUserProgress: false,
  searchUserSuccess: false,
  searchUserFailure: false,
  errorMessage: null,
  searchedUsers: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_USER_BY_COMPANY_PROGRESS: {
      return {
        ...state,
        searchUserProgress: true,
        searchUserSuccess: false,
        searchUserFailure: false,
      };
    }

    case ActionTypes.SEARCH_USER_BY_COMPANY_SUCCESS: {
      return {
        ...state,
        searchUserProgress: false,
        searchUserSuccess: true,
        searchUserFailure: false,
        searchedUsers: action.payload,
      };
    }

    case ActionTypes.SEARCH_USER_BY_COMPANY_FAILURE: {
      return {
        ...state,
        searchUserProgress: false,
        searchUserSuccess: false,
        searchUserFailure: true,
        errorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
