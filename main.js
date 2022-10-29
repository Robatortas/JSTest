// SPRITES
var c_logo;

// ENTITIES
var cetys;

// GAME VARS
var money = 0;


function preload() {
  c_logo = loadImage("logo_c.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'gray';

  cetys = createSprite(windowWidth/2, windowHeight/2, 1024, 1024);
  cetys.addImage("cetys", c_logo);
  cetys.scale = 0.25;
  cetys.visible = true;
}

function draw() {
  background(230);

  text("Hello World!", 10, 10);

  gui();

  click(cetys);
  if(click(cetys)) money++;

  drawSprites();
}

function gui() {
  textAlign(CENTER);
  fill(color(255, 204, 0))
  strokeWeight(0);
  rect(0, 0, windowWidth, 50);
  
  textSize(25);
  fill(color(100, 100, 100));
  text("CETYS CLICKER", windowWidth/2, windowHeight-10);

  textAlign(CENTER);
  textSize(40);
  fill(color(256, 256, 256));
  text(money, (windowWidth)/2, 40);

  textSize(20);
  fill(color(100, 100, 100));
  text("By: 0^1", 40, windowHeight-10);
}
var clickTime = 0;
function click(entity) {
  if(mousePressedOver(entity)) {
    clickTime++
    // 2 TO LET THE LIBRARY THINK LOL
    if(clickTime == 2) {
      return true;
    }
  } else {
    clickTime = 0;
    return false;
  }
}