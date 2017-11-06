const INITIAL_STATE = { selected: 'tabList' };

import { SELECTED_TAB } from './tabActions';

export default function tabReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SELECTED_TAB:
            return { ...state, selected: action.payload };
        default:
            return state;
    }
}