import { actions } from './todoActions';

const INITIAL_STATE = { description: '', list: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.DESCRIPTION_CHANGED:
            return { ...state, description: action.payload };
        case actions.TODO_SEARCHED:
            return { ...state, list: action.payload.data };
        case actions.TODO_ADDED:
            return { ...state, description: '' };
        default:
            return state;
    }
}