/*******************************************************/
// Written by Tristan
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv = new Canvas(1000,800)
  world.gravity.y = 10;
  rectangle = new Sprite(100, 500, 80, 80,'d');
  rectangle.colour = 'white';
  rectangle.rotationSpeed = 0; 
  rectangle.friction = 0;
  rectangle.drag = 0;
  platform_1 = new Sprite(500, 750, 1000, 300, 'k');
  platform_1.colour = 'black'
}

document.addEventListener("keydown", 
  function(event) {
  if (event.code === 'ArrowUp') {
      rectangle.vel.y = 33;
  }
  else{ 
       rectangle.vel.y = 0;
}});

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  clear();
  background('pink');
}
