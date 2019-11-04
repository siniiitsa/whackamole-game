import Game from './classes/Game';

document.querySelectorAll('.whackamole').forEach(parent => {
  new Game(parent);
});
