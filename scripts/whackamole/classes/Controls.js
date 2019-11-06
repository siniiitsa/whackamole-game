export default class Controls {
  constructor(parent, startGame) {
    this.interval = 1000;
    this.modes = [['Easy', 1500], ['Medium', 1000], ['Hard', 750], ['Impossible', 500]];
    this.modeBtns = [];
    this.startGame = startGame;
    this.scoreBoard = null;
    this.render(parent);
  }

  chooseMode({ target }) {
    console.log(this);
    this.interval = target.dataset.interval
    this.modeBtns.forEach(btn =>
      btn.classList[btn === target ? 'add' : 'remove']('active')
    );
  }

  setScore(playerPoints, aiPoints) {
    this.scoreBoard.children[0].innerText = playerPoints;
    this.scoreBoard.children[1].innerText = aiPoints;
  }

  showWinner(winner) {
    this.scoreBoard.children[2].innerText = `${winner} won!`;
  }

  render(parent) {
    const controlsPanel = document.createElement('div');
    controlsPanel.classList.add('controls');
    this.modes.forEach(([difficulty, interval]) => {
      const button = document.createElement('button');
      button.addEventListener('click', this.chooseMode.bind(this));
      this.modeBtns.push(button);
      button.classList.add('difficulty-btn');
      if (interval === this.interval) {
        button.classList.add('active');
      }
      button.innerText = difficulty;
      button.dataset.interval = interval;
      controlsPanel.appendChild(button);
    });
    const newGameBtn = document.createElement('button');
    newGameBtn.innerText = 'New game';
    newGameBtn.classList.add('new-game-btn');
    newGameBtn.addEventListener('click', () => this.startGame(this.interval));
    controlsPanel.appendChild(newGameBtn);

    this.scoreBoard = document.createElement('div');
    const playerPoints = document.createElement('span');
    playerPoints.classList.add('player-points');
    playerPoints.innerText = '0';
    const aiPoints = document.createElement('span');
    aiPoints.classList.add('ai-points');
    aiPoints.innerText = '0';
    const winnerMessage = document.createElement('span');
    winnerMessage.classList.add('winner-message');
    this.scoreBoard.append(playerPoints, aiPoints, winnerMessage);

    parent.append(controlsPanel, this.scoreBoard);
  }
}
