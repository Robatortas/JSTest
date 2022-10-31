var width, height;
var x, y;

function Button(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    render();
}

function render() {
    fill(30);
    rect(this.x, this.y, this.width, this.height);
}

function clicked() {

}