import { createStore, applyMiddleware, compose } from "redux";
import { all } from "redux-saga/effects";

import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
// import authSaga from './Containers/Auth/saga'
import jobSearchSaga from "./Containers/JobOverview/saga";
import allJobsSaga from "./Containers/AllJobs/saga";
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const isDev = !process.env.production;

  const composeEnhancers =
    // @ts-ignore
    (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  function* rootSaga() {
    yield all([allJobsSaga(), jobSearchSaga()]);
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
