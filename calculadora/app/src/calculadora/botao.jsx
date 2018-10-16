import React from 'react';

export default props => (
  <button type="button" 
    className={props.classe} onClick={props.click}>{props.texto}</button>
);