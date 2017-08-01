import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sum, subtract, multiply, divide, valueAChanged, valueBChanged } from './calculatorActions';

const Calculator = props => (
    <div className="container">
        <h1>Calculator App</h1>

        <div className="form-horizontal" >
            <p>Digite o primeiro valor</p>
            <input type='number' value={props.calculator.valueA}
                onChange={props.valueAChanged} />
            <br />
            <p>Digite o segundo valor</p>
            <input type='number' value={props.calculator.valueB}
                onChange={props.valueBChanged} />
            <br />

            <button type="button" className="btn btn-success" onClick={props.sum}>
                <i className='fa fa-plus' />
            </button>
            <button type="button" className="btn btn-danger" onClick={props.subtract}>
                <i className='fa fa-minus' />
            </button>
            <button type="button" className="btn btn-warning" onClick={props.multiply}>
                <i className='fa fa-times' />
            </button>
            <button type="button" className="btn btn-info" onClick={props.divide}>
                <i className='fa fa-italic' />
            </button>

            <br />
            <p>Resultado</p>
            <input type='number' value={props.calculator.result} />
        </div>
    </div>
)

const mapStateToProps = state => {
    console.log('aqui', state.calculator);
    return { calculator: state.calculator }
};
const mapDispatchToProps = dispatch => bindActionCreators({ sum, subtract, multiply, divide, valueAChanged, valueBChanged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);