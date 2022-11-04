var width, height;
var x, y;
var color;
var clicked = false;

/*
* Coding on a weird position in bed while dying of sleep hits different.
* Everything is dark and it's just music and my thoughts.
*/

// Creates a new clickable stialized button!
class Button {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        // this.render();
        // mouseClicked();
    }

    render() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }

    clicked() {

    }
}