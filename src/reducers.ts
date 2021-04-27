import { combineReducers } from 'redux';
// import Auth, { IAuthState } from './Containers/Auth/reducers'
import JobSearch, { IJobSearch } from './Containers/JobOverview/reducers';
import AllJobSearch, { IAllJobSearch } from './Containers/AllJobs/reducers';
import AddCandidate, {
  IAddCandidate,
} from './Containers/Dashboard/Candidate/reducers';
export interface IRootState {
  // authState: IAuthState
  jobSearch: IJobSearch;
  allJobsSearch: IAllJobSearch;
  candidate: IAddCandidate;
}

const rootReducer = combineReducers({
  // authState: Auth,
  jobSearch: JobSearch,
  candidate: AddCandidate,
  allJobsSearch: AllJobSearch,
});

export default rootReducer;
