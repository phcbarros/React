import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import './custom.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import calculatorReducer from './calculatorReducer';
import Calculator from './calculator';

const reducers = combineReducers({
    calculator: calculatorReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Calculator />
    </Provider>
    , document.getElementById('app'));