import React from 'react';
import { childWithProps } from '../utlis/reactUtils';


export default props => (
    <div>
        <h1>Família</h1>
        { childWithProps(props.children, props) }
    </div>
)