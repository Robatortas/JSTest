/*
* Code is not well written which is kind of evident.
* Everything is being written in one class cuz why not??
* It's just a Clicker Game, why would I make it have seamless code anyway?
* You aren't supposed to see this anyway! Just me.
*/

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
  
  // assignButton();

  clicker();
}

let button;

var cetysX=0, cetysY=0;
var shopButtonX=0, shopButton=0;

function draw() {
  gameWidth = windowWidth;
  gameHeight = windowHeight;
  
button = new Button().build(0, 0, 50, 50, 0);;

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

  // Top Yellow Bar
  textAlign(CENTER);
  fill(color(255, 204, 0))
  strokeWeight(0);
  rect(0, 0, gameWidth, 50);
  
  // Cetys Clicker text
  textSize(25);
  fill(color(100, 100, 100));
  text("CETYS CLICKER", gameWidth/2, gameHeight-10);
  
  // MONEY
  textSize(40);
  fill(color(256, 256, 256));
  text(clicks, (gameWidth)/2, 40);

  // CREDITS
  textSize(20);
  fill(color(100, 100, 100));
  text("By: 0^1", 40, gameHeight-10);

  // SHOP BUTTON
  // assignButton(0, 0, 50, 50, 0, 0);
  // Button(0, 0, 50, 50, 0, 0);
  textSize(33);
  fill(color(256, 256, 256));
  text("$", 24, 35);

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
  // if(pressMouseOnImage((gameWidth-250)/2, (gameHeight-300)/2, cetysButton.width/4, cetysButton.height/4)) {
  //   clickerTime++;
  //   if(clickerTime == 1) {
  //     clicks++;
  //     cetysSizeOffsetter = 20;
  //   }
  // } else {
  //   clickerTime = 0;
  //   cetysSizeOffsetter = 0;
  // }
}

class Button {
  button = 0;
  clickTime = 0;
  sizeOffset = 0;
  isClicked = false;

  build(x, y, width, height, button) {
    rect(x+(this.sizeOffset/2), y+(this.sizeOffset/2), width-this.sizeOffset, height-this.sizeOffset);
  
    if(pressMouseOnImage(x - this.sizeOffset, y - this.sizeOffset, width, height)) {
      this.buildclickTime++;
      if(clickTime == 1) {
        isClicked = true;
        this.sizeOffset = 3;
      }
    } else {
      this.clickTime = 0;
      this.sizeOffset = 0;
    }
  }
}

// Weird looking ass code.
function pressMouseOnImage(containerX, containerY, containerWidth, containerHeight) {  
  if(mouseX <= containerX + containerWidth && mouseX >= containerX && mouseY <= containerY + containerHeight && mouseY >= containerY && mouseIsPressed) return true;
  return false;
}

var clicked = false;
function mouseClicked() {
  clicked = true;
}