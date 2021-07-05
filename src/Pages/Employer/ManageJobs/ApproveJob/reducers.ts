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
  applicationsForThisJobProgress: boolean;
  applicationsForThisJobSuccess: boolean;
  applicationsForThisJobFailure: boolean;
  applicationFetchErrorMessage: null;
  applicationsDataForThisJob: null | object | any;
  renewJobProgress: boolean;
  renewJobSuccess: boolean;
  renewJobFailure: boolean;
  renewJobErrorMessage: null | string;
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
  applicationsForThisJobProgress: false,
  applicationsForThisJobSuccess: false,
  applicationsForThisJobFailure: false,
  applicationFetchErrorMessage: null,
  applicationsDataForThisJob: [],
  renewJobProgress: false,
  renewJobSuccess: false,
  renewJobFailure: false,
  renewJobErrorMessage: null,
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
    case ActionTypes.GET_APPLICATIONS_FOR_THIS_JOB_PROGRESS: {
      return {
        ...state,
        applicationsForThisJobProgress: true,
        applicationsForThisJobSuccess: false,
        applicationsForThisJobFailure: false,
      };
    }
    case ActionTypes.GET_APPLICATIONS_FOR_THIS_JOB_SUCCESS: {
      return {
        ...state,
        applicationsForThisJobProgress: false,
        applicationsForThisJobSuccess: true,
        applicationsForThisJobFailure: false,
        applicationsDataForThisJob: action.payload,
      };
    }
    case ActionTypes.GET_APPLICATIONS_FOR_THIS_JOB_FAILURE: {
      return {
        ...state,
        applicationsForThisJobProgress: false,
        applicationsForThisJobSuccess: false,
        applicationsForThisJobFailure: true,
        applicationsDataForThisJob: action.payload,
      };
    }
    case ActionTypes.RENEW_JOB_PROGRESS: {
      return {
        ...state,
        renewJobProgress: true,
        renewJobSuccess: false,
        renewJobFailure: false,
      };
    }
    case ActionTypes.RENEW_JOB_SUCCESS: {
      return {
        ...state,
        renewJobProgress: false,
        renewJobSuccess: true,
        renewJobFailure: false,
      };
    }

    case ActionTypes.RENEW_JOB_FAILURE: {
      return {
        ...state,
        renewJobProgrss: false,
        renewJobSuccess: false,
        renewJobFailure: true,
        renewJobErorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
