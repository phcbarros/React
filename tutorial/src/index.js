import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = props => (
  <button type="button"
    className={"square " + (props.winnerMove? 'bg-success' : '')}
    onClick={() => props.onClick()}>
    <span className={props.value === 'X' ? 'text-danger' : 'text-warning'}>{props.value}</span>
  </button>
);

const Board = props => {

  function renderSquare(i) {
    const winnerMove = props.winnerMoves && props.winnerMoves.some((val) => val === i);
    return (
      <Square
        value={props.squares[i]}
        winnerMove={winnerMove}
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
      xIsNext: !this.state.xIsNext,
    });
  }

  getHistory = () => this.state.history.slice(0, this.state.stepNumber + 1);

  getCurrentHistory() {
    const history = this.getHistory();
    return history[history.length - 1];
  }

  whoIsNext = () => `${this.state.xIsNext ? 'X' : 'O'}`;

  updateStatus(current) {
    const winner = calculateWinner(current.squares);
    const hasNull = current.squares.some(value => value === null);
    return winner ? `Winner ${winner.winner}` : hasNull ? `Next ${this.whoIsNext()}` : 'Draw';
  }

  updateColorWinnerMoves(current) {
    const winner = calculateWinner(current.squares);
    return winner ? winner.squares : null;
  }

  //atualiza o histório e quem é o próximo a jogar
  jumpTo = (move) => this.setState({ ...this.state, stepNumber: move, xIsNext: (move % 2) === 0 });

  getMoves() {
    const history = this.getHistory();
    const moves = history.map((step, move) => {
      const desc = move ? `Ir para a jogada ${move}` : 'Reiniciar o jogo';
      const highlight = move === this.state.stepNumber ? 'highlight' : ''
      return (
        <li key={move}>
          <button type="button" onClick={() => this.jumpTo(move)} className={highlight ? 'btn btn-success' : 'btn btn-primary'}>{desc}</button>
        </li>
      )
    });

    return moves;
  }

  render() {
    const current = this.getCurrentHistory();
    const status = this.updateStatus(current);
    const winnerMoves = this.updateColorWinnerMoves(current);
    const moves = this.getMoves();
    
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winnerMoves={winnerMoves}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>
            <h3 className="text-info">{status}</h3>
          </div>
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
    if (squares && squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], squares: [a,b,c] }
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
