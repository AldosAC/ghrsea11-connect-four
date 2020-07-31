import React, { Component } from 'react';
import Column from './Column.jsx';
import Board from '../models/Board.js';

const gameBoard = new Board;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: gameBoard.board,
      winner: false,
      tie: false,
      playCounter: 0
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    let x = event.target.getAttribute('x');
    let piecePos = { x: x };
    let col = gameBoard.getColumn(x);
    let newState = {};

    piecePos.y = gameBoard.placePiece(col);
    if (piecePos.y === -1) { //unable to place piece
      return; 
    }
    newState.board = gameBoard.board;
    newState.playCounter = this.state.playCounter + 1;
    if (newState.playCounter === 64) {
      newState.tie = true;
    }

    if(gameBoard.checkWinner(piecePos)) {
      newState.winner = true;
    }

    this.setState(newState);
  }

  renderBoard() {
    let {
      col0,
      col1,
      col2,
      col3,
      col4,
      col5,
      col6,
      col7,
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

  render() {
    let { winner, tie } = this.state;

    if(winner) {
      return (
        <div>
          <h1>MATCH FOUR!  GAME OVER!</h1>
          {this.renderBoard()}
        </div>
      )
    } else if (tie) {
      return (
        <div>
          <h1>TIE GAME!  GAME OVER!</h1>
          {this.renderBoard()}
        </div>
      )
    } else {
      return this.renderBoard();
    }
    
  }
}

export default App;