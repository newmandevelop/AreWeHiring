import { combineReducers } from "redux";
// import Auth, { IAuthState } from './Containers/Auth/reducers'
import JobSearch, { IJobSearch } from "./Containers/JobOverview/reducers";

export interface IRootState {
  // authState: IAuthState
  jobSearch: IJobSearch;
}

const rootReducer = combineReducers({
  // authState: Auth,
  jobSearch: JobSearch,
});

export default rootReducer;
