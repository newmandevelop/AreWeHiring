export enum ActionTypes {
    APPLY_JOB_PROGRESS = 'auth/APPLY_JOB_PROGRESS',
    APPLY_JOB_SUCCESS = 'auth/APPLY_JOB_SUCCESS',
    APPLY_JOB_FAILURE = 'auth/APPLY_JOB_FAILURE',
}

export interface ApplyJobProgress {
    type: ActionTypes.APPLY_JOB_PROGRESS;
    payload: any;
}

export interface ApplyJobSuccess {
    type: ActionTypes.APPLY_JOB_SUCCESS;
}

export interface ApplyJobFailure {
    type: ActionTypes.APPLY_JOB_FAILURE;
    payload: any;
}

function applyJobProgress(payload: any): ApplyJobProgress {
    return {
        type: ActionTypes.APPLY_JOB_PROGRESS,
        payload,
    };
}
function applyJobSuccess(): ApplyJobSuccess {
    return {
        type: ActionTypes.APPLY_JOB_SUCCESS,
    };
}

function applyJobFailure(payload: any): ApplyJobFailure {
    return {
        type: ActionTypes.APPLY_JOB_FAILURE,
        payload,
    };
}

export type Action =
    | ApplyJobProgress
    | ApplyJobSuccess
    | ApplyJobFailure;

export const Actions = {
    applyJobProgress,
    applyJobSuccess,
    applyJobFailure,
};