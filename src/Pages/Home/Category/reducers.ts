import { Action, ActionTypes } from './actions';

export interface IJobCategory {
  jobCategoriesProgress: boolean;
  jobCategoriesSuccess: boolean;
  jobCategoriesFailure: boolean;
  jobCategoriesErrorMessage: null | String;
  jobCategoriesData: null | Object | any;
}
const initialState: IJobCategory = {
  jobCategoriesProgress: false,
  jobCategoriesSuccess: false,
  jobCategoriesFailure: false,
  jobCategoriesErrorMessage: null,
  jobCategoriesData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.JOB_CATEGORIES_PROGRESS: {
      return {
        ...state,
        jobCategoriesProgress: true,
        jobCategoriesSuccess: false,
        jobCategoriesFailure: false,
      };
    }
    case ActionTypes.JOB_CATEGORIES_SUCCESS: {
      return {
        ...state,
        jobCategoriesProgress: false,
        jobCategoriesSuccess: true,
        jobCategoriesFailure: false,
        jobCategoriesData: action.payload,
      };
    }
    case ActionTypes.JOB_CATEGORIES_FAILURE: {
      return {
        ...state,
        jobCategoriesProgress: false,
        jobCategoriesSuccess: false,
        jobCategoriesFailure: true,
        jobCategoriesErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
