import { Action, ActionTypes } from './actions';

export interface IAddCompany {
  addCompanyProgress: boolean;
  addCompanySuccess: boolean;
  addCompanyFailure: boolean;
  addCompanyErrorMessage: null | String;
}
const initialState: IAddCompany = {
  addCompanyProgress: false,
  addCompanySuccess: false,
  addCompanyFailure: false,
  addCompanyErrorMessage: null,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMPANY_PROGRESS: {
      return {
        ...state,
        addCompanyProgress: true,
        addCompanySuccess: false,
        addCompanyFailure: false,
      };
    }
    case ActionTypes.ADD_COMPANY_SUCCESS: {
      return {
        ...state,
        addCompanyProgress: false,
        addCompanySuccess: true,
        addCompanyFailure: false,
      };
    }
    case ActionTypes.ADD_COMPANY_FAILURE: {
      return {
        ...state,
        addCompanyProgress: false,
        addCompanySuccess: false,
        addCompanyFailure: true,
        addCompanyErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
