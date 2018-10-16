import React from 'React';
import Botao from './botao';

export default props => (
  <div className="keys">
    <Botao texto="7" click={() => props.valorBotao("7")} />
    <Botao texto="8" click={() => props.valorBotao("8")} />
    <Botao texto="9" click={() => props.valorBotao("9")} />
    <Botao classe="operator" texto="+" click={() => props.valorBotao("+")}/>
    <Botao texto="4" click={() => props.valorBotao("4")} />
    <Botao texto="5" click={() => props.valorBotao("5")} />
    <Botao texto="6" click={() => props.valorBotao("6")} />
    <Botao classe="operator" texto="-" click={() => props.valorBotao("-")}/>
    <Botao texto="1" click={() => props.valorBotao("1")} />
    <Botao texto="2" click={() => props.valorBotao("2")} />
    <Botao texto="3" click={() => props.valorBotao("3")} />
    <Botao classe="operator" texto="÷" click={() => props.valorBotao("÷")}/>
    <Botao texto="0" click={() => props.valorBotao("0")} />
    <Botao texto="." click={() => props.valorBotao(".")} />
    <Botao classe="eval" texto="=" click={() => props.valorBotao("=")}/>
    <Botao classe="operator" texto="x" click={() => props.valorBotao("x")}/>
  </div>
);