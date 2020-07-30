
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
  }

  togglePiece(x) {
    let col = this.getColumn(x);
    console.log(`.togglePiece col: ${JSON.stringify(col)}`);
    let token = this.nextPiece;
    for (let key in col) {
      if(col[key] !== 'white') {
        console.log(`Toggling key ${key}`);
        col[key - 1] = token;
        return;
      } else if (key === '7') {
        console.log(`Toggling last key: ${key}`);
        col[key] = token;
        return;
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