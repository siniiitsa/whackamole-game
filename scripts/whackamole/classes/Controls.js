export default class Controls {
  constructor(game) {
    this.interval = 1000;
    this.modes = [['Easy', 1500], ['Medium', 1000], ['Hard', 500]];
    this.modeBtns = [];
  }

  chooseMode({target}) {
    this.interval = target.dataset.interval
    this.modeBtns.forEach(btn =>
      target.classList[btn === target ? 'add' : 'remove'](active)
    );
  }

  render(parent) {
    const controlsPanel = document.createElement('div');
    controlsPanel.classList.add('controls');
    this.modes.forEach(([difficulty, interval]) => {
      const button = document.createElement('button');
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
    newGameBtn.classList.add('new-game-btn');
    controlsPanel.appendChild(newGameBtn);

    parent.appendChild(controlsPanel);
  }
}
