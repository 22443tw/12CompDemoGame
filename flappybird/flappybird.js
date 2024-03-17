/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 600;
const SCREEN_HEIGHT = 800;
const PLAYER_RADIUS = 40;


const OBSTACLE_WIDTH = SCREEN_WIDTH/5.5;
var OBSTACLE_HEIGHT

var spawnDist = 0;
var nextSpawn = 0;
var score = 0;
var player;
  
var screenSelector = "start";  

var obstacles;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    
    cnv= new Canvas(800, 600);
    
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    obstacles = new Group();
    topfloor =  new Sprite(SCREEN_WIDTH/2, -300, SCREEN_WIDTH, 4, 's');
    topfloor.color = color("black");

    world.gravity.y = 40;
    document.addEventListener("keydown", 
        function(event) {
            if(screenSelector == "start"||screenSelector == "end"){
                screenSelector = "game"
                resetGame();
            }else{
                console.log("Key pressed!");
                player.vel.y = -13;
            }
    });

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    if(screenSelector=="game"){
        gameScreen();
    }else if(screenSelector=="end"){
        endScreen();
    }else if(screenSelector=="start"){
        startScreen();
    }else{
        text("wrong screen - you shouldnt get here", 50, 50);
        console.log("wrong screen - you shouldnt get here")
    }
}

function newObstacle(){
    floor =  new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    floor.color = color("black");
    
    var OBSTACLE_HEIGHT = random(100 , 600);
    obstacle = new Sprite((SCREEN_WIDTH + 100),  SCREEN_HEIGHT - OBSTACLE_HEIGHT/2, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = color("yellow");
    obstacle.vel.x = -4;
    
    obstacle2 = new Sprite((SCREEN_WIDTH + 100),0 + 280 - OBSTACLE_HEIGHT/2, OBSTACLE_WIDTH, 700 - OBSTACLE_HEIGHT, 'k');
    obstacle2.color = color("yellow");
    obstacle2.vel.x = -4;
    
    obstacle3 = new Sprite((SCREEN_WIDTH + 100),0 + -510, OBSTACLE_WIDTH, 1000, 'k');
    obstacle3.color = color("yellow");
    obstacle3.vel.x = -4;
    
    obstacles.add(obstacle, obstacle2, obstacle3, floor);
}

function youDead(_player, _obstacle){
    screenSelector = "end";
    player.remove();
    obstacles.removeAll();
}

// Main screen functions

function startScreen(){
    background("white");
    
    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Welcome to the game", 50, 50);
    textSize(24);
    text("Press any key to start", 50, 110);
}

function gameScreen(){
    background("#52e2ff");
    allSprites.visible = true;
    if(frameCount> nextSpawn){
        score++;
        newObstacle();
        nextSpawn = frameCount + (SCREEN_WIDTH/5);
    }
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(score, 50, 50);
}

function endScreen(){
    background("white");

    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You died! Too bad :-(", 50, 50);
    textSize(24);
    text("your score was: "+score, 50, 110);
    textSize(14);
    text("press any key to restart", 50, 150);
}

function resetGame(){
    player = new Sprite(PLAYER_RADIUS*1.2,  SCREEN_HEIGHT/2, PLAYER_RADIUS, 'd');
    player.color = color("purple");
    player.collides(obstacles, youDead);
    score = 0;
}

/*******************************************************/
//  END OF APP
/*******************************************************/
