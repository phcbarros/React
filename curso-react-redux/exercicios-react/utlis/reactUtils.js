import React from 'react';

function childWithProps (children, props) {
    return React.Children.map(children, child => 
        React.cloneElement(child, {...props}));
}

export { childWithProps }