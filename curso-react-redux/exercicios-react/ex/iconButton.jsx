import React from 'react';

export default props => (
    <button type='button'
        className={'btn btn-lg btn-' + props.style}
        onClick={props.onClick}>
        {props.text}
        <i className={'fa fa-' + props.icon}>{(props.icon ? '' : '/') }</i>
    </button>
)