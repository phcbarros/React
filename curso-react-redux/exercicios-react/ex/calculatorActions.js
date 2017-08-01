import { SUM, SUBTRACT, MULTIPLY, DIVIDE, VALUE_A_CHANGED, VALUE_B_CHANGED } from './actionTypes';

export function sum() {
    return { type: SUM };
}

export function subtract() {
    return { type: SUBTRACT };
}

export function multiply() {
    return { type: MULTIPLY };
}

export function divide() {
    return { type: DIVIDE };
}

export function valueAChanged(e) {
    return {
        type: VALUE_A_CHANGED,
        payload: e.target.value
    };
}

export function valueBChanged(e) {
    return {
        type: VALUE_B_CHANGED,
        payload: e.target.value
    };
}