img ="";
statuso ="";
object = [];

function preload(){
var imet = document.getElementById("search_input").value;
}

function setup(){
canvas = createCanvas(380,380);
canvas.center();
video = createCapture(VIDEO);
video.size(380,380);
video.hide();
od =ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "detecting-0bjects--------";
}

function modelLoaded(){
console.log("modelLoaded");  
statuso = true;
}

function draw(){
image(video,0,0,380,380);
if (statuso != ""){
r = 0;
g = 0;
b = 0;
od.detect(video,gotresult);
for (i=0;  i<object.length; i++){
document.getElementById("status").innerHTML = "0bjects-detected"; 
document.getElementById("object_number").innerHTML = "Number of objects detected are" + object.length; 
fill(r,g,b);
percent = floor(object[i].confidence*100);
text(object[i].label+""+percent+"%",object[i].x+10,object[i].y+10);
noFill();
stroke(r,g,b);
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}

function gotresult(error,results){
if(error){
console.error(error);
}
console.log(results);
object = results;
}
