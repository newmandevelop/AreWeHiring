import { Action, ActionTypes } from './actions';

interface IEditJobData {
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
  editJobErrorMessage: null | String;
  editJobData: IEditJobData;
}
const initialState: IEditJob = {
  editJobProgress: false,
  editJobSuccess: false,
  editJobFailure: false,
  editJobErrorMessage: null,
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
      console.log('success payload', action.payload);
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

    default:
      return state;
  }
};
