import React from 'react';

export default props => (
    <button type="button" 
        className={'btn btn-' + props.style}
        onClick={props.onClick}>
        <i className={'fa fa-' + props.icon}></i>
    </button>
)