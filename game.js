/*******************************************************/
// Written by Tristan
/*******************************************************/


function setup() {
  cnv = new Canvas(1000,800)
  
  world.gravity.y = 10;
  
  rectangle = new Sprite(100, 500, 80, 80,'d');
  rectangle.colour = 'white';
  
  platform_1 = new Sprite(500, 750, 1000, 300, 'k');
  platform_1.colour = 'black';
  
  obstacle = new Sprite(900, 500 , 80, 80, 'd');
  obstacle.color = color("yellow");
  obstacle.vel.x = -10;
}

document.addEventListener("keydown", 
    function(event) {
        console.log("Key pressed!"+rectangle.y);
            if(rectangle.y > 558 ){
            console.log("Key pressed!");
            rectangle.vel.y = -9;
    }
});

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('pink');
}
