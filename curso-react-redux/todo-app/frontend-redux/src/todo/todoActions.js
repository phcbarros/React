import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const actions = ({
    DESCRIPTION_CHANGED: 'DESCRIPTION_CHANGED',
    TODO_SEARCHED: 'TODO_SEARCHED',
    TODO_CLEAR: 'TODO_CLEAR'
});

export const changeDescription = event => ({
    type: actions.DESCRIPTION_CHANGED,
    payload: event.target.value
});

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`);
    return {
        type: actions.TODO_SEARCHED,
        payload: request
    };
};

export const add = description => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()));
    };
};

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()));
    };
};

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()));
    };
};

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()));
    };
};

export const clear = () => ({ type: actions.TODO_CLEAR });