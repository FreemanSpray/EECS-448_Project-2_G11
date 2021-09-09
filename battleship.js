let canvas;
let context;

function draw(){
    context.clearRect(0,0,canvas.width,canvas.length);

    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "green";
    context.rect(75,75,550,550);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.rect(875,75,550,550);
    context.stroke();

    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for(let x=0; x<10;x++){
        context.font = "30px Verdana";
        context.fillText(letters[x], 102.5 + 55*x, 70);
        context.fillText(letters[x], 902.5 + 55*x, 70);
    }
    for(let x=1; x<=9; x++){
        context.font = "30px Verdana";
        context.fillText(x, 55, 105.5 + (x-1)*61.1);
        context.fillText(x, 1425, 105.5 + (x-1)*61.1);
    }
    for (let x=0; x<9; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(130+(55*x),75);
        context.lineTo(130+(55*x), 625);
        context.stroke();
    }
    for (let x=0; x<9; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(930+(55*x),75);
        context.lineTo(930+(55*x), 625);
        context.stroke();
    }
    for(let x=0; x<8; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(75, 136.1+(x*61.1));
        context.lineTo(625, 136.1+(x*61.1));
        context.stroke();
    }
    for(let x=0; x<8; x++){
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "grey";
        context.moveTo(875, 136.1+(x*61.1));
        context.lineTo(1425, 136.1+(x*61.1));
        context.stroke();
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#myCanvas");
    if (canvas != null){
        context = canvas.getContext("2d");
    } 
    draw();
  })