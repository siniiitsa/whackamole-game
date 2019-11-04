export default class Board {
  constructor(sideX, sideY, parent) {
    this.sideX = sideX;
    this.sideY = sideY;
    this.render(parent);
  }

  render(parent) {
    this.board = document.createElement('table');
    this.board.classList.add('board');
    for (let i = 0; i < this.sideY; i++) {
      const row = document.createElement('tr');
      for (let i = 0; i < this.sideX; i++) {
        const cell = document.createElement('td');
        cell.classList.add('cell');
        row.appendChild(cell);
      }
      this.board.appendChild(row);
    }
    parent.appendChild(this.board);
  }
}
