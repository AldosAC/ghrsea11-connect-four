import React, { Component } from 'react';

const Square = (props) => {
  let { x, y, onClick } = props;
  let color = props.color || "white";

  return (
    <div onClick={onClick} className={`square ${color}`} x={x} y={y}></div>
  )
}

export default Square;