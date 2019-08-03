//variables
var count = 0
var isHeroChosen = false;
var isEnemyChosen = false;
var selectedHero;
var selectedEnemy;

//constructor created to dynamically make characters
function character (name, health, power, image) {
  this.name = name;
  this.health = health;
  this.power = power;
  this.image = image
};

var characterArray = [
  link = new character("Link", 160, 23, 'link.png'),
  zelda = new character("Zelda", 120, 10, 'zelda.png'),
  ganondorf = new character("Ganondorf", 150, 20, 'ganondorf.png'),
  ganon = new character ("Ganon", 180, 25, 'ganon.jpg')
]
