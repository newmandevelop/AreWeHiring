export enum ActionTypes {
  DRAFT_APPLICATIONS_PROGRESS = 'DRAFT_APPLICATIONS_PROGRESS',
  DRAFT_APPLICATIONS_SUCCESS = 'DRAFT_APPLICATIONS_SUCCESS',
  DRAFT_APPLICATIONS_FAILURE = 'DRAFT_APPLICATIONS_FAILURE',
}
export interface DraftApplicationsProgress {
  type: ActionTypes.DRAFT_APPLICATIONS_PROGRESS;
  payload: any;
}

export interface DraftApplicationsSuccess {
  type: ActionTypes.DRAFT_APPLICATIONS_SUCCESS;
  payload: any;
}

export interface DraftApplicationsFailure {
  type: ActionTypes.DRAFT_APPLICATIONS_FAILURE;
  payload: any;
}

function draftApplicationsProgress(payload: any): DraftApplicationsProgress {
  return {
    type: ActionTypes.DRAFT_APPLICATIONS_PROGRESS,
    payload,
  };
}

function draftApplicationsSuccess(payload: any): DraftApplicationsSuccess {
  return {
    type: ActionTypes.DRAFT_APPLICATIONS_SUCCESS,
    payload,
  };
}

function draftApplicationsFailure(payload: any): DraftApplicationsFailure {
  return {
    type: ActionTypes.DRAFT_APPLICATIONS_FAILURE,
    payload,
  };
}

export type Action =
  | DraftApplicationsProgress
  | DraftApplicationsFailure
  | DraftApplicationsSuccess

export const Actions = {
  draftApplicationsProgress,
  draftApplicationsSuccess,
  draftApplicationsFailure,
};
