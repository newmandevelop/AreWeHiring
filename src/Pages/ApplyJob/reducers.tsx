import { Action, ActionTypes } from './actions';

export interface IApplyJob {
    applyJobProgress: boolean;
    applyJobSuccess: boolean;
    applyJobFailure: boolean;
    applyJobErrorMessage: null | String;
}
const initialState: IApplyJob = {
    applyJobProgress: false,
    applyJobSuccess: false,
    applyJobFailure: false,
    applyJobErrorMessage: null,
};


export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.APPLY_JOB_PROGRESS: {
            return {
                ...state,
                applyJobProgress: true,
                applyJobSuccess: true,
                applyJobFailure: false,
            };
        }
        case ActionTypes.APPLY_JOB_SUCCESS: {
            return {
                ...state,
                applyJobProgress: false,
                applyJobSuccess: true,
                applyJobFailure: false,
            };
        }
        case ActionTypes.APPLY_JOB_FAILURE: {
            return {
                ...state,
                applyJobProgress: false,
                applyJobSuccess: false,
                applyJobFailure: true,
                applyJobErrorMessage: action.payload,
            };
        }

        default:
            return state;
    }
};