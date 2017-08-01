import { SUM, SUBTRACT, MULTIPLY, DIVIDE, VALUE_A_CHANGED, VALUE_B_CHANGED } from './actionTypes';

const INITIAL_STATE = { valueA: 0, valueB: 0, result: 0, msg: '' };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SUM:
            return { ...state, result: state.valueA + state.valueB, msg: '' };
        case SUBTRACT:
            return { ...state, result: state.valueA - state.valueB, msg: '' };
        case MULTIPLY:
            return { ...state, result: state.valueA * state.valueB, msg: '' };
        case DIVIDE:
            if(+state.valueB === 0)
                return {...state, msg: 'Não é possível efetuar divisão por zero'};
            return { ...state, result: (state.valueA / state.valueB), msg: '' };
        case VALUE_A_CHANGED:
            return { ...state, valueA: +action.payload, msg: ''};
        case VALUE_B_CHANGED:
            return { ...state, valueB: +action.payload, msg: '' };
        default:
            return state;
    }
}