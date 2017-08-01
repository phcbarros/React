import React from 'react';

export default props => (
    <div>
        <label htmlFor="none" className="control-label">{props.label}</label>
        <input type='number'
            placeholder={props.placeholder}
            className="form-control" value={props.value}
            onChange={props.onChange} />
    </div>
)