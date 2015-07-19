var GAME_HEIGHT = 600;
var GAME_WIDTH = 800;

var ShopCanvas = document.getElementById('shop-canvas');
var GameCanvas = document.getElementById('game-canvas');

// function(Juicy) {
   var Game = new Juicy.Game(GameCanvas, GAME_WIDTH, GAME_HEIGHT);
   Game.setInput(new Juicy.Input(document, {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      SPACE: 32,
      ESC: 27,

      W: 87,
      A: 65,
      S: 83,
      D: 68,
   }));

   document.addEventListener('DOMContentLoaded', function() {
      TransitionManager.toMachine(true);
      Game.setState(new TitleScreen()).run();
   }, false);
// });
