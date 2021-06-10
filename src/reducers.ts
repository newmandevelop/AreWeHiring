import { combineReducers } from 'redux';
import Auth, { IAuthState } from './Pages/SignUp/reducers';
import JobSearch, { IJobSearch } from './Pages/JobOverview/reducers';
import AllJobSearch, { IAllJobSearch } from './Pages/AllJobs/reducers';
import AddCandidate, { IAddCandidate } from './Pages/Candidate/reducers';
import AddJob, { IAddJob } from './Pages/PostJob/reducers';
import AllCompaniesSearch, {
  IAllCompanySearch,
} from './Pages/AllCompanies/reducers';
import AddCompany, { IAddCompany } from './Pages/AddCompany/reducers';
import AllUserSearch, { IAllUserSearch } from './Pages/AllUsers/reducers';
import JobCategories, { IJobCategory } from './Pages/Home/Category/reducers';
import FindJob, { IFindJob } from './Pages/Home/JobSearch/reducers';
import JobSpotlight, {
  IJobSpotlight,
} from './Pages/Home/JobSpotlight/reducers';
import RecentJobsCategories, {
  IRecentJobs,
} from './Pages/Home/RecentJobs/reducers';
import applyJob, {IApplyJob} from './Pages/ApplyJob/reducers'


export interface IRootState {
  authState: IAuthState;
  jobSearch: IJobSearch;
  allJobsSearch: IAllJobSearch;
  candidate: IAddCandidate;
  job: IAddJob;
  allCompaniesSearch: IAllCompanySearch;
  company: IAddCompany;
  allUserSearch: IAllUserSearch;
  jobCategory: IJobCategory;
  recentJobs: IRecentJobs;
  findJob: IFindJob;
  jobSpotlight: IJobSpotlight;
  applyJob:IApplyJob
}

const rootReducer = combineReducers({
  authState: Auth,
  jobSearch: JobSearch,
  candidate: AddCandidate,
  job: AddJob,
  allJobsSearch: AllJobSearch,
  allCompaniesSearch: AllCompaniesSearch,
  company: AddCompany,
  allUserSearch: AllUserSearch,
  jobCategory: JobCategories,
  recentJobs: RecentJobsCategories,
  findJob: FindJob,
  jobSpotlight: JobSpotlight,
  applyJob:applyJob
});

export default rootReducer;
