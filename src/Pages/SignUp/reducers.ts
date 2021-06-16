import { isUserLoggedIn } from '../../utils/sessionStorage';
import { Action, ActionTypes } from './actions';

interface IUser {
  userRole?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  filledDetails?: boolean;
  id?: string;
}

export interface IAuthState {
  signUpProgress: boolean;
  signUpSuccess: boolean;
  signUpFailure: boolean;
  signUpErrorMessage: null | string;
  loginProgress: boolean;
  loginSuccess: boolean;
  loginFailure: boolean;
  loginErrorMessage: null | string;
  forgetPasswordProgress: boolean;
  forgetPasswordSuccess: boolean;
  forgetPasswordFailure: boolean;
  forgetPasswordErrorMessage: undefined | string;
  userData: IUser;
}
const initialState: IAuthState = {
  signUpProgress: false,
  signUpSuccess: false,
  signUpFailure: false,
  signUpErrorMessage: null,
  loginProgress: false,
  loginSuccess: false,
  loginFailure: false,
  loginErrorMessage: null,
  forgetPasswordProgress: false,
  forgetPasswordSuccess: false,
  forgetPasswordFailure: false,
  forgetPasswordErrorMessage: undefined,
  userData: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SIGNUP_PROGRESS: {
      return {
        ...state,
        signUpProgress: true,
        signUpSuccess: false,
        signUpFailure: false,
      };
    }
    case ActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        signUpProgress: false,
        signUpSuccess: true,
        signUpFailure: false,
        signUpErrorMessage: action.payload,
      };
    }
    case ActionTypes.SIGNUP_FAILURE: {
      return {
        ...state,
        signUpProgress: false,
        signUpSuccess: false,
        signUpFailure: true,
        signUpErrorMessage: action.payload,
      };
    }
    case ActionTypes.LOGIN_PROGRESS: {
      return {
        ...state,
        loginProgress: true,
        loginSuccess: false,
        loginFailure: false,
      };
    }
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loginProgress: false,
        loginSuccess: true,
        loginFailure: false,
        userData: action.payload,
      };
    }
    case ActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        loginProgress: false,
        loginSuccess: false,
        loginFailure: true,
        loginErrorMessage: action.payload,
      };
    }
    case ActionTypes.FORGET_PASSWORD_PROGRESS: {
      return {
        ...state,
        forgetPasswordProgress: true,
        forgetPasswordSuccess: false,
        forgetPasswordFailure: false,
        forgetPasswordErrorMessage: undefined,
      };
    }
    case ActionTypes.FORGET_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgetPasswordProgress: false,
        forgetPasswordSuccess: true,
        forgetPasswordFailure: false,
        forgetPasswordErrorMessage: undefined,
      };
    }
    case ActionTypes.FORGET_PASSWORD_FAILURE: {
      return {
        ...state,
        forgetPasswordProgress: false,
        forgetPasswordSuccess: false,
        forgetPasswordFailure: true,
        forgetPasswordErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
