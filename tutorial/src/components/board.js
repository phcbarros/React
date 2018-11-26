import React from 'react';
import Square from './square';

export default props => {
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