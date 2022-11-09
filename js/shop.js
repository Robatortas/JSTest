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
    fill(color(205+20, 154+20, 100));
    rect((windowWidth/3)-50, 0, 50, 50);

    drawingContext.shadowBlur = 30;
    textSize(30);
    fill(color(255, 255, 255));
    text("X", (windowWidth/3)-50/2, 35);
}