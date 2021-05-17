import { login, signUp } from './authentication';
import { jobSearchById, allJobsSearch } from './jobSearch';
import {allCompaniesSearch} from './companySearch';
import { addCandidate } from './candidate';
import { addJob } from './jobs';
import {addCompany} from './companies';
export const Authentication = {
  login,
  signUp,
};
export const JobSearch = {
  jobSearchById,
  allJobsSearch,
};

export const Candidate = {
  addCandidate,
};
export const Job = {
  addJob,
};

export const CompanySearch = {
  allCompaniesSearch,
};

export const Company = {
  addCompany,
};