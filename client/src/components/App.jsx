import React, { Component } from 'react';
import Column from './Column.jsx';
import Board from '../models/Board.js';

const gameBoard = new Board;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenColor: 'red',
      board: gameBoard.board
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    let col = event.target.getAttribute('x');
    gameBoard.togglePiece(col);
    gameBoard.toggleTokenColor();
    this.setState({ board: gameBoard.board})
  }

  render() {
    let {
      col0,
      col1,
      col2,
      col3,
      col4,
      col5,
      col6,
      col7
    } = this.state.board;

    return (
      <div>
        <Column onClick={this.onClickHandler} x="0" state={col0}/>
        <Column onClick={this.onClickHandler} x="1" state={col1}/>
        <Column onClick={this.onClickHandler} x="2" state={col2}/>
        <Column onClick={this.onClickHandler} x="3" state={col3}/>
        <Column onClick={this.onClickHandler} x="4" state={col4}/>
        <Column onClick={this.onClickHandler} x="5" state={col5}/>
        <Column onClick={this.onClickHandler} x="6" state={col6}/>
        <Column onClick={this.onClickHandler} x="7" state={col7}/>
      </div>
    )
  }
}

export default App;