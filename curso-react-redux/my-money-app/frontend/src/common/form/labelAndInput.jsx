import React from 'react';
import Grid from './../layout/grid';
import Input from './input';

export default props => (
    <Grid cols={props.cols}>
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <Input 
                {...props}
                placeholder={props.placeholder} 
                readOnly={props.readOnly}
                type={props.type} />
        </div>
    </Grid>
)