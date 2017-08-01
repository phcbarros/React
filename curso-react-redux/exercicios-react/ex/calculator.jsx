import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sum, subtract, multiply, divide, valueAChanged, valueBChanged } from './calculatorActions';
import IconButton from './iconButton';

const Calculator = props => (
    <div className="container">
        <h1>Calculator App</h1>

        <form className="form-horizontal" >
            <div className="form-group">
                <label htmlFor="none" className="control-label">Digite o primeiro valor</label>
                <input type='number'
                    placeholder="Digite o primeiro valor"
                    className="form-control" value={props.calculator.valueA}
                    onChange={props.valueAChanged} />
            </div>
            <div className="form-group">
                <label htmlFor="none" className="control-label">Digite o segundo valor</label>
                <input type='number'
                    placeholder="Digite o segundo valor"
                    className="form-control" value={props.calculator.valueB}
                    onChange={props.valueBChanged} />
            </div>
            <div className="form-group">
                <IconButton style="success" icon="plus" onClick={props.sum} />
                <IconButton style="danger" icon="minus" onClick={props.sum} />
                <IconButton style="warning" icon="times" onClick={props.sum} />
                <IconButton style="info" icon="italic" onClick={props.sum} />
            </div>
            <div className="form-group">
                <label htmlFor="none" className="control-label">Resultado</label>
                <input type='number'
                    placeholder="Resultado"
                    className="form-control" value={props.calculator.result} />
            </div>
        </form>
    </div>
)

const mapStateToProps = state => {
    console.log('aqui', state.calculator);
    return { calculator: state.calculator }
};
const mapDispatchToProps = dispatch => bindActionCreators({ sum, subtract, multiply, divide, valueAChanged, valueBChanged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);