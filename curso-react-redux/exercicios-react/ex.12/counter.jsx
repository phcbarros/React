import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { inc, dec, stepChanged } from './counterActions';

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input type="number" value={props.counter.step} 
            onChange={props.stepChanged}/>
        <button type="button" onClick={props.dec}>Decrement</button>
        <button type="button" onClick={props.inc}>Increment</button>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);