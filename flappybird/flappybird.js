/*******************************************************/
// 12COMP Programming Project 2024 AS91826v1 2.7v1
// Flappybird
// Written by Tristan WOng
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 600;
const SCREEN_HEIGHT = 800;
const PLAYER_RADIUS = 47;


const OBSTACLE_WIDTH = SCREEN_WIDTH/5.5;
var OBSTACLE_HEIGHT

var spawnDist = 0;
var nextSpawn = 0;
var score = 0;
var player;
  
var screenSelector = "start";  

var obstacles;
/*******************************************************/
// setup and create player and ceiling
/*******************************************************/
function setup() {
    imgBG   = loadImage('images/sky.jpg');
    imgBR   = loadImage('images/bird.png');
    cnv= new Canvas(800, 600);
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    obstacles = new Group();
    
    world.gravity.y = 40;

    document.addEventListener("keydown", 
        function(event) {
            if(screenSelector == "start"||screenSelector == "end"){
                screenSelector = "game"
                resetGame();
            }else{
                console.log("Key pressed!");
                imgBR.resize(60, 60);
                player.vel.y = -13;
                player.rotateTo(-10, 9999);
                setTimeout(function() {
                player.rotateTo(90, 3);
                }, 550);
            }
    });
}

/*******************************************************/
//select function to startx
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

/*******************************************************/
//create object and detect player touch object
/******************************************************/
function newObstacle(){
    floor =  new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    floor.color = color("black");
    
    var OBSTACLE_HEIGHT = random(100 , 600);
    obstacle = new Sprite((SCREEN_WIDTH + 100),  SCREEN_HEIGHT - OBSTACLE_HEIGHT/2, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = color("#5800db");
    obstacle.vel.x = -4;
    
    obstacle2 = new Sprite((SCREEN_WIDTH + 100),0 + 280 - OBSTACLE_HEIGHT/2, OBSTACLE_WIDTH, 620 - OBSTACLE_HEIGHT, 'k');
    obstacle2.color = color("#5800db");
    obstacle2.vel.x = -4;
    
    obstacle3 = new Sprite((SCREEN_WIDTH + 100),0 + -2510, OBSTACLE_WIDTH, 5000, 'k');
    obstacle3.color = color("#5800db");
    obstacle3.vel.x = -4;
    
    obstacles.add(obstacle, obstacle2, obstacle3, floor);
}

function Floor(){
    floor =  new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    floor.color = color("black");
    obstacles.add(floor);
}
/*******************************************************/
//what happen player touch object
/******************************************************/
function youDead(_player, _obstacle, _obstacle2, obstacle3, floor){
    screenSelector = "end";
    player.remove();
    obstacles.removeAll();
}

// Main screen functions
/*******************************************************/
//starting screen
/******************************************************/
function startScreen(){
    background("white");
    imgBR.resize(60, 60);
    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Welcome to the game", 50, 50);
    textSize(24);
    text("Press any key to start", 50, 110);
}
/*******************************************************/
//gaming screen
/******************************************************/
function gameScreen(){
    imgBR.resize(60, 60);
    background(imgBG);
    allSprites.visible = true;
    if(frameCount> nextSpawn){
        newObstacle();
        nextSpawn = frameCount + (SCREEN_WIDTH/5);
        setTimeout(function() {
            score++;
        }, 3000);
    }
    Floor();
    textSize(42);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(score, 290, 50);
}
/*******************************************************/
//end screen
/******************************************************/
function endScreen(){
    background("white");
    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You died! Too bad :-(", 50, 50);
    textSize(24);
    text("your score was: "+ score , 50, 110);
    textSize(14);
    text("press any key to restart", 50, 150);
}
/*******************************************************/
//player
/******************************************************/
function resetGame(){
    player = new Sprite(PLAYER_RADIUS*1.2,  SCREEN_HEIGHT/2, PLAYER_RADIUS, 'd');
    player.collides(obstacles, youDead);
    player.addImage(imgBR);
    imgBR.resize(60, 60);
    score = 0;
    setTimeout(function() {
    player.rotateTo(90, 3);
    }, 550);
}

/*******************************************************/
//  END OF APP
/*******************************************************/
