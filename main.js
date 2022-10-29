// SPRITES
var c_logo;

// ENTITIES
var cetys;

let width=0, height=0;

function preload() {
  c_logo = loadImage("logo_c.png");
}

function setup() {
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);

  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'gray';

  cetys = createSprite(100, 100, 1024, 1024);
  cetys.addImage("cetys", c_logo);
  cetys.scale = 0.25;
  cetys.visible = true;

}

function draw() {
  background(230);

  text("Hello World!", 10, 10);

  drawSprites();
}