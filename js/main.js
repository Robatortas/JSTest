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

  cetys = createSprite(windowWidth/2, windowHeight/2, 1024, 1024);
  cetys.addImage("cetys", c_logo);
  cetys.visible = true;
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(230);

  cetys.scale = 0.25 - cetysOffsetSize;

  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'gray';

  cetys.x = windowWidth/2;
  cetys.y = windowHeight/2;

  gui();

  tick();

  drawSprites();

  // SHOP STUFF!
  if(shopping) interface();
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
  shopButton = new Button(0, 0, 50, 50, 100);
  shopButton.render();
  // shop = rect(0, 0, 50, 50);
  textSize(33);
  fill(color(256, 256, 256));
  text("$", 24, 35);
}

function mouseClicked() {
  clicking();
}