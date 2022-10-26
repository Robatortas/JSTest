// GENERAL SETTINGS
var gameWidth = 0, gameHeight = 0;

var cetys;

// SPRITES
var cetysButton;

// GAME VARS
var clicks = 0;

function preload() {
  cetysButton = loadImage("logo_c.png");
}

function setup() {
  gameWidth = 1024;
  gameHeight = 1024;
  createCanvas(windowWidth, windowHeight);
  
  
  console.log("WELCOME TO CETYS CLICKER!");
  
  assignButton();

  clicker();
}

var cetysX=0;
var cetysY=0;

function draw() {
  gameWidth = windowWidth;
  gameHeight = windowHeight;
  
  background(230);
  
  cetysX = ((gameWidth-250) + (cetysSizeOffsetter/4))/2;
  cetysY = ((gameHeight-300) + (cetysSizeOffsetter/4))/2;
  
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'gray';
  gui();
  
  cetys = image(cetysButton, cetysX, cetysY, (cetysButton.width-cetysSizeOffsetter)/4, (cetysButton.height-cetysSizeOffsetter)/4);
  
  clickAnim();

  clicker();
}

function gui() {
  textAlign(CENTER);
  fill(color(255, 204, 0))
  strokeWeight(0);
  rect(0, 0, gameWidth, 50);
  
  textSize(25);
  fill(color(100, 100, 100));
  text("CETYS CLICKER", gameWidth/2, gameHeight-10);

  textAlign(CENTER);
  textSize(40);
  fill(color(256, 256, 256));
  text(clicks, (gameWidth)/2, 40);

  textSize(20);
  fill(color(100, 100, 100));
  text("By: 0^1", 40, gameHeight-10);

  // SHOP BUTTON
  // rect(0, 0, 50, 50);
  // textSize(33);
  // fill(color(256, 256, 256));
  // text("$", 24, 35);

  assignButton(0, 0, 50, 50, 0, 0);

  shop();
}

// THE SHOP MENU!
function shop() {


}

// ANIMATION WHEN CLICKED!
function clickAnim() {
  
}

var cetysSizeOffsetter = 0;

var clickerTime = 0;
function clicker() {
  if(pressMouseOnImage(cetysX-cetysSizeOffsetter, cetysY-cetysSizeOffsetter)) {
    clickerTime++
    if(clickerTime == 1) {
      clicks++;
      cetysSizeOffsetter = 20;
    }
  } else {
    clickerTime = 0;
    cetysSizeOffsetter = 0;
  }
}

var button;
function assignButton(x, y, width, height, color, button) {
  rect(x, y, width, height);

}

// Weird looking ass code.
function pressMouseOnImage(containerX, containerY) {  
  if(mouseX <= containerX + cetysButton.width/4 && mouseX >= containerX && mouseY <= containerY + cetysButton.height/4 && mouseY >= containerY && mouseIsPressed) {
    return true;
  }
  return false;
}

var clicked = false;
function mouseClicked() {
  clicked = true;
}