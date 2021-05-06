export enum ActionTypes {
  SIGNUP_PROGRESS = 'auth/SIGNUP_PROGRESS',
  SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS',
  SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE',
  LOGIN_PROGRESS = 'auth/LOGIN_PROGRESS',
  LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = 'auth/LOGIN_FAILURE',
  FORGET_PASSWORD_PROGRESS = 'auth/FORGET_PASSWORD_PROGRESS',
  FORGET_PASSWORD_SUCCESS = 'auth/FORGET_PASSWORD_SUCCESS',
  FORGET_PASSWORD_FAILURE = 'auth/FORGET_PASSWORD_FAILURE',
}
export interface SignUpProgress {
  type: ActionTypes.SIGNUP_PROGRESS;
  payload: any;
}

export interface SignUpSuccess {
  type: ActionTypes.SIGNUP_SUCCESS;
  payload: any;
}

export interface SignUpFailure {
  type: ActionTypes.SIGNUP_FAILURE;
  payload: any;
}
export interface LoginProgress {
  type: ActionTypes.LOGIN_PROGRESS;
  payload: any;
}

export interface LoginSuccess {
  type: ActionTypes.LOGIN_SUCCESS;
}

export interface LoginFailure {
  type: ActionTypes.LOGIN_FAILURE;
  payload: any;
}
export interface ForgetPasswordProgress {
  type: ActionTypes.FORGET_PASSWORD_PROGRESS;
  payload: any;
}

export interface ForgetPasswordSuccess {
  type: ActionTypes.FORGET_PASSWORD_SUCCESS;
}

export interface ForgetPasswordFailure {
  type: ActionTypes.FORGET_PASSWORD_FAILURE;
  payload: any;
}

function signUpProgress(payload: any): SignUpProgress {
  return {
    type: ActionTypes.SIGNUP_PROGRESS,
    payload,
  };
}

function signUpSuccess(payload: any): SignUpSuccess {
  return {
    type: ActionTypes.SIGNUP_SUCCESS,
    payload,
  };
}

function signUpFailure(payload: any): SignUpFailure {
  return {
    type: ActionTypes.SIGNUP_FAILURE,
    payload,
  };
}
function loginProgress(payload: any): LoginProgress {
  return {
    type: ActionTypes.LOGIN_PROGRESS,
    payload,
  };
}

function loginSuccess(): LoginSuccess {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
  };
}

function loginFailure(payload: any): LoginFailure {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    payload,
  };
}

function forgetPasswordProgress(payload: any): ForgetPasswordProgress {
  return {
    type: ActionTypes.FORGET_PASSWORD_PROGRESS,
    payload,
  };
}

function forgetPasswordSuccess(): ForgetPasswordSuccess {
  return {
    type: ActionTypes.FORGET_PASSWORD_SUCCESS,
  };
}
function forgetPasswordFailure(payload: any): ForgetPasswordFailure {
  return {
    type: ActionTypes.FORGET_PASSWORD_FAILURE,
    payload,
  };
}

export type Action =
  | SignUpProgress
  | SignUpFailure
  | SignUpSuccess
  | LoginFailure
  | LoginProgress
  | LoginSuccess
  | ForgetPasswordSuccess
  | ForgetPasswordProgress
  | ForgetPasswordFailure;

export const Actions = {
  signUpProgress,
  signUpSuccess,
  signUpFailure,
  loginProgress,
  loginSuccess,
  loginFailure,
  forgetPasswordProgress,
  forgetPasswordSuccess,
  forgetPasswordFailure,
};
