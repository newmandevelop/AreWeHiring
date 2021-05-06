import { login, signUp } from './authentication';
import { jobSearchById, allJobsSearch } from './jobSearch';
import { addCandidate } from './candidate';
import { addJob } from './jobs';
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
