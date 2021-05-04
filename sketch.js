var h,m,s;
var sAngle,mAngle,hAngle;
var clockimg;

function preload (){
    clockimg=loadImage("clock.png");
}

function setup() {
  createCanvas(400,400);
    angleMode(DEGREES);

}

function draw() {
  background(0,0,0); 
 // image(clockimg,0,0,400,400);

    //shifting the origin to center of the canvas using translate 
    //usec rotate to make 0 degree at 12
    translate(200,200);
    rotate(-90);

    h = hour();
    m = minute();  
    s = second();

    sAngle = map(s,0,60,0,360);
    mAngle = map(m,0,60,0,360);
    hAngle = map(h%12,0,12,0,360);

    // text('Current hour:\n' + h, 5, 50);
    // text('Current minute: \n' + m, 5, 150);
    // text('Current second: \n' + s, 5, 250);

    //drawing hour hand
    push();
    rotate(hAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    //drawing minute hand
    push();
    rotate(mAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop();

    //drawing second hand
    push();
    rotate(sAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop();

     //drawing the arcs 
    stroke(255,0,255);
     point(0,0)
    strokeWeight(10);
    noFill(); 

    //Seconds 
    stroke(255,0,0);
    arc(0,0,300,300,0,sAngle);

    //Minute
    stroke(0,255,0);
    arc(0,0,275,275,0,mAngle);

    //Hour 
    stroke(0,0,255);
    arc(0,0,250,250,0,hAngle);
}