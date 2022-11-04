/*
* Class utilized for the game functions and logic.
*/

var entity;

// const button = new Button(100, 100, 50, 50], 100);

// To render stuff.
function render() {
  // button.render();
}

// Goes the same direction as render, it's just for organizations sake!
function tick() {
}

var clickTime = 0;
function click(entity) {
  this.entity = entity;
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