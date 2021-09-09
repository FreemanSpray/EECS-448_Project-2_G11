let canvas;
let context;

function draw(){
    context.clearRect(0,0,canvas.width,canvas.length);

    console.log("Test");
}

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#myCanvas");
    context = canvas.getContext("2d");
    draw();
  })