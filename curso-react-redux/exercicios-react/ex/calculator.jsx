import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sum, subtract, multiply, divide, valueAChanged, valueBChanged } from './calculatorActions';
import IconButton from './iconButton';
import InputNumber from './inputNumber';
import FormGroup from './formGroup';
import ErrorMessage from './errorMessage';

const Calculator = props => (
    <div className='container'>
        <h1>Calculator App</h1>

        <form className='form-horizontal' >
            <FormGroup>
                <InputNumber
                    label='Digite o primeiro valor'
                    placeholder='Digite o primeiro valor'
                    value={props.calculator.valueA}
                    onChange={props.valueAChanged} >
                </InputNumber>
            </FormGroup>
            <FormGroup>
                <InputNumber
                    label='Digite o segundo valor'
                    placeholder='Digite o segundo valor'
                    value={props.calculator.valueB}
                    onChange={props.valueBChanged} >
                </InputNumber>
            </FormGroup>
            <FormGroup>
                <IconButton style='success' icon='plus' text='SUM' onClick={props.sum} />
                <IconButton style='danger' icon='minus' text='MINUS' onClick={props.subtract} />
                <IconButton style='warning' icon='times' text='Multiply' onClick={props.multiply} />
                <IconButton style='info' text='Divide' onClick={props.divide} />
            </FormGroup>
            <FormGroup>
                <InputNumber
                    label='Resultado'
                    placeholder='Resultado'
                    value={props.calculator.result}>
                </InputNumber>
                <ErrorMessage style="danger" msg={props.calculator.msg}>
                </ErrorMessage>
            </FormGroup>
        </form>
    </div>
)

const mapStateToProps = state => ({ calculator: state.calculator });
const mapDispatchToProps = dispatch => bindActionCreators({ sum, subtract, multiply, divide, valueAChanged, valueBChanged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);