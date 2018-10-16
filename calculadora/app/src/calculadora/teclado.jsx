import React from 'React';
import Botao from './botao';

export default props => (
  <div className="keys">
    <Botao texto="7" />
    <Botao texto="8" />
    <Botao texto="9" />
    <Botao classe="operator" texto="+"/>
    <Botao texto="4" />
    <Botao texto="5" />
    <Botao texto="6" />
    <Botao classe="operator" texto="-"/>
    <Botao texto="1" />
    <Botao texto="2" />
    <Botao texto="3" />
    <Botao classe="operator" texto="÷"/>
    <Botao texto="0" />
    <Botao texto="." />
    <Botao classe="eval" texto="=" />
    <Botao classe="operator" texto="x" />
  </div>
);