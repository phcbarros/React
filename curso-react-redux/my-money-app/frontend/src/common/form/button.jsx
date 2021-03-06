import React from 'react';

export default props => (
    <button 
        className={`btn btn-${props.style}`}
        type={props.type}
        onClick={props.onClick}>
        {props.label}
    </button>
)