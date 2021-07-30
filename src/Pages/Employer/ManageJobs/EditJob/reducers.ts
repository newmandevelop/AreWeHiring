import { Action, ActionTypes } from './actions';

interface IEditJobData {
  id?: string;
  company?: string;
  datePosted?: string;
  employer?: string;
  externalLink?: string;
  expiryDate?: string;
  headerDownloadUri?: string;
  headerImage?: any;
  hoursPerWeek?: number;
  industry?: string;
  jobCategory?: string;
  jobLogo?: any;
  jobTags?: [];
  jobType?: string;
  jobUrl?: string;
  location?: string;
  nameOfJob?: string;
  rateLowerLimit?: number;
  rateUpperLimit?: number;
  recruiterType?: string;
  rolesAndResponsibilities?: [];
  salaryLowerLimit?: number;
  salaryUpperLimit?: number;
  description?: string;
}

export interface IEditJob {
  editJobProgress: boolean;
  editJobSuccess: boolean;
  editJobFailure: boolean;
  updateJobProgress: boolean;
  updateJobSuccess: boolean;
  updateJobFailure: boolean;
  editJobErrorMessage: null | String;
  updateJobErrorMessage: null | String;
  editJobData: IEditJobData;
}
const initialState: IEditJob = {
  editJobProgress: false,
  editJobSuccess: false,
  editJobFailure: false,
  editJobErrorMessage: null,
  updateJobProgress: false,
  updateJobSuccess: false,
  updateJobFailure: false,
  updateJobErrorMessage: null,
  editJobData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.EDIT_JOB_PROGRESS: {
      return {
        ...state,
        editJobProgress: true,
        editJobSuccess: false,
        editJobFailure: false,
      };
    }
    case ActionTypes.EDIT_JOB_SUCCESS: {
      return {
        ...state,
        editJobProgress: false,
        editJobSuccess: true,
        editJobFailure: false,
        editJobData: action.payload,
      };
    }
    case ActionTypes.EDIT_JOB_FAILURE: {
      return {
        ...state,
        editJobProgress: false,
        editJobSuccess: false,
        editJobFailure: true,
        editJobErrorMessage: action.payload,
      };
    }

    case ActionTypes.UPDATE_JOB_PROGRESS: {
      return {
        ...state,
        updateJobProgress: true,
        updateJobSuccess: false,
        updateJobFailure: false,
      };
    }
    case ActionTypes.UPDATE_JOB_SUCCESS: {
      return {
        ...state,
        updateJobProgress: false,
        updateJobSuccess: true,
        updateJobFailure: false,
      };
    }
    case ActionTypes.UPDATE_JOB_FAILURE: {
      return {
        ...state,
        updateJobProgress: false,
        updateJobSuccess: false,
        updateJobFailure: true,
        updateJobErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
