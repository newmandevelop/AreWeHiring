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

export interface IDraftJob {
  jobsInDraftProgress: boolean;
  jobsInDraftSuccess: boolean;
  jobsInDraftFailure: boolean;
  jobsInDraftErrorMessage: null | string;

  draftJobsData: [IJob] | [];
}
const initialState: IDraftJob = {
  jobsInDraftProgress: false,
  jobsInDraftSuccess: false,
  jobsInDraftFailure: false,
  jobsInDraftErrorMessage: null,

  draftJobsData: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.JOBS_IN_DRAFT_PROGRESS: {
      return {
        ...state,
        jobsInDraftProgress: true,
        jobsInDraftSuccess: false,
        jobsInDraftFailure: false,
      };
    }
    case ActionTypes.JOBS_IN_DRAFT_SUCCESS: {
      return {
        ...state,
        jobsInDraftProgress: false,
        jobsInDraftSuccess: true,
        jobsInDraftFailure: false,
        draftJobsData: action.payload,
      };
    }
    case ActionTypes.JOBS_IN_DRAFT_FAILURE: {
      return {
        ...state,
        jobsInDraftProgress: false,
        jobsInDraftSuccess: false,
        jobsInDraftFailure: true,
        jobsInDraftErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
