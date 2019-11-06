import Cell from './Cell.js';

export default class Board {
  constructor(sideX, sideY, parent, playerAction) {
    this.sideX = sideX;
    this.sideY = sideY;
    this.cells = [];
    this.playerAction = playerAction;
    this.render(parent);
  }

  clickHandler({ target }) {
    this.playerAction(target);
  }

  render(parent) {
    this.board = document.createElement('table');
    this.board.classList.add('board');
    for (let y = 0; y < this.sideY; y++) {
      const row = document.createElement('tr');
      for (let x = 0; x < this.sideX; x++) {
        this.cells.push(new Cell(y, x, row));
      }
      this.board.appendChild(row);
    }
    this.board.addEventListener('click', this.clickHandler.bind(this));
    parent.appendChild(this.board);
  }
}
