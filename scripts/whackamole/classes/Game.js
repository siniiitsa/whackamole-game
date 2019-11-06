import Board from './Board.js';
import Controls from './Controls.js';

export default class Game {
  constructor(parent) {
    this.state = {
      playerPoints: 0,
      aiPoints: 0,
      difficulty: null,
      winner: null,
      activeCell: null
    };
    this.parent = parent;
    this.board = new Board(10, 10, parent, this.playerAction.bind(this));
    this.controls = new Controls(parent, this.start);
  }

  playerAction(target) {
    if (this.state.activeCell && target === this.state.activeCell.element) {
      this.state.activeCell.claimPlayer();
      this.state.playerPoints++;
      this.state.activeCell = null;
      this.controls.setScore(this.state.playerPoints, this.state.aiPoints);
      this.checkForWinner();
    }
  }

  start = (interval) => {
    this.board.cells.forEach(cell => {
      cell.available = true;
      cell.element.className = 'cell';
    })
    this.state.aiPoints = 0;
    this.state.playerPoints = 0;
    this.state.activeCell = null;
    this.stop();
    console.log(this);
    this.intervalID = setInterval(this.tick.bind(this), interval)
  }

  stop() {
    clearInterval(this.intervalID);
  }

  tick() {
    if (this.state.activeCell) {
      this.state.activeCell.claimAi();
      this.state.aiPoints++;
      this.controls.setScore(this.state.playerPoints, this.state.aiPoints);
      if (this.checkForWinner()) return;
    }
    const cells = this.board.cells.filter(cell => cell.available)
    const idx = Math.floor(Math.random() * cells.length);
    cells[idx].available = false;
    this.state.activeCell = cells[idx];
    cells[idx].activate();
  }

  checkForWinner() {
    const winningScore = Math.ceil(this.state.board.cells.length / 2);

    switch (winningScore) {
      case this.state.aiPoints:
        this.state.winner = 'ai';
        break;
      case this.state.playerPoints:
        this.state.winner = 'player';
        break;
      default:
        return;
    }

    this.stop();
    this.controls.showWinner(this.state.winner);
    return true;
  }
}
