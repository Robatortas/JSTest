var exitButton;

function interface() {
    fill(color(205+20, 154+20, 0));
    rect(0, 0, windowWidth/3, windowHeight);
    
    drawingContext.shadowBlur = 0;

    fill(color(205, 154, 0));
    rect(0, 0, windowWidth/3, 50);

    drawingContext.shadowBlur = 30;
    textSize(40);
    fill(color(255, 255, 255));
    text("SHOP", windowWidth/6, 40);

    drawingContext.shadowBlur = 0;
    // fill(color(205+20, 154+20, 100));
    // rect((windowWidth/3)-50, 0, 50, 50);
    exitButton = new Button((windowWidth/3)-50, 0, 50, 50, color(205+20, 154+20, 100));
    exitButton.render();


    drawingContext.shadowBlur = 30;
    textSize(30);
    fill(color(255, 255, 255));
    text("X", (windowWidth/3)-50/2, 35);

    textSize(30);
    fill(color(255, 255, 255));
    text("UNAVAILABLE\n (for now)", (windowWidth/6), windowHeight/2); 

    drawingContext.shadowBlur = 10;
    content();
}

var items = ["Teacher", "Student"]

function content() {
    text(items[1], 100, 100);

    fill(color(205+20, 154+20, 100));
    for(let i = 0; i < 5; i++) {
        rect(10, 60+(i*90), (windowHeight/2)-15, 80);
    }
}