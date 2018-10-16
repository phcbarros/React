import React from 'react';
import Botao from './botao';

export default props => (
  <div className="top">
    <Botao classe="clear" texto="C" click={props.limparTela} />
    <div className="screen">{props.resultado}</div>
  </div>
);