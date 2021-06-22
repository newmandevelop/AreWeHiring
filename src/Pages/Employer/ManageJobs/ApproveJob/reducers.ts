import { Action, ActionTypes } from './actions';

interface IJob {
  id?: string;
  nameOfJob?: string;
  status?: string;
  datePosted?: string;
  employer?: boolean;
  expiryDate?: string;
  dateDeleted?: string;
  dateArchived?: string;
  dateApproved?: string;
}

export interface IApproveJob {
  jobsInApproveProgress: boolean;
  jobsInApproveSuccess: boolean;
  jobsInApproveFailure: boolean;
  jobsInApproveErrorMessage: null | string;
  jobApprovedSuccess: boolean;
  jobApprovedFailure: boolean;
  jobApprovedErrorMessage: string;
  approvedJobsData: [IJob] | [];
}
const initialState: IApproveJob = {
  jobsInApproveProgress: false,
  jobsInApproveSuccess: false,
  jobsInApproveFailure: false,
  jobsInApproveErrorMessage: null,
  jobApprovedSuccess: false,
  jobApprovedFailure: false,
  jobApprovedErrorMessage: '',
  approvedJobsData: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.JOBS_IN_APPROVE_PROGRESS: {
      return {
        ...state,
        jobsInApproveProgress: true,
        jobsInApproveSuccess: false,
        jobsInApproveFailure: false,
      };
    }
    case ActionTypes.JOBS_IN_APPROVE_SUCCESS: {
      return {
        ...state,
        jobsInApproveProgress: false,
        jobsInApproveSuccess: true,
        jobsInApproveFailure: false,
        approvedJobsData: action.payload,
      };
    }
    case ActionTypes.JOBS_IN_APPROVE_FAILURE: {
      return {
        ...state,
        jobsInApproveProgress: false,
        jobsInApproveSuccess: false,
        jobsInApproveFailure: true,
        jobsInApproveErrorMessage: action.payload,
      };
    }
    case ActionTypes.APPROVE_JOB_SUCCESS: {
      return {
        ...state,
        jobApprovedSuccess: true,
        jobApprovedFailure: false,
      };
    }
    case ActionTypes.APPROVE_JOB_FAILURE: {
      return {
        ...state,
        jobApprovedSuccess: false,
        jobApprovedFailure: true,
        jobApprovedErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
