// SPRITES
var c_logo;

// ENTITIES
var cetys, shop;

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

  gui();

  render();
  tick();

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

  // SHOP BUTTON
  // shop = rect(0, 0, 50, 50);
  shop = new Button(0, 0, 50, 50, 100);
  textSize(33);
  fill(color(256, 256, 256));
  text("$", 24, 35);

  // click(shop);
  // if(click(shop)) money++;
}