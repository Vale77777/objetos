var video;
var detector;
var label = "Cargando..."

function preload(){
  detector = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/flXsnS9K_/model.json")
}

function setup() {
  createCanvas(400,450);
  video = createCapture(VIDEO);
  video.hide();
  video.size(380,320);
  classifyVideo();
}

function classifyVideo(){
  detector.classify(video, gotDetections);
}
function gotDetections(error,results){
  if(error){
     console.log(error);
    return;
     }
  console.log(results);
  label = results[0].label;
  classifyVideo();
  if(label === "Libro"){
     text("Rojo y azul \npara detectar palabras", 20,400)
     }
  else if(label === "Figura"){
     text("Rojo y azul \nconejito con dientes", 20,400)
     }
  else if(label === "Planta"){
     text("bonita y verde \nnos da oxígeno", 20,400)
     }
   else if(label === "Post its"){
     text("transparentes \npara tomar notas", 20,400)
     }
}

function draw(){
  background("#821737");
  image(video, 10,10);
  textSize(35);
  fill("white");
  text(label,120, 360 )
}

