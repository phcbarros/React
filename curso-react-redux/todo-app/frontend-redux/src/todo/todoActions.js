import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const actions = ({
    DESCRIPTION_CHANGED: 'DESCRIPTION_CHANGED',
    TODO_SEARCHED: 'TODO_SEARCHED'
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
    }
};