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

export interface IDeleteJob {
  jobsInDeleteProgress: boolean;
  jobsInDeleteSuccess: boolean;
  jobsInDeleteFailure: boolean;
  jobsInDeleteErrorMessage: null | string;
  jobDeletedSuccess: boolean;
  jobDeletedFailure: boolean;
  jobDeletedErrorMessage: string;
  deleteJobData: IJob;
}
const initialState: IDeleteJob = {
  jobsInDeleteProgress: false,
  jobsInDeleteSuccess: false,
  jobsInDeleteFailure: false,
  jobsInDeleteErrorMessage: null,
  jobDeletedSuccess: false,
  jobDeletedFailure: false,
  jobDeletedErrorMessage: '',
  deleteJobData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.JOBS_IN_DELETE_PROGRESS: {
      return {
        ...state,
        jobsInDeleteProgress: true,
        jobsInDeleteSuccess: false,
        jobsInDeleteFailure: false,
      };
    }
    case ActionTypes.JOBS_IN_DELETE_SUCCESS: {
      return {
        ...state,
        jobsInDeleteProgress: false,
        jobsInDeleteSuccess: true,
        jobsInDeleteFailure: false,
        deleteJobData: action.payload,
      };
    }
    case ActionTypes.JOBS_IN_DELETE_FAILURE: {
      return {
        ...state,
        jobsInDeleteProgress: false,
        jobsInDeleteSuccess: false,
        jobsInDeleteFailure: true,
        jobsInDeleteErrorMessage: action.payload,
      };
    }
    case ActionTypes.DELETE_JOB_SUCCESS: {
      return {
        ...state,
        jobDeletedSuccess: true,
        jobDeletedFailure: false,
      };
    }
    case ActionTypes.DELETE_JOB_FAILURE: {
      return {
        ...state,
        jobDeletedSuccess: false,
        jobDeletedFailure: true,
        jobDeletedErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
