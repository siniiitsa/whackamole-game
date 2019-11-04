import Board from './Board.js';
import Controls from './Controls.js';

export default class Game {
  constructor(parent) {
    this.state = {
      playerPoints: 0,
      aiPoints: 0,
      difficulty: null,
      winner: null
    };
    this.parent = parent;
    this.board = new Board(10, 10, parent);
    // this.cotrols = new Controls(parent);
  }

  startGame() { }

  render(parent) {


  }
}
