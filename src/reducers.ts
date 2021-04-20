import { combineReducers } from 'redux'
// import Auth, { IAuthState } from './Containers/Auth/reducers'

interface UserProfile {
  [name: string]: any
}
interface DBSchema {
  [name: string]: any
}
export interface IRootState {
  // authState: IAuthState
}

const rootReducer = combineReducers({
  // authState: Auth,
})

export default rootReducer
