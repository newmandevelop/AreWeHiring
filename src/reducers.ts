import { combineReducers } from 'redux';
import Auth, { IAuthState } from './Pages/SignUp/reducers';
import JobSearch, { IJobSearch } from './Pages/JobOverview/reducers';
import AllJobSearch, { IAllJobSearch } from './Pages/AllJobs/reducers';
import AddCandidate, { IAddCandidate } from './Pages/Candidate/reducers';
import AddJob, { IAddJob } from './Pages/PostJob/reducers';
import JobCategories, { IJobCategory } from './Pages/Home/Category/reducers';
export interface IRootState {
  authState: IAuthState;
  jobSearch: IJobSearch;
  allJobsSearch: IAllJobSearch;
  candidate: IAddCandidate;
  job: IAddJob;
  jobCategory: IJobCategory;
}

const rootReducer = combineReducers({
  authState: Auth,
  jobSearch: JobSearch,
  candidate: AddCandidate,
  job: AddJob,
  allJobsSearch: AllJobSearch,
  jobCategory: JobCategories,
});

export default rootReducer;
