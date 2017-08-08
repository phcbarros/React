import { actions } from './todoActions';

const INITIAL_STATE = {
    description: 'Comprar livro',
    list: [{
        _id: 1,
        description: 'Comprar leite',
        done: true,
    }, {
        _id: 2,
        description: 'Pagar fatura cartão',
        done: false
    }, {
        _id: 3,
        description: 'Montar cadeira quando chegar',
        done: false
    }]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.DESCRIPTION_CHANGED:
            return { ...state, description: action.payload };
        case action.TODO_SEARCHED:
            return { ...state, list: action.payload.data };
        default:
            return state;
    }
}