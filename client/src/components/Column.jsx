import React, { Component } from 'react';
import Square from './Square.jsx';

const Column = (props) => {
  let { x, state, onClick } = props;
  let colId = `col${x}`;

  return (
    <div className="column" id={colId}>
      <Square y="0" x={x} color={state['0']} onClick={onClick}/>
      <Square y="1" x={x} color={state['1']} onClick={onClick}/>
      <Square y="2" x={x} color={state['2']} onClick={onClick}/>
      <Square y="3" x={x} color={state['3']} onClick={onClick}/>
      <Square y="4" x={x} color={state['4']} onClick={onClick}/>
      <Square y="5" x={x} color={state['5']} onClick={onClick}/>
      <Square y="6" x={x} color={state['6']} onClick={onClick}/>
      <Square y="7" x={x} color={state['7']} onClick={onClick}/>
    </div>
  )
}

export default Column;