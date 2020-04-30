var pen=[];
var penpath=[];
function preload(){
    bg=loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1450,850);
}

function draw(){
    background("black");
    for(var i=0;i<pen.length;i++){
        fill("yellow");
        stroke("yellow");
        strokeWeight(10);
        ellipse(pen[i][0],pen[i][1],10,10);
        ellipse(pen[i][0]+1,pen[i][1]+1,10,10);
        ellipse(pen[i][0]-1,pen[i][1]-1,10,10);
    }
}
function mouseDragged(){
    penpath=[mouseX,mouseY];
    pen.push(penpath);
}