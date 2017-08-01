import React from 'react';

export default props => (
    <p className={'text-' + props.style}>
        {props.msg}
    </p>
)