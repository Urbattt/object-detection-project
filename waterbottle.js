Status="";
img="";
object={};
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    object_detector=ml5.objectDetector("cocossd",modelloaded);
}

function modelloaded(){
console.log("model is loaded");
Status=true;
object_detector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function preload(){
img=loadImage("WaterBottles.jpg");
}

function draw(){
image(img,0,0,500,500);
if(Status!=""){
    for(i=0; i<=object.length; i++){
        document.getElementById("status").innerHTML="status is object detected";
        fill("red");
        stroke("blue");
        noFill();
        percent=floor(object[i].confidence*100);
        text(object[i].label+" "+percent+"%",object[i].x, object[i].y);
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
        
    
    }


}
}

function Home(){
    window.location="home.html";
}