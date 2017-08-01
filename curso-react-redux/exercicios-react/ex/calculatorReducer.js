import { SUM, SUBTRACT, MULTIPLY, DIVIDE, VALUE_A_CHANGED, VALUE_B_CHANGED } from './actionTypes';

const INITIAL_STATE = { valueA: 0, valueB: 0, result: 0 };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SUM:
            return { ...state, result: state.valueA + state.valueB };
        case SUBTRACT:
            return { ...state, result: state.valueA - state.valueB };
        case MULTIPLY:
            return { ...state, result: state.valueA * state.valueB };
        case DIVIDE:
            return { ...state, result: (state.valueA / state.valueB) };
        case VALUE_A_CHANGED:
            return { ...state, valueA: +action.payload};
        case VALUE_B_CHANGED:
            return { ...state, valueB: +action.payload };
        default:
            return state;
    }
}