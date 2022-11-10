/*
* Class utilized for the game functions and logic.
*/

var entity;

var cetysOffsetSize = 0;

// SHOP vars
var shopButton;
var shopping = false;

// To render stuff.
function render() {
  // interface();
}

// Goes the same direction as render, it's just for organizations sake!
function tick() {
  cetysOffsetSize = 0;
}

// HITBOX FOR CLICKING STUFF!
function hitbox(x, y, width, height) {
  if(mouseX > x - width && mouseY > y - height && mouseX < x + width && mouseY < y + height) {
    return true;
  }
  return false;
}

function clicking() {
  // Main Cetys Button
  if(hitbox((windowWidth/2), (windowHeight/2), cetys.width/8, cetys.height/8)) {
    money++;
    cetysOffsetSize = 0.005;
  }

  // SHOPPING STUFF!

  // Shop Button
  if(hitbox(shopButton.x, shopButton.y, shopButton.width, shopButton.height)) {
    shopping = true
  }

  // SHOP EXIT
  if(hitbox(exitButton.x, exitButton.y, exitButton.width, exitButton.height)) {
    shopping = false;
}

}