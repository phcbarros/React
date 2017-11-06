const INITIAL_STATE = { selected: '', visible: {} };

import { SELECTED_TAB, SHOWED_TAB } from './tabActions';

export default function tabReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SELECTED_TAB:
            return { ...state, selected: action.payload };
        case SHOWED_TAB:
            return { ...state, visible: action.payload };
        default:
            return state;
    }
}