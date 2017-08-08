import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
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
    })
});

export default rootReducer;