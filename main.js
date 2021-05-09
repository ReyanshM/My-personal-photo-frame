const { saveAs } = require("./p5");

var video;
function setup(){
    var Canvas=createCanvas(410,340);
    Canvas.parent('canvas');
    video=createCapture(VIDEO);
    video.size(370,320)
    video.hide();
    video.center();
}
function draw(){
    image(video,45,45,320,240);
    // arc(0, 0, 80, 80, 0, PI + QUARTER_PI);
    circle(25, 25, 30);
    circle(25, 315, 30);
    circle(385, 25, 30);
    circle(385, 315, 30);
    line(25, 40, 25, 300);
    line(385, 40, 385, 300);
    line(40, 25, 370, 25);
    line(40, 315, 370, 315);
}
function capture(){
    save("My_img.png");
}