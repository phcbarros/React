import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = props => (
  <button className="square" type="button" onClick={() => props.onClick()}>
    {props.value}
  </button>
);

const Board = props => {

  function renderSquare(i) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    )
  }

  function drawSquares() {
    return [0, 3, 6].map((value, i) => {
      return (
        <div className="board-row" key={i}>
          {renderSquare(value)}
          {renderSquare(value + 1)}
          {renderSquare(value + 2)}
        </div>
      );
    });
  }

  return (
    <div>
      {drawSquares()}
    </div>
  );
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(i) {
    const history = this.getHistory();
    const current = this.getCurrentHistory();
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = this.whoIsNext();
    this.setState({
      ...this.state,
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  getHistory = () => {
    return this.state.history.slice(0, this.state.stepNumber + 1);
  }

  getCurrentHistory() {
    const history = this.getHistory();
    return history[history.length - 1];
  }

  whoIsNext = () => `${this.state.xIsNext ? 'X' : 'O'}`;

  updateStatus(current) {
    const winner = calculateWinner(current.squares);
    return winner ? `Winner ${winner}` : `Next ${this.whoIsNext()}`;
  }

  //atualiza o histório e quem é o próximo a jogar
  jumpTo = (move) => this.setState({ ...this.state, stepNumber: move, xIsNext: (move % 2) === 0 });

  getMoves() {
    const history = this.getHistory();
    const moves = history.map((step, move) => {
      const desc = move ? `Ir para a jogada ${move}` : 'Reiniciar jogo';
      return (
        <li key={move}>
          <button type="button" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });

    return moves;
  }

  render() {
    const current = this.getCurrentHistory();
    const status = this.updateStatus(current);
    const moves = this.getMoves();

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
