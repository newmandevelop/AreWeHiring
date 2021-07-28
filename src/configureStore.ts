import { createStore, applyMiddleware, compose } from 'redux';
import { all } from 'redux-saga/effects';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import authSaga from './Pages/SignUp/saga';
import jobSearchSaga from './Pages/JobOverview/saga';
import allJobsSaga from './Pages/AllJobs/saga';
import CandidateSaga from './Pages/Candidate/saga';
import searchCandidateSaga from './Pages/SearchCandidate/saga';
import addJobSaga from './Pages/PostJob/saga';
import allCompaniesSaga from './Pages/AllCompanies/saga';
import addCompanySaga from './Pages/Employer/AddCompany/saga';
import allUSersSaga from './Pages/AllUsers/saga';
import jobCategoriesSaga from './Pages/Home/Category/saga';
import recentJobs from './Pages/Home/RecentJobs/saga';
import findJobSaga from './Pages/Home/JobSearch/saga';
import jobSpotlightSaga from './Pages/Home/JobSpotlight/saga';
import applyJobSaga from './Pages/ApplyJob/saga';
import draftJobSaga from './Pages/Employer/ManageJobs/DraftJobs/saga';
import approveJobSaga from './Pages/Employer/ManageJobs/ApproveJob/saga';
import archiveJobSaga from './Pages/Employer/ManageJobs/ArchiveJob/saga';
import deleteJobSaga from './Pages/Employer/ManageJobs/DeleteJob/saga';
import approvedApplicationsSaga from './Pages/Employer/ManageApplications/ApproveApplications/saga';
import archivedApplicationsSaga from './Pages/Employer/ManageApplications/ArchiveApplications/saga';
import deletedApplicationsSaga from './Pages/Employer/ManageApplications/DeleteApplications/saga';
import draftApplicationsSaga from './Pages/Employer/ManageApplications/DraftApplications/saga';
import rejectedApplicationsSaga from './Pages/Employer/ManageApplications/RejectApplications/saga';
import fetchApplicationsSaga from './Pages/JobApplications/saga';
import staffSaga from './Pages/Employer/AddStaff/saga';
import searchStaffSaga from './Pages/Employer/ManageStaff/saga';
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const isDev = !process.env.production;

  const composeEnhancers =
    // @ts-ignore
    (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  function* rootSaga() {
    yield all([
      authSaga(),
      allJobsSaga(),
      jobSearchSaga(),
      CandidateSaga(),
      searchCandidateSaga(),
      addJobSaga(),
      allCompaniesSaga(),
      addCompanySaga(),
      allUSersSaga(),
      staffSaga(),
      searchStaffSaga(),
      jobCategoriesSaga(),
      recentJobs(),
      findJobSaga(),
      jobSpotlightSaga(),
      applyJobSaga(),
      draftJobSaga(),
      approveJobSaga(),
      archiveJobSaga(),
      deleteJobSaga(),
      approvedApplicationsSaga(),
      archivedApplicationsSaga(),
      deletedApplicationsSaga(),
      draftApplicationsSaga(),
      rejectedApplicationsSaga(),
      fetchApplicationsSaga(),
    ]);
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
