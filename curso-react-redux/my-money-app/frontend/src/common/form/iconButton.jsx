import React from 'react';

export default props => (
    <button 
        className={`btn btn-${props.style}`}
        type={props.type}
        onClick={props.onClick}>
        <i className={`fa fa-${props.icon}`}></i>
    </button>
)