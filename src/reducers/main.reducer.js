import initialState from "../states/initial-state";
import {DATA_UPDATED, GENERAL_INFO_UPDATED} from "../actions/main.actions";

export default (state = initialState.main, action) => {
    switch (action.type) {
        case DATA_UPDATED: {
            return {
                ...state,
                data: {
                    ...action.data
                },
                updatedAt: action.updatedAt
            };
        }
        case GENERAL_INFO_UPDATED: {
            return {
                ...state,
                generalInfo: {
                    ...action.data
                }
            };
        }
        default:
            return state
    }
};
