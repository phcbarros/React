export function increment() {
    return { type: 'INC' };
}

export function decrement() {
    return { type: 'DEC'};
}

export function setStep(e) {
    return { 
        type: 'STEP_CHANGED',
        payload: e.target.value
    };
}