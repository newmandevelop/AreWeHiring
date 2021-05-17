import { login, signUp } from './authentication';
import { jobSearchById, allJobsSearch, findJob } from './jobSearch';
import { allCompaniesSearch } from './companySearch';
import { addCandidate } from './candidate';
import {
  addJob,
  popularCategories,
  recentJobsSearch,
  jobSpotlight,
} from './jobs';
import { addCompany } from './companies';
import { allUsersSearch } from './users';
export const Authentication = {
  login,
  signUp,
};
export const JobSearch = {
  jobSearchById,
  allJobsSearch,
  findJob,
};

export const Candidate = {
  addCandidate,
};
export const Job = {
  addJob,
  popularCategories,
  recentJobsSearch,
  jobSpotlight,
};

export const CompanySearch = {
  allCompaniesSearch,
};

export const Company = {
  addCompany,
};

export const UserSearch = {
  allUsersSearch,
};
