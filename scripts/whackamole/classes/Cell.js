export default class Cell {
  constructor(y, x, row) {
    this.x = x;
    this.y = y;
    this.element = null;
    this.available = true;
    this.render(row);
  }

  render(row) {
    const cell = document.createElement('td');
    this.element = cell;
    cell.classList.add('cell');
    row.appendChild(cell);
  }

  activate() {
    this.element.classList.add('active');
  }

  claimPlayer() {
    this.element.classList.remove('active');
    this.element.classList.add('player');
  }

  claimAi() {
    this.element.classList.remove('active');
    this.element.classList.add('ai');
  }

}