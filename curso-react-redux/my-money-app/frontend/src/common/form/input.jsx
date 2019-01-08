import React from 'react';

export default props => (
    <input
        className="form-control"
        {...props.input}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
)