import React, { Component } from 'React';
import Tela from './tela';
import Teclado from './teclado';

export default class Calculadora extends Component {

  constructor(props) {
    super(props);
    this.state = { visor: '', operadores: ['+', '-', 'x', '÷'], decimal: false }

    this.limparTela = this.limparTela.bind(this);
    this.valorBotao = this.valorBotao.bind(this);
  }

  limparTela() {
    this.setState({ ...this.state, visor: '', decimal: false });
  }

  valorBotao(btnVal) {
    let visor = this.state.visor || '';
    let operadores = this.state.operadores;

    if (btnVal == '=') {   
      let equacao = visor;
      let lastChar = equacao[equacao.length - 1];

      if (operadores.indexOf(lastChar) > -1 || lastChar == '.')
        equacao = equacao.replace(/.$/, '');

      if (equacao) {
        let total = eval(equacao);
        if (total.toString().indexOf('.') != -1)
          total = total.toFixed(2);

        this.setState({ ...this.state, visor: total, decimal: false });
      }
      else
       this.setState({ ...this.state, decimal: false })
    }
    else if (operadores.indexOf(btnVal) > -1) {
      let lastChar = visor[visor.length - 1];

      if (visor != '' && operadores.indexOf(lastChar) == -1)
        visor += btnVal;

      else if (visor == '' && btnVal == '-')
        visor += btnVal;

      if (operadores.indexOf(lastChar) > -1 && visor.length > 1) {
        visor = visor.replace(/.$/, btnVal);
      }

      this.setState({ ...this.state, visor: visor, decimal: false });
    }
    else if (btnVal == '.') {
      if (!this.state.decimalAdded) {
        visor += btnVal;
        this.setState({ ...this.state, visor: visor, decimal: true });
      }
    }
    else {
      visor += btnVal;
        this.setState({ ...this.state, visor: visor});
    }
  }

  render() {
    return (<div id="calculator">
      <Tela
        resultado={this.state.visor}
        limparTela={this.limparTela}
      />
      <Teclado
        valorBotao={this.valorBotao}
      />
    </div>
    )
  }
}