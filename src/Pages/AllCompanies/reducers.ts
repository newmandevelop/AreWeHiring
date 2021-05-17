import { Action, ActionTypes } from "./actions";

export interface IAllCompanySearch {
  allCompaniesProgress: boolean;
  allCompaniesSuccess: boolean;
  allCompaniesFailure: boolean;
  allCompaniesErrorMessage: null | String;
  allCompaniesData: null | Object | any;
}
const initialState: IAllCompanySearch = {
  allCompaniesProgress: false,
  allCompaniesSuccess: false,
  allCompaniesFailure: false,
  allCompaniesErrorMessage: null,
  allCompaniesData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ALL_COMPANIES_PROGRESS: {
      return {
        ...state,
        allCompaniesProgress: true,
        allCompaniesSuccess: false,
        allCompaniesFailure: false,
      };
    }
    case ActionTypes.ALL_COMPANIES_SUCCESS: {
      return {
        ...state,
        allCompaniesProgress: false,
        allCompaniesSuccess: true,
        allCompaniesFailure: false,
        allCompaniesData: action.payload,
      };
    }
    case ActionTypes.ALL_COMPANIES_FAILURE: {
      return {
        ...state,
        allCompaniesProgress: false,
        allCompaniesSuccess: false,
        allCompaniesFailure: true,
        allCompaniesErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
