export enum ActionTypes {
    ALL_USERS_PROGRESS = "auth/ALL_USERS_PROGRESS",
    ALL_USERS_SUCCESS = "auth/ALL_USERS_SUCCESS",
    ALL_USERS_FAILURE = "auth/ALL_USERS_FAILURE",
  }
  
  export interface AllUsersProgress {
    type: ActionTypes.ALL_USERS_PROGRESS;
  }
  
  export interface AllUsersSuccess {
    type: ActionTypes.ALL_USERS_SUCCESS;
    payload: any;
  }
  
  export interface AllUsersFailure {
    type: ActionTypes.ALL_USERS_FAILURE;
    payload: any;
  }
  
  function allUsersProgress(): AllUsersProgress {
    return {
      type: ActionTypes.ALL_USERS_PROGRESS,
    };
  }
  function allUsersSuccess(payload: any): AllUsersSuccess {
    return {
      type: ActionTypes.ALL_USERS_SUCCESS,
      payload,
    };
  }
  
  function allUsersFailure(payload: any): AllUsersFailure {
    return {
      type: ActionTypes.ALL_USERS_FAILURE,
      payload,
    };
  }
  
  export type Action = AllUsersProgress | AllUsersFailure | AllUsersSuccess;
  
  export const Actions = {
    allUsersProgress,
    allUsersSuccess,
    allUsersFailure,
  };