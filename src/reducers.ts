import { combineReducers } from 'redux';
import Auth, { IAuthState } from './Pages/SignUp/reducers';
import JobSearch, { IJobSearch } from './Pages/JobOverview/reducers';
import AllJobSearch, { IAllJobSearch } from './Pages/AllJobs/reducers';
import AddCandidate, { IAddCandidate } from './Pages/Candidate/reducers';
import AddJob, { IAddJob } from './Pages/PostJob/reducers';
import AllCompaniesSearch, { IAllCompanySearch } from './Pages/AllCompanies/reducers';
export interface IRootState {
  authState: IAuthState;
  jobSearch: IJobSearch;
  allJobsSearch: IAllJobSearch;
  candidate: IAddCandidate;
  job: IAddJob;
  allCompaniesSearch: IAllCompanySearch;
}

const rootReducer = combineReducers({
  authState: Auth,
  jobSearch: JobSearch,
  candidate: AddCandidate,
  job: AddJob,
  allJobsSearch: AllJobSearch,
  allCompaniesSearch: AllCompaniesSearch,
});

export default rootReducer;
