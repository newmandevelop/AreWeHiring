export enum ActionTypes {
    ADD_COMPANY_PROGRESS = 'auth/ADD_COMPANY_PROGRESS',
    ADD_COMPANY_SUCCESS = 'auth/ADD_COMPANY_SUCCESS',
    ADD_COMPANY_FAILURE = 'auth/ADD_COMPANY_FAILURE',
  }
  
  export interface AddCompanyProgress {
    type: ActionTypes.ADD_COMPANY_PROGRESS;
    payload: any;
  }
  
  export interface AddCompanySuccess {
    type: ActionTypes.ADD_COMPANY_SUCCESS;
  }
  
  export interface AddCompanyFailure {
    type: ActionTypes.ADD_COMPANY_FAILURE;
    payload: any;
  }
  
  function addCompanyProgress(payload: any): AddCompanyProgress {
    return {
      type: ActionTypes.ADD_COMPANY_PROGRESS,
      payload,
    };
  }
  function addCompanySuccess(): AddCompanySuccess {
    return {
      type: ActionTypes.ADD_COMPANY_SUCCESS,
    };
  }
  
  function addCompanyFailure(payload: any): AddCompanyFailure {
    return {
      type: ActionTypes.ADD_COMPANY_FAILURE,
      payload,
    };
  }
  
  export type Action = AddCompanyProgress | AddCompanyFailure | AddCompanySuccess;
  
  export const Actions = {
    addCompanyProgress,
    addCompanySuccess,
    addCompanyFailure,
  };
  