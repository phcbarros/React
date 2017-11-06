const INITIAL_STATE = { list: [] };

import { BILLING_CYCLE_FETCHED } from './billingCycleActions';

export default function billingCycleReducer (state = INITIAL_STATE, action) {
    switch(action.type) {
        case BILLING_CYCLE_FETCHED:
            return { ...state, list: action.payload.data };
        default:
            return state;
    }
}