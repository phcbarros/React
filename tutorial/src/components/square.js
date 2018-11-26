import React from 'react';

export default props => (
  <button type="button"
    className={"square " + (props.winnerMove? 'bg-success' : '')}
    onClick={() => props.onClick()}>
    <span className={props.value === 'X' ? 'text-danger' : 'text-warning'}>{props.value}</span>
  </button>
);