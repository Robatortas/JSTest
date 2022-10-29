/*
* Class utilized for the game functions and logic.
*/


// To render stuff.
function render() {

}

// Goes the same direction as render, it's just for organizations sake!
function tick() {
    click(cetys);
    if(click(cetys)) money++;

    
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