import { Action, ActionTypes } from "./actions";

export interface IAllUserSearch {
  allUsersProgress: boolean;
  allUsersSuccess: boolean;
  allUsersFailure: boolean;
  allUsersErrorMessage: null | String;
  allUsersData: null | Object | any;
}
const initialState: IAllUserSearch = {
  allUsersProgress: false,
  allUsersSuccess: false,
  allUsersFailure: false,
  allUsersErrorMessage: null,
  allUsersData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ALL_USERS_PROGRESS: {
      return {
        ...state,
        allUsersProgress: true,
        allUsersSuccess: false,
        allUsersFailure: false,
      };
    }
    case ActionTypes.ALL_USERS_SUCCESS: {
      return {
        ...state,
        allUsersProgress: false,
        allUsersSuccess: true,
        allUsersFailure: false,
        allUsersData: action.payload,
      };
    }
    case ActionTypes.ALL_USERS_FAILURE: {
      return {
        ...state,
        allUsersProgress: false,
        allUsersSuccess: false,
        allUsersFailure: true,
        allUsersErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};