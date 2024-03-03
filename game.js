/*******************************************************/
// Written by Tristan
/*******************************************************/
const RECTANGLE_HEIGHT = 80;
const RECTANGLE_WIDTH = 80;
var obstacles;
var  spawnDist = 0+1;
var nextSpawn = 0;

const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 800;
const OBSTACLE_HEIGHT = RECTANGLE_HEIGHT;
const OBSTACLE_WIDTH = RECTANGLE_WIDTH;
const RECTANGLE_X = 100;
const RECTANGLE_Y = 558;

function setup() {
    
  cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
  world.gravity.y = 40;
  
  obstacles = new Group();
  
  rectangle = new Sprite(RECTANGLE_X, RECTANGLE_Y, RECTANGLE_WIDTH, RECTANGLE_WIDTH,'d');
  rectangle.colour = 'white';
  
  platform_1 = new Sprite(500, 750, 1000, 300, 's');
  platform_1.colour = 'black';
  
}

document.addEventListener("keydown", 
    function(event) {
            if(rectangle.y > 558 ){
            console.log("Key pressed!");
            rectangle.vel.y = -18;
    }
});

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('pink');
  if(frameCount> nextSpawn){
  newObstacle();
    nextSpawn = frameCount + random(30,100);

  }
}

function newObstacle(){

obstacle = new Sprite(1000, RECTANGLE_Y , OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
  obstacle.color = color("yellow");
  obstacle.vel.x = -10;
    
    obstacles.add(obstacle);
}

function youDead(_rectangle, _obstacle){
    console.log("YouDied")
}
