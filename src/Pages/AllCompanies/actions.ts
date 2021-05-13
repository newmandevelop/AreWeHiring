export enum ActionTypes {
    ALL_COMPANIES_PROGRESS = "auth/ALL_COMPANIES_PROGRESS",
    ALL_COMPANIES_SUCCESS = "auth/ALL_COMPANIES_SUCCESS",
    ALL_COMPANIES_FAILURE = "auth/ALL_COMPANIES_FAILURE",
  }
  
  export interface AllCompaniesProgress {
    type: ActionTypes.ALL_COMPANIES_PROGRESS;
  }
  
  export interface AllCompaniesSuccess {
    type: ActionTypes.ALL_COMPANIES_SUCCESS;
    payload: any;
  }
  
  export interface AllCompaniesFailure {
    type: ActionTypes.ALL_COMPANIES_FAILURE;
    payload: any;
  }
  
  function allCompaniesProgress(): AllCompaniesProgress {
    return {
      type: ActionTypes.ALL_COMPANIES_PROGRESS,
    };
  }
  function allCompaniesSuccess(payload: any): AllCompaniesSuccess {
    return {
      type: ActionTypes.ALL_COMPANIES_SUCCESS,
      payload,
    };
  }
  
  function allCompaniesFailure(payload: any): AllCompaniesFailure {
    return {
      type: ActionTypes.ALL_COMPANIES_FAILURE,
      payload,
    };
  }
  
  export type Action = AllCompaniesProgress | AllCompaniesFailure | AllCompaniesSuccess;
  
  export const Actions = {
    allCompaniesProgress,
    allCompaniesSuccess,
    allCompaniesFailure,
  };
  