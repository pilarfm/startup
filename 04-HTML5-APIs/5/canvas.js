

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
window.onload =drawings(context);


function circle(context){
  context.beginPath();
  context.arc(100, 100, 90, 0, 2 * Math.PI);
  context.strokeStyle = "blue";
  context.stroke();
}

function text(context){
  context.beginPath();
  context.font = "20px Verdana";
  context.fillStyle = "magenta";
  context.fillText("Bootcamp UI", 30, 90);
}

function strokeText(context){
  context.font = "20px Arial";
  context.strokeStyle = 'magenta';
  context.strokeText("Globant 2020", 40, 120);

}

function drawings(context) {
  circle(context);
  text(context);
  strokeText(context);
}

const canvasB = document.getElementById("rectangle");
const contextB = canvasB.getContext("2d");
const x = 0;
const y = 0;
canvasB.heigth=1500;
canvasB.width=1500;


function drawRectangle(){
  let gradient = contextB.createLinearGradient(x, y, 400, 100);
  gradient.addColorStop(1, "magenta");
  gradient.addColorStop(0, "pink");
  contextB.fillStyle = gradient;
  contextB.fillRect(x, y, 400, 100);
  contextB.translate(50,50);

}

setInterval(drawRectangle,200); 