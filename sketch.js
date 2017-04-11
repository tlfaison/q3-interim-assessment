var a = 50;
var b = 50;
var newHeight = a+b;

//setup functions executes once 
function setup (){
    createCanvas(600,400);
    background(50,50,50);
    a = 50;
    b = 50;
    newHeight = a+b;
}
function draw(){
    fill(150,0,255);
    ellipse(mouseX,mouseY,100,newHeight);
}