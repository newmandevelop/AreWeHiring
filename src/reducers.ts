import { combineReducers } from "redux";
// import Auth, { IAuthState } from './Containers/Auth/reducers'
import JobSearch, { IJobSearch } from "./Containers/JobOverview/reducers";
import AllJobSearch, { IAllJobSearch } from "./Containers/AllJobs/reducers";
export interface IRootState {
  // authState: IAuthState
  jobSearch: IJobSearch;
  allJobsSearch: IAllJobSearch;
}

const rootReducer = combineReducers({
  // authState: Auth,
  jobSearch: JobSearch,
  allJobsSearch: AllJobSearch,
});

export default rootReducer;
