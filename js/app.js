// State variable object 
var state = {};


// ------ LEVEL -------
state.selectedLevel = 0;

// Start class
var Start = function(){
  this.sprite = 'images/terrain/start-screen.png';
};
Start.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), 0, 0);
};
Start.prototype.handleInput = function(key){
  switch(key){
    case 'enter':
      console.log('test');
      state.selectedLevel += 1 ;
    break;
  };
};

var Di = 'images/terrain/dirt-tile50.png'; // dirt tile 50x50
var Gr = 'images/terrain/grass-tile50.png' // grass tile 50x50
var Wh = 'images/terrain/white-tile50.png' // white tile 50x50


// ------ MONSTERS -------



// ------ CHARACTERS -------
var Character = function() {
  
};

var dC = 'images/characters/deathCaster.gif';
var mK = 'images/characters/monk.gif';


// ------ NPCs -------
// Enemies our player must avoid
var NPC = function() {
  // Variables applied to each of our instances go here
  this.sprite = dC;
};
// Update the NPC's position, required method for game
// Parameter: dt, a time delta between ticks
NPC.prototype.update = function(dt) {
  
};
// Draw the NPC on the screen
NPC.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// ------ PLAYER -------
var Player = function() {
  this.sprite = dC;
  
  if(allLevels[state.selectedLevel].levelName === 'charSelectLevel'){
    this.x= 250;
    this.y = 200;
  }
  else{
    this.x = 10;
    this.y = 10;
  }
}

Player.prototype.update = function(){
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
  this.render();

  if(allLevels[state.selectedLevel].levelName === 'charSelectLevel'){
    switch(key) {
      case 'left':
      this.x = this.x - 150;
      if (this.x < 250) {
        this.x = 250;
      }
      break;
      case 'right':
      this.x = this.x + 150;
      if (this.x > 400) {
        this.x = 400;
      }
      break;
    };
  }
  else{
    switch(key) {
      case 'left':
      this.x = this.x - 50;
      if (state.selectedLevel ===1 && this.x < 10) {
        this.x = 10;
        //Changes the level to the startScreen once player reach far left of screen
        state.selectedLevel = 0;
        this.x = 655;
        
      }
      else if (this.x <10) {
        this.x=10;
      }
      break;
      case 'up':
      this.y = this.y - 50;
      if (this.y < 10){
        this.y = 10;
      }
      break;
      case 'right':
      this.x = this.x + 50;
      if (state.selectedLevel === 0 && this.x > 660) {
        this.x = 660;
        //Changes the level to the firstLevel once player reaches far right of screen
        state.selectedLevel = 1;
        this.x = 10;
      }
      else if (this.x >660) {
        this.x = 660;
      };
      break;
      case 'down':
      this.y = this.y + 50;
      if (this.y > 450) {
        this.y = 450;
      }
      default:
      break;
    }
  }
}


// Global functions
var updateLevel = function(){
  currentLevel = allLevels[state.selectedLevel];
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var startScreen = {};
startScreen.levelName = 'startScreen';
startScreen.charRender = 0;
startScreen.tiles = [
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
];
  
  
var charSelectLevel = {};
charSelectLevel.levelName = 'charSelectLevel';
startScreen.charRender = 0;
charSelectLevel.tiles = [
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, dC, Wh, Wh, mK, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
];

var battleLevel = {};
battleLevel.levelName = 'battleLevel';
startScreen.charRender = 1;
battleLevel.tiles = [
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
];

var firstLevel = {};
firstLevel.levelName = 'firstLevel';
startScreen.charRender = 0;
firstLevel.tiles = [
  [Di, Di, Di, Gr, Gr, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di]
];

var secondLevel = {};
secondLevel.secondName = 'secondLevel';
startScreen.charRender = 1;
secondLevel.tiles = [
  [Di, Di, Di, Gr, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Gr, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di]
];

var allLevels = [startScreen, firstLevel, secondLevel];
var currentLevel = allLevels[state.selectedLevel];
var allNPC = [];

var start = new Start();
var player = new Player();
  
  
// This listens for key presses and sends the keys to your
// Player.handleInput() method.

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    13: 'enter',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  if (state.selectedLevel === 0) {
    start.handleInput(allowedKeys[e.keyCode]);
  }  
  else {
    player.handleInput(allowedKeys[e.keyCode]); 
  }
});
