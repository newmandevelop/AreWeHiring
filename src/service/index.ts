import { login, signUp } from './authentication';
import {
  jobSearchById,
  allJobsSearch,
  findJob,
  jobsInDraft,
  jobsInApprove,
  approveJob,
  archiveJob,
  jobsInArchive,
  deleteJob,
  jobsInDelete,
} from './jobSearch';
import { allCompaniesSearch } from './companySearch';
import { addCandidate, applyJob } from './candidate';
import {
  addJob,
  popularCategories,
  recentJobsSearch,
  jobSpotlight,
} from './jobs';
import { addCompany } from './companies';
import { allUsersSearch } from './users';
import {
  activeListings,
  totalJobViews,
  totalApplication,
  timeBookmarked,
  recentActivities
} from './dashboard';

export const Authentication = {
  login,
  signUp,
};
export const JobSearch = {
  jobSearchById,
  allJobsSearch,
  findJob,
  jobsInDraft,
  jobsInApprove,
  approveJob,
  archiveJob,
  jobsInArchive,
  deleteJob,
  jobsInDelete,
};

export const Candidate = {
  addCandidate,
  applyJob,
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
export const Dashboard = {
  activeListings,
  totalJobViews,
  totalApplication,
  timeBookmarked,
  recentActivities
};
