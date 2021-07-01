import { createStore, applyMiddleware, compose } from 'redux';
import { all } from 'redux-saga/effects';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import authSaga from './Pages/SignUp/saga';
import jobSearchSaga from './Pages/JobOverview/saga';
import allJobsSaga from './Pages/AllJobs/saga';
import addCandidateSaga from './Pages/Candidate/saga';
import searchCandidateSaga from './Pages/SearchCandidate/saga';
import addJobSaga from './Pages/PostJob/saga';
import allCompaniesSaga from './Pages/AllCompanies/saga';
import addCompanySaga from './Pages/AddCompany/saga';
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
// import { searchCandidate } from './service/candidate';
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
      addCandidateSaga(),
      searchCandidateSaga(),
      addJobSaga(),
      allCompaniesSaga(),
      addCompanySaga(),
      allUSersSaga(),
      jobCategoriesSaga(),
      recentJobs(),
      findJobSaga(),
      jobSpotlightSaga(),
      applyJobSaga(),
      draftJobSaga(),
      approveJobSaga(),
      archiveJobSaga(),
      deleteJobSaga(),
    ]);
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
