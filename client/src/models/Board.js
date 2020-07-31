
class Board {
  constructor() {
    this.board = {
      col0: {0:'white', 1:'white', 2:'white', 3:'white', 4:'white', 5:'white', 6:'white', 7:'white'},
      col1: {0:'white', 1:'white', 2:'white', 3:'white', 4:'white', 5:'white', 6:'white', 7:'white'},
      col2: {0:'white', 1:'white', 2:'white', 3:'white', 4:'white', 5:'white', 6:'white', 7:'white'},
      col3: {0:'white', 1:'white', 2:'white', 3:'white', 4:'white', 5:'white', 6:'white', 7:'white'},
      col4: {0:'white', 1:'white', 2:'white', 3:'white', 4:'white', 5:'white', 6:'white', 7:'white'},
      col5: {0:'white', 1:'white', 2:'white', 3:'white', 4:'white', 5:'white', 6:'white', 7:'white'},
      col6: {0:'white', 1:'white', 2:'white', 3:'white', 4:'white', 5:'white', 6:'white', 7:'white'},
      col7: {0:'white', 1:'white', 2:'white', 3:'white', 4:'white', 5:'white', 6:'white', 7:'white'},
    }
    this.nextPiece = 'red'
    this.togglePiece = this.togglePiece.bind(this);
    this.checkHorizontalMatch = this.checkHorizontalMatch.bind(this);
  }

  checkWinner(piecePos) {
    let { x, y } = piecePos;
    let col = this.getColumn(x);

    if(this.checkVertMatch(col)) {
      return true;
    } else if(this.checkHorizontalMatch(y)) {
      return true;
    } else {
      return false;
    }
  }

  checkVertMatch(col) {
    let count = 0;
    let lastSpace = undefined;
    for (let key in col) {
      if (!lastSpace) {
        count = 1;
        lastSpace = col[key];
      } else if (col[key] !== 'white' && col[key] === lastSpace) {
        count++;
        lastSpace = col[key]
      } else {
        count = 1;
        lastSpace = col[key]
      }
      if (count > 3) {
        console.log("Winner!");
        return true;
      }
    }
    return false;
  }

  checkHorizontalMatch(row) {
    let count = 0;
    let lastSpace = undefined;

    for (let i = 0; i < 8; i++) {
      let col = `col${i}`;
      console.log(col);
      let currentSpace = this.board[col][row]
      if (!lastSpace) {
        count = 1;
        lastSpace = currentSpace;
      } else if (currentSpace !== 'white' && currentSpace === lastSpace) {
        count++;
        lastSpace = currentSpace
      } else {
        count = 1;
        lastSpace = currentSpace
      }
      if (count > 3) {
        console.log("Winner!");
        return true;
      }
    }
    return false;
  }

  togglePiece(col) {
    console.log(`.togglePiece col: ${JSON.stringify(col)}`);
    let token = this.nextPiece;
    for (let key in col) {
      if(col[key] !== 'white') {
        console.log(`Toggling key ${key}`);
        let tokenPos = key - 1;
        col[tokenPos] = token;
        return tokenPos;
      } else if (key === '7') {
        console.log(`Toggling last key: ${key}`);
        let tokenPos = key
        col[tokenPos] = token;
        return tokenPos;
      }
    }
  } 

  toggleTokenColor() {
    let nextPiece = this.nextPiece;
    if(nextPiece === 'red') {
      this.nextPiece = 'black';
    } else {
      this.nextPiece = 'red';
    }
  }

  getColumn(x) {
    let colName = `col${x}`;
    return this.board[colName];
  }

}

export default Board;