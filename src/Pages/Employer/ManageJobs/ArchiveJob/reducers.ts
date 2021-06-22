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

export interface IArchiveJob {
  jobsInArchiveProgress: boolean;
  jobsInArchiveSuccess: boolean;
  jobsInArchiveFailure: boolean;
  jobsInArchiveErrorMessage: null | string;
  jobArchivedSuccess: boolean;
  jobArchivedFailure: boolean;
  jobArchivedErrorMessage: string;
  archivedJobsData: [IJob] | [];
}
const initialState: IArchiveJob = {
  jobsInArchiveProgress: false,
  jobsInArchiveSuccess: false,
  jobsInArchiveFailure: false,
  jobsInArchiveErrorMessage: null,
  jobArchivedSuccess: false,
  jobArchivedFailure: false,
  jobArchivedErrorMessage: '',
  archivedJobsData: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.JOBS_IN_ARCHIVE_PROGRESS: {
      return {
        ...state,
        jobsInArchiveProgress: true,
        jobsInArchiveSuccess: false,
        jobsInArchiveFailure: false,
      };
    }
    case ActionTypes.JOBS_IN_ARCHIVE_SUCCESS: {
      return {
        ...state,
        jobsInArchiveProgress: false,
        jobsInArchiveSuccess: true,
        jobsInArchiveFailure: false,
        archivedJobsData: action.payload,
      };
    }
    case ActionTypes.JOBS_IN_ARCHIVE_FAILURE: {
      return {
        ...state,
        jobsInArchiveProgress: false,
        jobsInArchiveSuccess: false,
        jobsInArchiveFailure: true,
        jobsInArchiveErrorMessage: action.payload,
      };
    }
    case ActionTypes.ARCHIVE_JOB_SUCCESS: {
      return {
        ...state,
        jobArchivedSuccess: true,
        jobArchivedFailure: false,
      };
    }
    case ActionTypes.ARCHIVE_JOB_FAILURE: {
      return {
        ...state,
        jobArchivedSuccess: false,
        jobArchivedFailure: true,
        jobArchivedErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
