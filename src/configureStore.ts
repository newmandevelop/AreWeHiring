import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
// import authSaga from './Containers/Auth/saga'
import jobSearchSaga from './Containers/Home/saga'
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()

  const isDev = !process.env.production

  const composeEnhancers =
    // @ts-ignore
    (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  )

  sagaMiddleware.run(jobSearchSaga)
  

  return store
}
